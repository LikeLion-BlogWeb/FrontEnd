import { useCallback, useContext } from "react";
import { ThemeContext, ThemeModeType } from "../context/ThemeModeProvider";

// 배열 형태의 테마 모드, 테마 변경 함수가 있는 UseThemeProps 타입 정의 
type UseThemeProps = [themeMode: ThemeModeType, toggleTheme: () => void];

// 커스텀 훅인 useTheme을 통해 테마를 전환하고, UseThemeProps 타입을 반환함
export function useTheme(): UseThemeProps {
  // useContext 훅을 사용하여 ThemeContext에서 현재 테마 모드와 테마를 변경하는 함수를 가져옴
  const { themeMode, setThemeMode } = useContext(ThemeContext);
  
  const toggleTheme = useCallback(() => {
    if (themeMode === "light") setThemeMode("dark");
    else setThemeMode("light");
  }, [themeMode]);
 
  return [themeMode, toggleTheme];
}