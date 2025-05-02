import Header from "./Header";
import not from "./404.svg";
import Footer from "./Footer";

const NotFound = () => {
  return (
    <div className="content">
      <Header />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 style={{color: 'white'}}>This Page Doesn't Exist</h2>
        <img src={not} alt="404 Page Not Found Illustration" style={{ maxWidth: "500px" }} />
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
