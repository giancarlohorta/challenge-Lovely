import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import GlobalStyles from "./styles/global";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Router />
    </BrowserRouter>
  );
};

export default App;
