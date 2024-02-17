import './App.css';
import Router from "./components/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { lightTheme, darkTheme } from "./components/style/theme.style";
import { GlobalStyle } from "./components/style/globalstyle.style";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

function App() {

	const [theme, setTheme] = useState("dark");
  	const isLight = theme === "light";

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<>
			<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
				<>
					{" "}
					<GlobalStyle />
						<ToastContainer />
						<Router/>
					<Button onClick={toggleTheme}>
          				{isLight ? "Dark 🌚 " : "Light 🌝"}
        			</Button>
				</>
			</ThemeProvider>
			
		</>
	);
}

export default App;

const Button = styled.button`
  width: 100px;
  height: 50px;
  position: absolute;
  top: 10px;
  right: 30px;
`;