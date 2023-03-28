import A from "./components/A";
import { Provider } from "./context";


function App() {
  return (<>
    <Provider>
      <A />
    </Provider>
  </>);
}


export default App;
