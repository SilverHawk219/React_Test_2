import React, { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const Page2 = () => {
  const [global, setGlobal] = useContext(GlobalContext);

  const handleclick = () => {
    setGlobal({ ...global, test2: "test2" });
    //localStorage.setItem('global', JSON.stringify(global));
  };
  const handleclick2 = () => {
    delete global.test2;
    setGlobal({ ...global });
    //localStorage.setItem('global', JSON.stringify(global));
  };

  return (
    <>
      <p>Page 2 Content</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Page2;
