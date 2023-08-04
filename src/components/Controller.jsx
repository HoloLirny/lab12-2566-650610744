import { LangContext } from "@/contexts/LangContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export default function Controller() {
  const { toggleTheme, setDarkTheme, setLightTheme } = useContext(ThemeContext);
  const { lang, toggleLang } = useContext(LangContext);

  const getButtonText = (key) => {
    return lang.buttons[key];
  };

  return (
    <div className="d-flex justify-content-center gap-2">
      <button className="btn btn-secondary" onClick={setLightTheme}>
        {getButtonText("setLightTheme")}
      </button>
      <button className="btn btn-dark" onClick={setDarkTheme}>
        {getButtonText("setDarkTheme")}
      </button>
      <button className="btn btn-primary" onClick={toggleTheme}>
        {getButtonText("toggleTheme")}
      </button>
      <button className="btn btn-danger" onClick={toggleLang}>
        {getButtonText("toggleLang")}
      </button>
    </div>
  );
}
