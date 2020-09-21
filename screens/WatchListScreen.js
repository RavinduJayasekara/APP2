import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import { WATCHLIST } from "../data/dummy-data";
import WatchListComponent from "../components/WatchListComponent";
import Colors from "../constants/colors";


const WatchListScreen = (props) => {

    const listItem = (itemData) => {
        return <WatchListComponent data={itemData} navigation = {props.navigation} />;
      };

    return (
    <View style={styles.container}>
      <View style = {{alignItems:'center', width: '100%'}}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContianer}>
            <View style = {{marginLeft: 20}}>
              <Text>Symbol</Text>
              <Text>Description</Text>
            </View>
            <View style={styles.rtitleContainer}>
              <View style={styles.subtitles}>
                <Text>Last Traded</Text>
                <Text>Volume</Text>
              </View>
              <View style={styles.subtitles}>
                <Text>Change%</Text>
                <Text>Change</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.list}>
          <FlatList
            data={WATCHLIST}
            renderItem={listItem}
            keyExtractor={(item, index) => item.symbol}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    width: "97%",
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
    marginLeft: 8,
  },
  headerContainer: {
    borderBottomColor: Colors.primaryColor,
    borderBottomWidth: 5,
    width: "97%",
    paddingVertical: 10
  },
});

export default WatchListScreen;
