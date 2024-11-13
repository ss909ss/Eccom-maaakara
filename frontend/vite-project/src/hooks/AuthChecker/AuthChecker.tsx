import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser, selectIsAuthenticated } from '../../redux/slices/adminSlice';
import { RootState } from '../../redux/store/store';
import { Path } from '../../Path';


const AuthCheecker = () => {
    const isAuthenticated = useSelector((state: RootState) => selectIsAuthenticated(state))
    const user = useSelector((state: RootState) => selectUser(state));
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated && user) {
            navigate(Path.adminPanel);
        }
    }, [isAuthenticated, user, navigate]);
    return null;
}

export default AuthCheecker