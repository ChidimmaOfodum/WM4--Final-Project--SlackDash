import { Route, Routes } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

import About from "./pages/About";
import StudentView from "./pages/StudentView";
import Dashboard from "./pages/Dashboard";
import TraineeDashboard from "./pages/TraineeDashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";

const App = () => (
	<CookiesProvider>
	<Routes>
		<Route path="/" element={<LandingPage />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/students/table/view" element={<StudentView />} />
		<Route path="/dashboard" element={<Dashboard />} />
		<Route path="/traineedashboard" element={<TraineeDashboard />} />
		<Route path="/login" element={<Login />} />
		<Route path="/signup" element={<SignUp />} />
	</Routes>
	</CookiesProvider>
);

export default App;
