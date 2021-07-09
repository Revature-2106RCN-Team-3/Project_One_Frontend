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
    SET_USERNAME = 'set-username',
    SET_PASSWORD = 'set-password',
    SET_IS_DISABLED = 'set-is-disabled',
    SET_IS_ERROR = 'set-is-error'
}