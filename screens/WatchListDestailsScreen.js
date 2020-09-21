import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import DetailTile from "../components/DetailTile";

import { WATCHLIST } from "../data/dummy-data";
import colors from "../constants/colors";

const WatchListScreenDetailsScreen = (props) => {
  const symId = props.route.params.symId;

  const selectedClient = WATCHLIST.find((cli) => cli.symbol === symId);

  const value = parseFloat(selectedClient.change);

  return (
    <View style={styles.container}>
      <ScrollView>
        <DetailTile title="Symbol" value={selectedClient.symbol} />
        <DetailTile title="Compnay Name" value={selectedClient.description} />
        <DetailTile
          title="Last Traded Price"
          value={selectedClient.lastTraded}
        />
        <DetailTile title="Last Traded Volume" value={selectedClient.volume} />
        <DetailTile
          title="Change(Rs.)"
          value={selectedClient.change}
          color={value < 0 ? "red" : "green"}
        />
        <DetailTile
          title="Change(%)"
          value={selectedClient.changeP}
          color={value < 0 ? "red" : "green"}
        />
        <DetailTile title="Open(Rs.)" value={selectedClient.open} />
        <DetailTile title="High(Rs.)" value={selectedClient.high} />
        <DetailTile title="Low(Rs.)" value={selectedClient.low} />
        <DetailTile title="P Closed" value={selectedClient.pClosed} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WatchListScreenDetailsScreen;
