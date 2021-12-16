import { LoaderComp } from "../GlobalComp/Loading.Pages";
import Connect from "./Connect/Connect";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import NavbarWithoutLogin from "./Navbar_withoutlogin/Navbar_withoutlogin";
import { useEffect } from "react";
import { useState } from "react";

function IndexHome({ next }) {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 800);
  }, []);
  return spinner === true ? (
    <LoaderComp />
  ) : (
    <div>
      <NavbarWithoutLogin />
      <Hero next={next} />
      <Connect />
      <Footer />
    </div>
  );
}

export default IndexHome;
