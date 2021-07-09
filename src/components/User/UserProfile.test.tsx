import { describe } from '@jest/globals';
import { IUser } from '../../models/userModel';
import { shallow } from 'enzyme';
import UserDataForm from './UserProfile';
import { Button, Container, Row, Input } from 'reactstrap';
import { element } from 'prop-types';

const testUser: IUser = {
    userName: "Jimothy@nomod.net",
    password: "passward",
    firstName: "Jimmy",
    lastName: "Malone",
    birthDate: "01/01/1900",
    phoneNumber: "(123)123-4567",
    nickName: "Jimothy",
    publicName: "James",
    profile: "This is James here, call me Jimothy."
}



describe('<UserDataForm />', () => {
    const testForm = shallow(<UserDataForm {...testUser}/>);

    it('should create a container', () => {
        expect(testForm.find(Container)).toHaveLength(1);
    })

    it('should not be editable yet', () => {
        // If this looks complex...it is.
        // You grab the properties of the properties of each element in the array of HTML given
        testForm.find(Input).forEach((elem) => {expect(elem.getElement().props).toHaveProperty('disabled', true)});
    })

    it('should become editable when edit is clicked', () => {
        testForm.find(Button).simulate('click');
        expect(testForm.find(Input).findWhere((elem) => {return elem.getElement().props.disabled == false})).toHaveLength(7);
    })
    
    it('should store date in the date field', () => {
        testForm.find(Input).findWhere((elem) => {return elem.getElement().props.name == 'BirthDate'}).forEach((elem) => {expect(elem.getElement().props).toHaveProperty('value', '01/01/1900')});
    })
})