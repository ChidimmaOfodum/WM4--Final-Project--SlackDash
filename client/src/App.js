import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import StudentView from "./pages/StudentView";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/students/table/view" element={<StudentView />} />
	</Routes>
);

export default App;
