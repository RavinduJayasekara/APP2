import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/colors";

const DetailTile = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text style={{ ...styles.text, ...{ color: props.color } }}>
          {props.value}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderBottomColor: Colors.primaryColor,
    borderBottomWidth: 2,
    justifyContent: "center",
    padding: 10,
  },
  valueContainer: {
    width: "100%",
    alignItems: "flex-end",
  },
  titleContainer: {
    marginTop: 5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default DetailTile;
