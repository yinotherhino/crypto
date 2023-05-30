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
  }: {
    minimumDep: number;
    roi: number;
    header: string;
  }) => {
    const navigate = useNavigate();
    return (
      <>
        <h1 className="text-2xl font-bold mb-3 text-center">{header}</h1>
        <h2 className="text-deep text-xl text-center">ROI: {roi}%</h2>
        <p className="text-xl font-bold text-primary pt-[1rem] text-center">
          Minimum Deposit: ${minimumDep}.00
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
      <div className="flex flex-col pt-[4rem]">
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
          </div>
        </div>
        <h1 className="text-2xl text-center mb-[2rem]">
          {productCurrentlyShowing.charAt(0).toLocaleUpperCase() +
            productCurrentlyShowing.slice(1)}
        </h1>
        <div className="flex flex-col mx-[4rem] xsm:mx-[6rem] sm:mx-0 sm:flex-row px-[10px] sm:px-[50px] items-center sm:mb-[3rem]">
          {productCurrentlyShowing === "monthly" ? (
            <>
              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={100} roi={30} header="Basic" />
              </Cards.Long>

              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={1000} roi={30} header="Advance" />
              </Cards.Long>
              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={10000} roi={30} header="Gold" />
              </Cards.Long>
            </>
          ) : productCurrentlyShowing === "yearly" ? (
            <>
              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={100} roi={30} header="Basic" />
              </Cards.Long>

              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={4000} roi={30} header="Advance" />
              </Cards.Long>
              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={4000} roi={30} header="Gold" />
              </Cards.Long>
            </>
          ) : (
            <>
              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={100} roi={30} header="Basic" />
              </Cards.Long>

              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={4000} roi={30} header="Advance" />
              </Cards.Long>
              <Cards.Long extraStyle={extraStyle}>
                <CardContent minimumDep={4000} roi={30} header="Gold" />
              </Cards.Long>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
