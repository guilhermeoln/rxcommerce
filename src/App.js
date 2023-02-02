import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoutesApp from "./routes/routes";
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </Provider>
  );
}

export default App;
