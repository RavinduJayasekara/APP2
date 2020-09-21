import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import DefaultText from "../components/DefaultText";
import { useDispatch } from "react-redux";

const LogOut = (props) => {

  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.compoContainer}>
        <View>
          <DefaultText>
            Are you sure you want to log out of the application
          </DefaultText>
        </View>
        <View style={styles.buttonContainer}>
          <View style={{ width: 90 }}>
            <Button title="yes" onPress={signOut} />
          </View>
          <View style={{ width: 90 }}>
            <Button
              title="no"
              onPress={() => props.navigation.navigate("AccountScreen")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  compoContainer: {
    width: "90%",
    height: 150,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 15,
  },
});

export default LogOut;
