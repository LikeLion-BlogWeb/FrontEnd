import * as Styled from "../style/theme/toggletheme.style";
import { useTheme } from "functions/theme.function";

export default function ToggleTheme() {
  const [themeMode, toggleTheme] = useTheme();
  return(
        <Styled.ToggleWrapper onClick={toggleTheme} themeMode={themeMode}>
          <Styled.ModeContent>{themeMode === 'light' ? '🌚 다크 모드' : '🌝 라이트 모드'}</Styled.ModeContent>
        </Styled.ToggleWrapper>
  );
}

