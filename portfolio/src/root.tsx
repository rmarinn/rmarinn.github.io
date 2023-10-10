import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const Root = () => {
  return (
    <>
      <Helmet>
        <title>Richard Marin</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:wght@300&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Outlet />
    </>
  );
};

export default Root;
