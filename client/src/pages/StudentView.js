import StudentSearch from "../components/StudentSearch";
import StudentTable from "../components/StudentTable";


const StudentView = () => {

	return (
			<main className="student-view">
                <StudentSearch />
                <StudentTable />
			</main>
	);
};

export default StudentView;