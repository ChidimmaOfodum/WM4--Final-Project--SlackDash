import StudentSearch from "../Components/StudentView/StudentSearch";
import StudentTable from "../Components/StudentView/StudentTable";
import Nav from "../Components/Nav/Nav";

const StudentView = () => {
	return (
		<>
		<Nav />
			<main className="student-view">
				<StudentSearch />
				<StudentTable />
			</main>
		</>
	);
};

export default StudentView;
