import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ProductList from "./components/list/ProductList";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <ReduxProvider store={store}>
      <Header />
      <ProductList />
      <Footer />
    </ReduxProvider>
  );
}


export default App;
