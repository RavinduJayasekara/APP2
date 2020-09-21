import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";

const InputText = (props) => {

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={{ ...styles.input, ...props.style }}
        value={props.onValue}
        onChangeText={props.textHandler}
        secureTextEntry = {props.securityText}
      />
      <Ionicons name={props.name} size={25} color={Colors.primaryColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: "100%",
    width: "92%",
  },
  inputContainer: {
    flexDirection: "row",
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 4,
    height: 50,
    alignItems: "center",
    borderRadius: 15,
  },
});

export default InputText;
