import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const PrivateRouteForMentor = () => {
	const [cookies, setCookie, removeCookie] = useCookies([]);
    let isTraineeSignedIn = cookies.mentor;
    return(
        isTraineeSignedIn ? <Navigate to="/mentordashboardloggedin"/> : <Navigate to="/login"/>
    )
}

export default PrivateRouteForMentor