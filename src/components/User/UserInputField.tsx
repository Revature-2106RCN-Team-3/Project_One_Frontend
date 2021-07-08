import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const InputField = (props: { label?: string; inText?: string; isEditing?: boolean, name?: string, event?: React.ChangeEventHandler<HTMLInputElement> | undefined }) => {
    return (
        <View style={styles.container}>
            <View style={{margin: 6}}><Text style={{color: "#eee"}}>{props.label}</Text></View>
            <input style={{margin: 5, borderWidth: 1}} value={props.inText} name={props.name} onChange={props.event} disabled={!props.isEditing}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 2,
        backgroundColor: "#36375F",
        flex: 1,
        flexDirection: "column"},
});

export default InputField;