import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div className="main-layout bg-black h-screen">
      <Header />
      {children}
      {/*<Footer />*/}
    </div>
  );
}

export default MainLayout;