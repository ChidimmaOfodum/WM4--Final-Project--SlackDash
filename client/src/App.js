import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import StudentView from "./pages/StudentView";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/students/table/view" element={<StudentView />} />
		<Route path= "/dashboard" element = {<Dashboard /> } />
		<Route path= "/login" element = {<Login /> } />
		<Route path= "/signup" element = {<SignUp /> } />
	</Routes>
);

export default App;
