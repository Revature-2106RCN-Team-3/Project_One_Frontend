import React from "react";
import { useSelector } from "react-redux";
import { IRootReducer } from "../../types/types";

interface IProps {
    isAuth: boolean;
}

const withAuth = <P extends IProps>(Component: React.ComponentType<P>) => {
    return (props: Pick<P, Exclude<keyof P, keyof IProps>>) => {
        const isAuth = useSelector((state: IRootReducer) => !!state.auth.username);

        return <Component {...props as P} isAuth={isAuth} />
    }
};

export default withAuth;