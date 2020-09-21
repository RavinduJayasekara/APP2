import React from "react";
import { StyleSheet, View } from "react-native";

import SettingComponent from "../components/SettingComponent";

const SettingsScreen = (props) => {
  return (
    <View style={styles.container}>
      <SettingComponent iname = 'ios-construct' text = {'Change Password'} color = {'green'} />
      <SettingComponent iname = 'ios-finger-print' text = {'Touch ID'} color = {'red'} />
      <SettingComponent iname = 'md-notifications' text = {'Notifications'} color = {'#8915c9'} />
      <SettingComponent iname = 'ios-infinite' text = {'Changing Theme'} color = {'#d62b2b'} />
      <SettingComponent iname = 'ios-information-circle' text = {'About'} color = {'#2b34d6'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
});

export default SettingsScreen;
