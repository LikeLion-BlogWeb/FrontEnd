import { createContext, ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/style/theme/theme.style";

type Props = {
  children?: ReactNode;
};

export type ThemeModeType = "light" | "dark";

type ThemeContextProps = {
  themeMode: ThemeModeType;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeModeType>>;
};

const ThemeContext = createContext<ThemeContextProps>({
  themeMode: "light",
  setThemeMode: () => {},
});

export default function ThemeModeProvider({ children }: Props) {
  const [themeMode, setThemeMode] = useState<ThemeModeType>("light");
  const targetTheme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <ThemeProvider theme={targetTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };