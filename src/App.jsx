import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import { ItemsListContainer } from "./components/pages/ItemsListContainer/ItemsListContainer";

const App = () => {
  const gretting = "Bienvenidos";
  return (
    <>
      <Navbar />
      <ItemsListContainer gretting={gretting} />
      <Footer />
    </>
  );
};

export default App;
