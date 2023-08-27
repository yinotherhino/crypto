import fs from "fs/promises";
import { existsSync } from "fs";
import { dirname } from "path";

export default class Repository<T> {
  private fullpath: string;
  private name: string;
  private pkey: string | string[];
  constructor(path: string, pkey: string | string[]) {
    this.fullpath = `${dirname("..")}/db/${path}`;
    this.name = path;
    this.pkey = pkey;
    if (!existsSync(this.fullpath)) {
      fs.mkdir(this.fullpath);
    }
  }

  private checkExists(suffix: string): boolean {
    return existsSync(`${this.fullpath}/${suffix}.json`);
  }

  public async getByPKey(pkeyValue: string): Promise<T> {
    const exists = this.checkExists(pkeyValue);
    if (!exists) {
      throw new Error(`${this.name} not found`, { cause: "NOT_FOUND" });
    }
    const resJSON = await fs.readFile(
      `${this.fullpath}/${pkeyValue}.json`,
      "utf-8"
    );
    return JSON.parse(resJSON) as T;
  }

  public async getOne({ key, value }: { key: string; value: any }): Promise<T> {
    const objs = await this.getAll();
    const obj = objs.find((obj: any) => {
      if (obj[key] === value) {
        return true;
      }
    });
    if (obj) {
      return obj as T;
    } else {
      throw new Error(`${this.name} not found`);
    }
  }

  public async addOne(obj: T, pKeyValue: string): Promise<T> {
    if (this.checkExists(pKeyValue)) {
      throw new Error(`${this.name} already exists`, { cause: "DUPLICATE" });
    }
    await fs.writeFile(`${this.fullpath}/${pKeyValue}.json`, JSON.stringify(obj));
    return obj;
  }

  public async deleteOne(pKeyValue: string) {
    const exists = this.checkExists(pKeyValue);
    if (!exists) {
      throw new Error(`${this.name} not found`, { cause: "NOT_FOUND" });
    }
    await fs.rm(`${this.fullpath}/${pKeyValue}.json`);
    return;
  }

  public async getAll(length?: number): Promise<T[]> {
    const files = await fs.readdir(this.fullpath);
    if (files.length > 0) {
      const res = await Promise.all(
        files.slice(0, length || files.length).map(async (file) => {
          const resJSON = await fs.readFile(
            `${this.fullpath}/${file}`,
            "utf-8"
          );
          return JSON.parse(resJSON) as T;
        })
      );
      return res;
    } else {
      return [];
    }
  }

  public async updateOne(updateDetails: T, pKeyValue: string): Promise<T> {
    const exists = this.checkExists(pKeyValue);
    if (!exists) {
      throw new Error(`${this.name} not found`, { cause: "NOT_FOUND" });
    }
    const obj = await this.getByPKey(pKeyValue);
    const updatedObj = { ...obj, ...updateDetails };
    await fs.writeFile(
      `${this.fullpath}/${pKeyValue}.json`,
      JSON.stringify(updatedObj)
    );
    return updatedObj as T;
  }
}
