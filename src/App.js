import { PrimaryButton } from "./components/atoms/PrimaryButton";
import { SecondaryyButton } from "./components/atoms/SecondaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>Test</PrimaryButton>
      <SecondaryyButton>検索</SecondaryyButton>
    </div>
  );
}
