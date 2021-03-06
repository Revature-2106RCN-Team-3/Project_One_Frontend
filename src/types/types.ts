export interface IRootReducer {
    auth: IUser;
    error: IError;
    profile: IProfile;
}

export interface IUser {
    username: string;
    nickname: string;
} 

export interface IRegister {
  username: string;
  first_name?: string;
  last_name?: string;
  nickname: string;
  password: string;
}
export interface IError {
    status_code: number;
    data: any;
    error: {
      message: string;
      title: string;
      type: string;
    };
    success: boolean;
    timestamp: string | Date;
    [prop: string]: any;
}

export interface IErrorState {
  authError: IError | null;
  profileError: IError | null;
}

export interface Loading {
  isLoadingAuth: boolean;
}
export interface IProfile {
    username: string;
    firstname: string;
    lastname: string;
    info: {
      bio: string;
      birthday: string;
    };
    dateJoined: Date | string;
}
  
