import Connect from "./Connect/Connect";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import NavbarWithoutLogin from "./Navbar_withoutlogin/Navbar_withoutlogin";

function IndexHome({ next }) {
  return (
    <div>
      <NavbarWithoutLogin />
      <Hero next={next} />
      <Connect />
      <Footer />
    </div>
  );
}

export default IndexHome;
