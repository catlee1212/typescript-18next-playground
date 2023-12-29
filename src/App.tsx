import { useTranslation } from "react-i18next";
import './i18n';
import { TranslationComponentExtended } from "./TranslationComponentExtended";
// import { TranslationComponent } from "./TranslationComponent";

function App () {
  const { t } = useTranslation();
  return (
    <div className="App">
      <div className="wrapper">
        <TranslationComponentExtended />
        {/* <TranslationComponent /> */}
      </div>
    </div>
  );
}

export default App;
