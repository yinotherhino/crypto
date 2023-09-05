import React from "react";
import {Button, Cards} from "../components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  Plan,
  changePlan,
  changeProductCurrentlyShowing,
} from "../redux/slices/Product";
import { twMerge } from "tailwind-merge";

const Products = () => {
  const productCurrentlyShowing = useSelector(
    (state: RootState) => state.product.productCurrentlyShowing
  );
  const dispatch = useDispatch();
  const extraStyle = " mb-[2rem] w-full sm:mb-0 basis-1/3 ";

  const CardContent = ({
    minimumDep,
    roi,
    header,
    headerStyle
  }: {
    minimumDep: number;
    roi: number;
    header: string;
    headerStyle?: string;
  }) => {
    const navigate = useNavigate();
    return (
      <>
        <h1 className={twMerge("text-2xl font-bold mb-3 text-center ", headerStyle)}>{header}</h1>
        <h2 className="text-deep text-xl text-center">ROI: {roi}%</h2>
        <p className="text-xl font-bold text-primary pt-[1rem] text-center">
          Minimum Deposit: ${minimumDep.toLocaleString()}.00
        </p>
        <Button.Centered
          text="Get Started"
          extraStyle=" w-full shadow-none rounded-[25px] xsm:rounded-full my-[3rem] text-white hover:text-deep hover:bg-secondary "
          handleClick={() => {
            dispatch(changePlan(header.toLowerCase() as Plan));
            navigate(`/deposit`);
          }}
        />
      </>
    );
  };
  return (
    <>
      <div className="flex flex-col pt-[4rem] bg-[#102C57]">
        <div className="flex justify-center mb-[2rem]">
          <div className="flex w-fit flex-col xsm:flex-row rounded-[20px] p-[15px] xsm:p-[5px] xsm:rounded-full bg-gray-200">
            <Button.FocusSensitive
              handleClick={() =>
                dispatch(changeProductCurrentlyShowing("monthly"))
              }
              focusedStyle="bg-white"
              isFocused={productCurrentlyShowing === "monthly"}
              extraStyle={"bg-gray-200 border-none my-0 rounded-full"}
              text="Monthly"
            />
            <Button.FocusSensitive
              handleClick={() =>
                dispatch(changeProductCurrentlyShowing("biannually"))
              }
              text="Bi-Annually"
              focusedStyle="bg-white"
              isFocused={productCurrentlyShowing === "biannually"}
              extraStyle={"bg-gray-200 border-none my-0 rounded-full"}
            />
            <Button.FocusSensitive
              handleClick={() =>
                dispatch(changeProductCurrentlyShowing("yearly"))
              }
              text="Annually"
              focusedStyle="bg-white"
              isFocused={productCurrentlyShowing === "yearly"}
              extraStyle={"bg-gray-200 border-none my-0 rounded-full"}
            />

            <Button.FocusSensitive
              handleClick={() =>
                dispatch(changeProductCurrentlyShowing("platinum"))
              }
              text="Platinum"
              focusedStyle="bg-white text-platinum"
              isFocused={productCurrentlyShowing === "platinum"}
              extraStyle={" bg-platinum border-none my-0 rounded-full "}
            />
          </div>
        </div>
        <h1 className={twMerge("text-2xl text-center mb-[2rem] text-white ", productCurrentlyShowing==="platinum" ? "text-platinum":" ")}>
          {productCurrentlyShowing.charAt(0).toLocaleUpperCase() +
            productCurrentlyShowing.slice(1)}
        </h1>
        <div className="flex flex-col mx-[4rem] xsm:mx-[6rem] sm:mx-0 sm:flex-row px-[10px] sm:px-[50px] items-center sm:mb-[3rem]">
          {productCurrentlyShowing === "monthly" ? (
            <>
              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={500} roi={10} header="Basic" />
              </Cards.Long>

              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={3000} roi={15} header="Advance" />
              </Cards.Long>
              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={10000} roi={17} header="Gold" />
              </Cards.Long>
            </>
          ) : productCurrentlyShowing === "yearly" ? (
            <>
              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={3000} roi={30} header="Basic" />
              </Cards.Long>

              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={10000} roi={40} header="Advance" />
              </Cards.Long>
              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={50000} roi={50} header="Gold" />
              </Cards.Long>
            </>
          ) : productCurrentlyShowing === "platinum" ? (
            <>
              <Cards.Long extraStyle={extraStyle} >
                <CardContent minimumDep={500000} roi={100} header="Basic" headerStyle="text-platinum"  />
              </Cards.Long>
              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={1000000} roi={120} header="Advance" headerStyle="text-platinum"  />
              </Cards.Long>
              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={3000000} roi={150} header="Gold" headerStyle="text-platinum"  />
              </Cards.Long>
            </>
          ) : (
            <>
              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={5000} roi={20} header="Basic" />
              </Cards.Long>

              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={50000} roi={25} header="Advance" />
              </Cards.Long>
              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={200000} roi={30} header="Gold" />
              </Cards.Long>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
