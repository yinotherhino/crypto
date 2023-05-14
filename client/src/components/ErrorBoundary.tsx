// import React from "react";
// import { IToast, changeToast } from "../redux/slices/NavbarSlice";
// import { AxiosError } from "axios";
// import { useDispatch } from "react-redux";
// import ErrorPage from "../pages/ErrorPage";

// export default class ErrorBoundary extends React.Component {
//   private dispatch: any= useDispatch();
//   public state: { hasError: boolean; errorType: string; err: any };
//   constructor(props: any) {
//     super(props);
//     this.state= { hasError: false, errorType: "", err: null };
//   }

//   // update the component state when an error occurs
//   static getDerivedStateFromError(err: any) {
//     // specify that the error boundary has caught an error
//     return {
//       hasError: true,
//       error: err,
//     };
//   }

//   componentDidCatch(err: any, errorInfo: any) {
//     console.log("Error caught!");
//     console.error(err);
//     console.error(errorInfo);

//   }

//   render() {
//     return <>{this.state.errorType != "server" && <ErrorPage />}</>;
//   }
// }
export {}