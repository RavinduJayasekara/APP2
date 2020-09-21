import React, { useState, createContext } from "react";
import InputText from "./components/InputText";
import {ActivityIndicator, View ,Text,StyleSheet,Button} from 'react-native';
import SampleNavigation from "./navigation/SampleNavigation";
import Authentication from "./screens/Authentication";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import authReducer from "./store/reducer/auth";

// const store = createStore(rootReducer);

// const rootReducer = combineReducers({
//   auth: authReducer,
// });

const App = (props) => {
const [isLoading, setIsLoading] = useState(false);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [usrName, setUsrName] = useState("");
const [pasWord, setPasWord] = useState("");

const usernameHandler = (enteredText) => {
  setUsername(enteredText);
};

const passwordHandler = (enteredText) => {
  setPassword(enteredText);
};

const onPressHandler = () => {
  setUsrName(username);
  setPasWord(password);
};

const onPressLogOut = () => {
  setUsrName("");
  setPasWord("");
};

if (usrName === "" && pasWord === "") {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Sample App!!</Text>
      <View style={styles.inputContainer}>
        <InputText
          name="ios-contact"
          onValue={username}
          textHandler={usernameHandler}
          securityText={false}
        />
        <InputText
          name="ios-eye-off"
          onValue={password}
          textHandler={passwordHandler}
          securityText={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="login" onPress={onPressHandler} />
      </View>
    </View>
  );
} else if (username === "admin" && password === "admin") {
  return <SampleNavigation />;
} else {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Sample App!!</Text>
      <View style={styles.inputContainer}>
        <InputText
          name="ios-contact"
          onValue={username}
          textHandler={(enteredText) => setUsername(enteredText)}
        />
        <InputText
          name="ios-eye-off"
          onValue={password}
          textHandler={(enteredText) => setPassword(enteredText)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="login" onPress={onPressHandler} />
      </View>
    </View>
  );
}

  // return <Authentication />;
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

export default App;

// const [isLoading, setIsLoading] = useState(false);
// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");
// const [usrName, setUsrName] = useState("");
// const [pasWord, setPasWord] = useState("");

// const usernameHandler = (enteredText) => {
//   setUsername(enteredText);
// };

// const passwordHandler = (enteredText) => {
//   setPassword(enteredText);
// };

// const onPressHandler = () => {
//   setUsrName(username);
//   setPasWord(password);
// };

// const onPressLogOut = () => {
//   setUsrName("");
//   setPasWord("");
// };

// if (usrName === "" && pasWord === "") {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to Sample App!!</Text>
//       <View style={styles.inputContainer}>
//         <InputText
//           name="ios-contact"
//           onValue={username}
//           textHandler={usernameHandler}
//           securityText={false}
//         />
//         <InputText
//           name="ios-eye-off"
//           onValue={password}
//           textHandler={passwordHandler}
//           securityText={true}
//         />
//       </View>
//       <View style={styles.buttonContainer}>
//         <Button title="login" onPress={onPressHandler} />
//       </View>
//     </View>
//   );
// } else if (username === "admin" && password === "admin") {
//   return <SampleNavigation />;
// } else {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to Sample App!!</Text>
//       <View style={styles.inputContainer}>
//         <InputText
//           name="ios-contact"
//           onValue={username}
//           textHandler={(enteredText) => setUsername(enteredText)}
//         />
//         <InputText
//           name="ios-eye-off"
//           onValue={password}
//           textHandler={(enteredText) => setPassword(enteredText)}
//         />
//       </View>
//       <View style={styles.buttonContainer}>
//         <Button title="login" onPress={onPressHandler} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     flex: 1,
//   },
//   title: {
//     fontSize: 24,
//   },
//   inputContainer: {
//     width: "80%",
//   },
//   buttonContainer: {
//     width: "80%",
//   },
// });

// const Login = (props) => {
//   return (
//     // <SampleNavigation />
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to Sample App!!</Text>
//       <View style={styles.inputContainer}>
//         <InputText name="ios-contact" textHandler={props.uNHandler} />
//         <InputText name="ios-eye-off" textHandler={props.pWHandler} />
//       </View>
//       <View style={styles.buttonContainer}>
//         <Button title="login" onPress={props.onPress} />
//       </View>
//       {/* <ActivityIndicator animating={props.animeLoad} size="large" /> */}
//     </View>
//   );
// };
