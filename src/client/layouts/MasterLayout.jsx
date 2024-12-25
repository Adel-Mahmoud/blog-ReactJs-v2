import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import '../assets/css/style.css';

const MasterLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MasterLayout;MasterLayout
