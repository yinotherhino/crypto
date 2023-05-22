import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import Cards from "../components/Cards/Cards";

const Dashboard = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {isLoggedIn && (
        <div>
          <div className="mx-auto sm:mx-[50px] mt-[50px] xsm:m-[70px] md:m-[100px] flex flex-col xsm:flex-row justify-between ">
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
