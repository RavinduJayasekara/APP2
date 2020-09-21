import React from "react";
import { StyleSheet, View, Text,TouchableOpacity } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Colors from "../constants/colors";

const SettingComponent = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <Ionicons name={props.iname} size={30} color={props.color} />
        </View>
        <Text style ={{fontWeight: 'bold'}}>{props.text}</Text>
      </View>
      <View style = {{justifyContent: 'center'}}>
        <AntDesign
          name="rightcircle"
          size={20}
          color={Colors.primaryColor}
          size={25}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: Colors.primaryColor,
    borderBottomWidth: 1,
    width: "95%",
    marginVertical: 5,
    height: 50,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default SettingComponent;
