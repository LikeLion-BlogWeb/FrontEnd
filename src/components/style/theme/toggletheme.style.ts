import styled from "styled-components";

interface ToggleProps {
    themeMode: string;
}

export const ToggleWrapper = styled('button')<ToggleProps>`
  position: fixed;
  width: 115px;
  height: 45px;
  right: 1.5rem;
  bottom: 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.buttonarea};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  z-index: 2;
  border: none;
  &:hover {
    filter: brightness(
        ${({ themeMode }) => (themeMode === 'light' ? '0.9' : '1.13')}
    );
  }
`;
export const ModeContent = styled.text`
  color: ${({ theme }) => theme.buttontext};
`