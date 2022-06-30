import React from "react";

import { Routes, Route, useParams } from "react-router-dom";
import Modal from "./components/views/Modal/Modal";
// import DefaultLayout from "./components/views/DefaultLayout/DefaultLayout";
import { appRoutes } from "./routes";

const DefaultLayout = React.lazy(() =>
  import("./components/views/DefaultLayout/DefaultLayout")
);
const Login = React.lazy(() => import("./components/views/Auth/Login"));
const Register = React.lazy(() => import("./components/views/Auth/Register"));

export default function App() {
  return (
    <>
      {/* <Modal> */}
      <div className="App d-flex">
        {/* <Routes>
        {appRoutes.map((route, idx) => {
            const Page = route.component;
            return (
              <Route
                key={idx}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page></Page>
                  </DefaultLayout>
                }
              ></Route>
            );
          })}
        </Routes> */}
        <React.Suspense fallback={<h6>Loading...</h6>}>
          <Routes>
            <Route path={"/"} element={<DefaultLayout />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
          </Routes>
        </React.Suspense>
      </div>
      {/* </Modal> */}
    </>
  );
}
