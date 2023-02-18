import StudentSearch from "../Components/StudentView/StudentSearch";
import StudentTable from "../Components/StudentView/StudentTable";


const StudentView = () => {

	return (
			<main className="student-view">
                <StudentSearch />
                <StudentTable />
			</main>
	);
};

export default StudentView;