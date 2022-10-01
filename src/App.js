import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryyButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryyButton>検索</SecondaryyButton>
      <br />
      <SearchInput />
    </div>
  );
}
