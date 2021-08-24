import "./App.css";
import { Device, Mobile } from "./components/index";
import { useBfyStore } from "./BfyContext";

function App() {
  const bfyStore = useBfyStore();
  const mobileDevice = bfyStore.mobileDevice;
  return mobileDevice ? <Mobile /> : <Device />;
}

export default App;
