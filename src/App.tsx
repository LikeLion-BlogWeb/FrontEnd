import './App.css';
import Router from "./components/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import ToggleTheme from "./components/theme/ToggleTheme";
import { GlobalStyle } from "./components/style/theme/globalstyle.style";
import ThemeModeProvider from "context/ThemeModeProvider";

function App() {

	return (
		<>
			<ThemeModeProvider>
				<GlobalStyle />
				<ToggleTheme />
					<ToastContainer />
					<Router/>
			</ThemeModeProvider>
			
		</>
	);
}

export default App;