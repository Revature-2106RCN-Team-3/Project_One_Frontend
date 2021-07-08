import { Redirect, Route } from 'react-router-dom';
import withAuth from '../components/Login/withAuth';

interface IProps {
    component: React.ComponentType;
    path: string;
    isAuth: boolean;
    [propName: string]: any;
}

const PublicRoute: React.FC<IProps> = ({ isAuth, component: Component, path, ...rest }) => {
    return (
        <Route
            {...rest}
            component={(props: any) => {
                return isAuth ? <Redirect to='/' /> : <Component {...props} />
            }}
        />
    );
};

export default withAuth(PublicRoute);