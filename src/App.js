import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import { Contact } from "./components/Contact";
import ResturantMenu from "./components/ResturantMenu";
import { ResturantList } from "./components/ResturantList";
import UserContext from "./api/UserContext";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import { Cart } from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const data = {
      name: "Naveen Kumar",
    };
    setUser(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <div className=" font-sans">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <ResturantMenu />,
      },
      {
        path: "/search/:searchText",
        element: <ResturantList />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
