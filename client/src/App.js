import { Route, Routes } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

import About from "./pages/About";
import StudentView from "./pages/StudentView";
import Dashboard from "./pages/Dashboard";
import TraineeDashboard from "./pages/TraineeDashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import PrivateRouteForTrainee from "./PrivateRouteForTrainee";
import PrivateRouteForMentor from "./PrivateRouteForMentor";

const App = () => (
	<CookiesProvider>
	<Routes>
		<Route path="/traineedashboard" element={<PrivateRouteForTrainee />} />
		<Route path="/traineedashboardloggedin" element={<TraineeDashboard />} />
		<Route path="/students/table/view" element={<PrivateRouteForMentor />} />
		<Route path="/mentordashboardloggedin" element={<StudentView />} />
		<Route path="/" element={<LandingPage />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/dashboard" element={<Dashboard />} />
		<Route path="/login" element={<Login />} />
		<Route path="/signup" element={<SignUp />} />
	</Routes>
	</CookiesProvider>
);

export default App;
