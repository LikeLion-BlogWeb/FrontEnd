import { useContext, useEffect, useState } from 'react';
import './App.css';
import Router from "./components/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from 'context/AuthContext';

function App() {

	return (
		<>
			<ToastContainer />
			<Router/>
		</>
	);
}

export default App;