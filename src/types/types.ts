export interface IRootReducer {
    authenticate: IUser;
    error: IError;
    newsFeed: INewsFeed;
    profile: IProfile;
}

export interface IUser {
    username: string;
    first_name?: string;
    last_name?: string;
    public_name: string;
}

export interface INewsFeed {
    items: IPost[];
    hasNewFeed: boolean;
    offset: number;
}

export interface IPost {
    id: string;
    privacy: "public" | "private" | "follower";
    comments: any[];
    description: string;
    author: IUser;
    commentsCount: number;
    likesCount: number;
    isLiked: boolean;
    isOwnPost: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface IComment {
    id: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    isEdited: boolean;
    author: IUser;
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

export interface IProfile {
    username: string;
    firstname: string;
    lastname: string;
    info: {
      bio: string;
      birthday: string;
      gender: string;
    };
    isEmailValidated: boolean;
    dateJoined: Date | string;
    followingCount: number;
    followersCount: number;
    [prop: string]: any;
}
  
