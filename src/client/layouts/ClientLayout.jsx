import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import '../assets/css/style.css';

const ClientLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default ClientLayout;
