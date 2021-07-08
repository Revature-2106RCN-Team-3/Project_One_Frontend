import React, { useState}  from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import InputField from "./UserInputField";



const UserDataForm = () => {
    const [editable, toggleEditing] = useState(false);
    const [buttonText, setButtonText] = useState("Edit");
    const [userData, setUserData] = useState({
        Email: "",
        FirstName: "",
        LastName: "",
        BirthDate: "",
        PhoneNumber: "",
        NickName: "",
        PreferredName: "",
        Profile: "",
    });

    const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
        <form onSubmit={e => {submitHandle(e)}}>
        <View
            style={styles.outerForm}>
                <View style={{flexDirection: "row"}}>
                    <InputField name="Email" label="Profile" inText={userData.Email}/>
                    <View style={styles.buttonContainer}><input type="submit" value={buttonText}/></View>
                </View>
                <View style={{flexDirection: "row"}}>
                    <InputField inText={userData.FirstName} label="First Name" name="FirstName" isEditing={editable} event={manageEdits}/>   
                    <InputField inText={userData.LastName} label="Last Name" name="LastName" isEditing={editable} event={manageEdits}/>
                </View>
                <InputField inText={userData.BirthDate} label="Birthday" name="BirthDate" isEditing={editable} event={manageEdits}/>
                <InputField inText={userData.PhoneNumber} label="Phone Number" name="PhoneNumber" isEditing={editable} event={manageEdits}/>
                <InputField inText={userData.NickName} label="Nickname" name="NickName" isEditing={editable} event={manageEdits}/>
                <InputField inText={userData.PreferredName} label="Preferred Name" name="PreferredName" isEditing={editable} event={manageEdits}/>
                <InputField inText={userData.Profile} label="Profile" name="Profile" isEditing={editable} event={manageEdits}/>
            </View>
        </form>
    );
  };

  const styles = StyleSheet.create({
    outerForm: {
        flexDirection: "column",
        height: 600,
        width: 400,
        padding: 20,
        backgroundColor: "#30315A",
    },
    buttonContainer: {
        flex: 0.2,
        alignItems: "center",
        justifyContent: "center"
    },
});

export default UserDataForm;