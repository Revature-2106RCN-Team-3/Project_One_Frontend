import { describe } from '@jest/globals';
import { IUser } from '../../models/userModel';

describe('renders the login page without crashing', () => {
    let user: IUser;

    beforeEach(() => {
        user = {
        userName: 'test-user',
        nickName: 'some-name'
    })
    it('Should render the login attributes')
})
