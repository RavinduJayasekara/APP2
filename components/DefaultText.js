import React from "react";
import { StyleSheet, Text } from "react-native";

const DefaultText = (props) => {
  return (
    <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    padding: 1,
    borderRadius: 5,
    paddingLeft: 2,
  },
});

export default DefaultText;
