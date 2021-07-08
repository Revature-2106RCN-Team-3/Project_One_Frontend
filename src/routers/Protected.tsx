import { Redirect, Route } from "react-router";
import withAuth from "../components/Login/withAuth";

interface IProps {
    component: React.ComponentType;
    path:string;
    isAuth: boolean;
    [propName: string]: any;
}

const Protected: React.FC<IProps> = ({ isAuth, component: Component, path, ...rest }) => {
    return(
        <Route
        {...rest}
        component={(props: any) => {
            return isAuth ? <Component {...props} /> : <Redirect to='/login'></Redirect>
        }}
        />
    );
};

export default withAuth(Protected);