import React from "react";

const DefaultLayout = React.lazy(() =>
  import("./components/views/DefaultLayout/DefaultLayout")
);
const Login = React.lazy(() => import("./components/views/Auth/Login"));

export const appRoutes = [
  {
    path: "/",
    component: DefaultLayout,
  },
  {
    path: "/login",
    component: Login,
  },
];
