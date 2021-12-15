import Connect from "./Connect/Connect";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import NavbarWithoutLogin from "./Navbar_withoutlogin/Navbar_withoutlogin";

function IndexHome() {
  return (
    <div>
      <NavbarWithoutLogin />
      <Hero />
      <Connect />
      <Footer />
    </div>
  );
}

export default IndexHome;
