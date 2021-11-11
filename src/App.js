import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      {/* <SearchScreen /> */}
      <AppRouter />
    </Provider>
  );
}

export default App;
