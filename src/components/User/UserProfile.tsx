import React, { useState}  from "react";
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import { IUser } from "../../models/userModel";

const UserDataForm = (user:IUser) => {
    const [editable, toggleEditing] = useState(false);
    const [buttonText, setButtonText] = useState("Edit");
    const [userData, setUserData] = useState(user);

    const submitHandle = () => {
        toggleEditing(() => {return !editable});
        if (!editable) {
            setButtonText("Save");
        } else {
            setButtonText("Edit");
            // Here's where you can properly save edited data
            
        }
    }

    const manageEdits = (e: any) => {
        const target = e.target;
        setUserData({
            ...userData,
            [target.name]: target.value});
    }
  
    return (
        <Form style={{backgroundColor: "#30315A"}}>
            <FormGroup>
                <Label for="email" style={{color: "#ccc"}}>Profile Page</Label>
                <Input plaintext value={userData.userName} disabled/>
                <Button onClick={submitHandle}>{buttonText}</Button>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="name" style={{color: "#ccc"}}>Name</Label>
                <Input name="FirstName" placeholder="First" value={userData.firstName} onChange={manageEdits} disabled={!editable} />
                <Input name="LastName" placeholder="Last" value={userData.lastName} onChange={manageEdits} disabled={!editable} />
            </FormGroup>
            <FormGroup>
                <Label style={{color: "#ccc"}}>Birthday</Label>
                <Input type="date" name="BirthDate" value={userData.birthDate} onChange={manageEdits} disabled={!editable}/>
            </FormGroup>
            <FormGroup>
                <Label style={{color: "#ccc"}}>Phone Number</Label>
                <Input name="PhoneNumber" value={userData.phoneNumber} onChange={manageEdits} disabled={!editable}/>
            </FormGroup>
            <FormGroup>
                <Label style={{color: "#ccc"}}>Nickname</Label>
                <Input name="NickName" value={userData.nickName} onChange={manageEdits} disabled={!editable}/>
            </FormGroup>
            <FormGroup>
                <Label style={{color: "#ccc"}}>Preferred Name</Label>
                <Input name="PreferredName" value={userData.publicName} onChange={manageEdits} disabled={!editable}/>
            </FormGroup>
            <FormGroup>
                <Label style={{color: "#ccc"}}>Profile</Label>
                <Input type="textarea" name="Profile" value={userData.profile} onChange={manageEdits} disabled={!editable}/>
            </FormGroup>
        </Form>
    );
  };

export default UserDataForm;