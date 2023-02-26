import StudentTable from "../Components/StudentView/StudentTable";
import StudentSearch from "../Components/StudentView/StudentSearch";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const StudentView = () => {
	return (
		<>
		<Header />
			<main className="student-view">
				<StudentSearch />
				<StudentTable />
			</main>
			<Footer />
		</>
	);
};

export default StudentView;
