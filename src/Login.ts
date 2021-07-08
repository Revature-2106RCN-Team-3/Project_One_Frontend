import {CognitoUser, CognitoUserAttribute, CognitoUserPool, CognitoUserSession, ISignUpResult} from "amazon-cognito-identity-js";
// Reference to our user pool, this is in the wrong region but that doesn't matter since it doesn't need a vpc.
const userPool = new CognitoUserPool({

    UserPoolId: "us-east-2_UW3QxKzWj",
    ClientId: "bis6ou4bf4k7i548libkei128",


});

// Sugar to create a new user attribute for the big lists below.
function newUserAttribute(name: string, value: string): CognitoUserAttribute{

    console.log(name);
    return new CognitoUserAttribute({

        Name: name,
        Value: value

     });

}
/**
 * A list of sensible, self explanitory names for the cognito attributes we are using.
 * 
 * @since 0.0.0
 */
export class UserAttributeNames{
    
    public static readonly email = "email";
    public static readonly firstName = "given_name";
    public static readonly lastName = "family_name";
    public static readonly birthDate = "birthdate";
    public static readonly phoneNumber = "phone_number";
    public static readonly nickName = "nickname";
    public static readonly preferredUserName = "preferred_username";
    public static readonly profile = "profile";

}

/**
 * Creates a populated list of the attributes we use for our user profiles from the given arguments.
 * 
 * @since 0.0.0
 */
function createUserAttributeList(email: string, firstName: string, lastName: string,
    birthDate: string, phoneNumber: string, nickName: string, preferredUserName: string,
    profile: string){

        return [

            newUserAttribute(UserAttributeNames.email, email),
            newUserAttribute(UserAttributeNames.firstName, firstName),
            newUserAttribute(UserAttributeNames.lastName, lastName),
            newUserAttribute(UserAttributeNames.birthDate, birthDate),
            newUserAttribute(UserAttributeNames.phoneNumber, phoneNumber),
            newUserAttribute(UserAttributeNames.nickName, nickName),
            newUserAttribute(UserAttributeNames.preferredUserName, preferredUserName),
            newUserAttribute(UserAttributeNames.profile, profile)

        ];

    }

/**
 * The error generated by any method that expects a user to be logged in, indicating that the caller
 * should then call the login function before trying again.
 * 
 * @since 0.0.0
 */
export class NotLoggedInError <T> extends Error{

    private readonly retryFunc: () => Promise<T>;

    /**
     * @param message The description of why this error is being thrown.
     * @param retryFunc A reference the the method which is throwing this error.
     * 
     * @since 0.0.0
     */
    constructor(message: string, retryFunc: () => Promise<T>){

        super(message);
        this.retryFunc = retryFunc;
        
    }

    /**
     * Calls the method which threw the error again.
     * 
     * @since 0.0.0
     */
    public retry(): Promise<T>{return this.retryFunc();}

}

/**
 * The collection of static methods used to control the login and user profile interactions.
 * 
 * @since 0.0.0
 */
export default class Login{

    private static currentUser: CognitoUser | undefined;

    /**
     * Creates a new account requiring with the given information.
     * 
     * @since 0.0.0
     */
    public static async createAccount(userName: string, password: string, email: string,
         firstName: string, lastName: string, birthDate: string, phoneNumber: string,
          nickName: string, preferredUserName: string, profile: string): Promise<ISignUpResult>{

        return new Promise<ISignUpResult>((resolve, reject) => {
            
            userPool.signUp(userName, password, 
                createUserAttributeList(email, firstName, lastName, birthDate, phoneNumber, nickName,
                    preferredUserName, profile),
                [], (err, result) => {

                if(err || !result)
                    return reject(err);

                resolve(result);

            });

        });

    }
    
    /**
     * Logs in to the user profile associated with the given username.
     * 
     * @param userName The username or email for the profile's account.
     * @param password The profile's password in plain text.
     * @param remember Whether or not to store the temporary login token between sessions. TODO unimplemented
     * 
     * @since 0.0.0
     */
    public static async login(userName: string, password: string, remember: boolean): Promise<CognitoUser>{
        
        return new Promise((resolve, reject) => {

            const user = new CognitoUser({

                Username: userName,
                Pool: userPool
    
            });
            user.authenticateUser({

                getUsername: () => userName,
                getPassword: () => password,
                getValidationData: () => [],
                //@ts-ignore
                getClientMetadata: () => ({})
    
            }, {
    
                onSuccess: (session: CognitoUserSession) => {

                    if(remember)
                        console.warn("Login storage unimplemented.");

                    this.currentUser = user;
                    resolve(user);

                },
                onFailure: reject
    
            });

        });

    }

    public static isLoggedIn(): boolean{

        //@ts-ignore
        return this.currentUser && this.currentUser.getSignInUserSession()?.isValid();

    }

    /**
     * @param retryFunc A function to call after successfully logging in and calling
     * NotLoggedInError.retry.
     * 
     * @returns The current logged in user. If there is no logged in user, this method will attempt
     * to use a previously stored temporary login token. If both of these routes fail, an error is
     * thrown.
     * 
     * @throws NotLoggedInError if the user is not logged in, and the stored login token is either
     * invalid or missing.
     * 
     * @since 0.0.0
     */
    public static async getLoggedInUser<T>(retryFunc?: () => Promise<T>) : Promise<CognitoUser>{

        if(this.currentUser && this.currentUser.getSignInUserSession()?.isValid())
            return Promise.resolve(this.currentUser);

        /*if(loginWasStored)
            return new Promise((resolve, reject) => {

                if(storeLoginValid)
                    resolve(storedLogin);

                reject(new NotLoggedInError("Stored login was expired or otherwise invalid."));

            });*/

        return Promise.reject(new NotLoggedInError("No stored login.", retryFunc || (() => Promise.resolve(undefined))));

    }

    /**
     * @return The user's name.
     * 
     * @throws NotLoggedInError If the user is not logged in.
     * 
     * @since 0.0.0
     */
    public static async getUserName(): Promise<string>{

        const user: CognitoUser = await this.getLoggedInUser(this.getUserName);

        return new Promise((resolve, reject) => {

            resolve(user.getUsername());
        
        });

    }

    /**
     * @return The username and login tokens converted to a JSON string.
     * 
     * @throws NotLoggedInError If the user is not logged in.
     * 
     * @since 0.0.0
     */
    public static async jsonifyTokens(): Promise<string>{

        const user: CognitoUser = await this.getLoggedInUser(this.jsonifyTokens);
        const session: CognitoUserSession | null = user.getSignInUserSession();

        if(!session)
            throw Error("Unreachable.");

        return JSON.stringify({

            userName: user.getUsername(),
            acToken: session.getAccessToken(),
            idToken: session.getIdToken(),
            rfToken: session.getRefreshToken()

        });

    }

    /**
     * @return All of the user's profile attributes.
     * 
     * @throws NotLoggedInError If the user is not logged in.
     * 
     * @since 0.0.0
     */
    public static async getAttributes(): Promise<CognitoUserAttribute[]>{

        const user: CognitoUser = await this.getLoggedInUser(this.getAttributes);

        return new Promise((resolve, reject) => {

            user.getUserAttributes((err, attributes) => {

                if(err || !attributes)
                    return reject(err);

                resolve(attributes);

            });
        
        });

    }

    /**
     * @param name The name of the attribute to retrieve.
     * 
     * @return The user's profile attribute with the given name.
     * 
     * @throws Error If no attribute with the given name exists.
     * @throws NotLoggedInError If the user is not logged in.
     * 
     * @since 0.0.0
     */
    public static async getAttribute(name: string): Promise<CognitoUserAttribute>{

        try{

            return (await this.getAttributes()).filter(attrib => attrib.Name === name)[0] ||
            (() => {throw new Error(`No such attribute: ${name}`)})();

        }catch(err){

            if(err instanceof NotLoggedInError)
                throw new NotLoggedInError(err.message, () => {

                    return this.getAttribute(name);

                });

            throw err;

        }

    }

    /**
     * @return The user's nickname attribute.
     * 
     * @throws NotLoggedInError If the user is not logged in.
     * 
     * @since 0.0.0
     */
    public static async getNickname(){

        return await this.getAttribute(UserAttributeNames.nickName);

    }

    /**
     * Changes the user's profile password if they know the current password.
     * 
     * @param oldPassword The user's current profile password.
     * @param newPassword The new password to set as the user's profile password.
     * 
     * @return "SUCCESS" if the password is successfully changed.
     * 
     * @throws NotLoggedInError If the user is not logged in.
     * 
     * @since 0.0.0
     */
    public static async changePassword(oldPassword: string, newPassword: string){

        const user: CognitoUser = await this.getLoggedInUser(() => {

            return this.changePassword(oldPassword, newPassword);

        });

        return new Promise((resolve, reject) => {

            user.changePassword(oldPassword, newPassword, (err, res) => {

                if(err)
                    return reject(err);

                resolve(String(res));

            });

        });

    }

    /**
     * Allows the user to attempt to reset their password using their email.
     * 
     * @return Something if the forgot password reset succeeds.
     * 
     * @throws Error If the forgot password reset fails.
     * 
     * @since 0.0.0
     */
    /*public static async forgotPassword(): Promise<any>{

        const user: CognitoUser = await this.getLoggedInUser(this.forgotPassword);

        return new Promise((resolve, reject) => {

            user.forgotPassword({

                onSuccess: resolve,
                onFailure: reject

            });

        });

    }*/

    /**
     * @return Nothing, but promise callbacks will run after the logout is complete.
     * 
     * @throws NotLoggedInError If the user is not logged in.
     * 
     * @since 0.0.0
     */
    public static async logout(): Promise<undefined>{

        const user: CognitoUser = await this.getLoggedInUser(this.logout);

        return new Promise((resolve, reject) => {

            user.signOut(() => {

                resolve(undefined);

            });

        });

    }

    /**
     * @return The success message if successful.
     * 
     * @throws Error If deleting the use fails.
     * @throws NotLoggedInError If the user is not logged in.
     * 
     * @since 0.0.0
     */
    public static async deleteUser(): Promise<string>{

        const user: CognitoUser = await this.getLoggedInUser(this.deleteUser);

        return new Promise((resolve, reject) => {

            user.deleteUser((err, res) => {

                if(err)
                    return reject(err);

                resolve(String(res));

            });

        });

    }

}
