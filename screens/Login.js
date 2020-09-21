import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Button,
} from "react-native";
import InputText from "../components/InputText";

const Login = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (enteredText) => {
    setUsername(enteredText);
  };

  const passWordHandler = (enteredText) => {
    setPassword(enteredText);
  };

  const onPressHandler = () => {
    setUserName(username);
    setPassWord(password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Sample App!!</Text>
      <View style={styles.inputContainer}>
        <InputText
          name="ios-contact"
          onValue={username}
          textHandler={userNameHandler}
        />
        <InputText
          name="ios-eye-off"
          onValue={password}
          textHandler={passWordHandler}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="login" onPress={onPressHandler} />
      </View>
      <ActivityIndicator animating={isLoading} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 24,
  },
  inputContainer: {
    width: "80%",
  },
  buttonContainer: {
    width: "80%",
  },
});

export default Login;
