export enum ActionType {
    LOGIN_START = 'login-start',
    LOGIN_SUCCESS = 'login-success',
    LOGIN_FAILED = 'login-failed',
    LOGOUT_START = 'logout-start',
    LOGOUT_SUCCESS = 'logout-success',
    REGISTER_START = 'register-start',
    REGISTER_SUCCESS = 'register-success',
    CHECK_SESSION = 'check-sess',
    SET_AUTH_ERR = 'set-auth-err',
    CLEAR_AUTH_ERR = 'clear-auth-err',
    SET_AUTH_LOADING = 'set-auth-load',
    SET_USER = 'set-username',
    SET_LOADING = 'set-password',
    AUTHENTICATED = 'authenticated',
    IS_ERROR = 'is-error'
}