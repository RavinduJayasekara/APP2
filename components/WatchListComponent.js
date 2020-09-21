import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../constants/colors";
import DefaultText from "./DefaultText";

const WatchListComponent = (props) => {
  const itemData = props.data;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ marginTop: 5 }}
        onPress={() =>
          props.navigation.navigate("WatchListDestailsScreen", {
            symId: itemData.item.symbol,
          })
        }
      >
        <View style={styles.titleContianer}>
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <View>
              <AntDesign
                name="rightcircle"
                size={20}
                color={Colors.primaryColor}
              />
            </View>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                {itemData.item.symbol}
              </Text>
              <DefaultText>{itemData.item.description}</DefaultText>
            </View>
          </View>
          <View style={styles.rtitleContainer}>
            <View style={styles.subtitles}>
              <DefaultText style={{ color: "blue", fontWeight: "bold" }}>
                {itemData.item.lastTraded}
              </DefaultText>
              <DefaultText>{itemData.item.volume}</DefaultText>
            </View>
            <View style={styles.subtitles}>
              <View>
                <DefaultText
                  style={{
                    backgroundColor:
                      parseFloat(itemData.item.changeP) > 0 ? "green" : "red",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {itemData.item.changeP}%
                </DefaultText>
              </View>
              <DefaultText
                style={{
                  color: parseFloat(itemData.item.change) > 0 ? "green" : "red",
                }}
              >
                {itemData.item.change}
              </DefaultText>
            </View>
          </View>
        </View>
        <View style={styles.subTopicsHolder}>
          <View style={styles.subTopicsContainer}>
            <View style={styles.subTopics}>
              <Text>Open</Text>
              <Text>{itemData.item.open}</Text>
            </View>
            <View style={styles.subTopics}>
              <Text>High</Text>
              <DefaultText style={{ color: "green" }}>
                {itemData.item.high}
              </DefaultText>
            </View>
            <View style={styles.subTopics}>
              <Text>Low</Text>
              <DefaultText style={{ color: "red" }}>
                {itemData.item.low}
              </DefaultText>
            </View>
            <View style={styles.subTopics}>
              <Text>P.Closed</Text>
              <Text>{itemData.item.pClosed}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.primaryColor,
    borderBottomWidth: 2,
  },
  titleContianer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rtitleContainer: {
    flexDirection: "row",
  },
  subtitles: {
    alignItems: "flex-end",
    marginHorizontal: 8,
  },
  subTopicsContainer: {
    flexDirection: "row",
  },
  subTopicsHolder: {
    alignItems: "center",
  },
  subTopics: {
    margin: 10,
    marginVertical: 25,
    backgroundColor: "#ccc",
    padding: 10,
    width: 74,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default WatchListComponent;
