import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import { WATCHLIST } from "../data/dummy-data";
import SettingsScreen from "../screens/SettingsScreen";
import AccountScreen from "../screens/AccountScreen";
import WatchListDestailsScreen from "../screens/WatchListDestailsScreen";
import WatchListScreen from "../screens/WatchListScreen";
import BuyScreen from "../screens/BuyScreen";
import Colors from "../constants/colors";
import CustomHeaderButton from "../components/CustomHeaderButton";
import LogOut from "../screens/LogOut";
import Login from "../screens/Login";

const watchListDetHeader = (props) => {
  const symId = props.route.params.symId;

  const selectedSym = WATCHLIST.find((wli) => wli.symbol === symId);

  return {
    headerTitle: selectedSym.symbol,
  };
};

const navigationHeaderOptions = () => {
  return {
    headerStyle: { backgroundColor: Colors.primaryColor },
    headerTintColor: "white",
  };
};

const AccountStack = createStackNavigator();

const AccountStackNavigator = () => {
  return (
    <AccountStack.Navigator screenOptions={navigationHeaderOptions}>
      <AccountStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={(props) => ({
          headerTitle: "Account Summary",
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  iconName="ios-menu"
                  title="Menu"
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }}
                  color="white"
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </AccountStack.Navigator>
  );
};

const WatchStack = createStackNavigator();

const WatchStackNavigator = () => {
  return (
    <WatchStack.Navigator screenOptions={navigationHeaderOptions}>
      <WatchStack.Screen
        name="WatchListScreen"
        component={WatchListScreen}
        options={(props) => ({
          headerTitle: "Watch List",
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  iconName="ios-menu"
                  title="Menu"
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }}
                  color="white"
                />
              </HeaderButtons>
            );
          },
        })}
      />
      <WatchStack.Screen
        name="WatchListDestailsScreen"
        component={WatchListDestailsScreen}
        options={watchListDetHeader}
      />
    </WatchStack.Navigator>
  );
};

const BuyStack = createStackNavigator();

const BuyStackNavigator = () => {
  return (
    <BuyStack.Navigator screenOptions={navigationHeaderOptions}>
      <BuyStack.Screen
        name="BuyScreen"
        component={BuyScreen}
        options={(props) => ({
          headerTitle: "Buy",
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  iconName="ios-menu"
                  title="Menu"
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }}
                  color="white"
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </BuyStack.Navigator>
  );
};

const SettingStack = createStackNavigator();

const SettingStackNavigator = () => {
  return (
    <SettingStack.Navigator screenOptions={navigationHeaderOptions}>
      <SettingStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={(props) => ({
          headerTitle: "Settings",
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  iconName="ios-menu"
                  title="Menu"
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }}
                  color="white"
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </SettingStack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={navigationHeaderOptions}
      tabBarOptions={{ activeTintColor: Colors.primaryColor }}
    >
      <BottomTab.Screen
        name="AccountStackNavigator"
        component={AccountStackNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-list" size={25} color={tabInfo.color} />;
          },
          tabBarLabel: (tabInfo) => (
            <Text style={{ fontSize: 13, color: tabInfo.color }}>
              Account Summary
            </Text>
          ),
        }}
      />
      <BottomTab.Screen
        name="WatchStackNavigator"
        component={WatchStackNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-alarm" size={25} color={tabInfo.color} />
            );
          },
          tabBarLabel: (tabInfo) => (
            <Text style={{ fontSize: 13, color: tabInfo.color }}>
              Watch List
            </Text>
          ),
        }}
      />
      <BottomTab.Screen
        name="BuyStackNavigator"
        component={BuyStackNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-cart" size={25} color={tabInfo.color} />;
          },
          tabBarLabel: (tabInfo) => (
            <Text style={{ fontSize: 13, color: tabInfo.color }}>Buy</Text>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={navigationHeaderOptions}
        drawerContentOptions={{ activeTintColor: Colors.primaryColor }}
      >
        <Drawer.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{
            drawerIcon: (drawerInfo) => {
              return (
                <Ionicons name="ios-home" size={25} color={drawerInfo.color} />
              );
            },
            drawerLabel: "Home",
          }}
        />
        <Drawer.Screen
          name="SettingStackNavigator"
          component={SettingStackNavigator}
          options={{
            drawerIcon: (drawerInfo) => {
              return (
                <Ionicons
                  name="ios-settings"
                  size={25}
                  color={drawerInfo.color}
                />
              );
            },
            drawerLabel: "Setings",
          }}
        />
        <Drawer.Screen
          name="LogOut"
          component={LogOut}
          options={{
            drawerIcon: (drawerInfo) => (
              <Ionicons name="ios-log-out" size={25} color={drawerInfo.color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
