import { Redirect, Route } from "react-router";
import withAuth from "../components/Login/withAuth";

interface IProps {
    component: React.ComponentType;
    path:string;
    [propName: string]: any;
}

const Protected: React.FC<IProps> = ({component: Component, path, ...rest }) => {
    return(
        <Route
        {...rest}
        component={(props: any) => {
            return <Component {...props} />
        }}
        />
    );
};

export default Protected;