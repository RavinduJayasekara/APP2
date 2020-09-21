import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 8,
    backgroundColor: "white",
  },
});

export default Card;
