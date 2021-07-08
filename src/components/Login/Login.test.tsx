import { describe } from '@jest/globals';
import { IUser } from '../../models/userModel';
import Login from './Login';
import {shallow} from 'enzyme';

describe('renders the login page without crashing', () => {
    let user: IUser;

    const page = shallow(<Login/>);

    beforeEach(() => {
        user = {
        userName: 'test-user',
        password: 'pa$sw0rd',
        firstName: 'test',
        lastName: 'user',
        birthDate: '01/01/1900',
        phoneNumber: '(000) 111-2222',
        publicName: 'Test User',
        nickName: 'some-name',
        profile: 'This is a test user, implements UIser, can be stored easily as an object or perhaps JSON or even good old HTML if you feel brave.'
    }})

    it('Should render the login attributes', () => {
        expect(page.exists());
    })
})

