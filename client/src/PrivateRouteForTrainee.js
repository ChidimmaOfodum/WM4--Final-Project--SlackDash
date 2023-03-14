import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const PrivateRouteForTrainee = () => {
	const [cookies, setCookie, removeCookie] = useCookies([]);
    let isTraineeSignedIn = cookies.trainee;
    return(
        isTraineeSignedIn ? <Navigate to="/traineedashboardloggedin"/> : <Navigate to="/login"/>
    )
}

export default PrivateRouteForTrainee