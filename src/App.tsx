import { useContext, useEffect, useState } from 'react';
import './App.css';
import Router from "./components/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from 'context/AuthContext';

function App() {
	const { authToken } = useContext(AuthContext);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	useEffect(() => {
		// authToken의 존재여부에 따라 true or false로 상태변경
		setIsAuthenticated(!!authToken);
	}, [authToken]);

	return (
		<>
			<ToastContainer />
			<Router isAuthenticated={isAuthenticated}/>
		</>
	);
}

export default App;