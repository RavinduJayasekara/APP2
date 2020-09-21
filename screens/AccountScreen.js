import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import DropDown from "react-native-dropdown-picker";

import { USERS, ACCSUMMARY } from "../data/dummy-data";
import DetailTile from "../components/DetailTile";
import colors from "../constants/colors";
import Card from "../components/Card";

const AccountScreen = (props) => {
  const array = [];

  for (let i = 0; i < USERS.length; i++) {
    array.push({ label: USERS[i].userAccount, value: USERS[i].userId });
  }

  const [user, setUser] = useState(array[0].value);

  const selectedUser = ACCSUMMARY.find((acc) => acc.userId === user);

  console.log(user);

  return (
    <View style={styles.container}>
      <View style={styles.dropDownContainer}>
        <DropDown
          items={array}
          containerStyle={{ height: 50 }}
          itemStyle={{ justifyContent: "flex-start" }}
          defaultValue={user}
          labelStyle={{ fontSize: 25, color: colors.primaryColor }}
          onChangeItem={(item) => setUser(item.value)}
        />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Card>
            <DetailTile
              title="Total Cost of the PortFoilio"
              value={selectedUser.cost}
            />
          </Card>
          <DetailTile
            title="Total Market Value of the Portfolio"
            value={selectedUser.marketVal}
          />
          <DetailTile
            title="Total Gain/Loss"
            value={selectedUser.gainLoss}
            color={"red"}
          />
          <DetailTile
            title="Cash Balance"
            value={selectedUser.cash}
            color={"red"}
          />
          <DetailTile
            title="Buying Power"
            value={selectedUser.buyingPower}
            color={"green"}
          />
          <DetailTile
            title="Total Pending Buy Orders Value"
            value={selectedUser.pending}
          />
          <DetailTile
            title="Exposure Percentage"
            value={selectedUser.exposureP}
          />
          <DetailTile
            title="Exposure Margin Amount-Equity"
            value={selectedUser.exposureME}
          />
          <DetailTile
            title="Exposure Margin Amount-D"
            value={selectedUser.exposureMD}
          />
          <DetailTile title="Cash Block" value={selectedUser.cashBlock} />
          <DetailTile title="Margin Block" value={selectedUser.marginBlock} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropDownContainer: {
    width: "100%",
    height: 50,
  },
});

export default AccountScreen;
