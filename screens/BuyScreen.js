import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BuyScreen = props => {
    return(
<View style = {styles.container}>
    <Text>BuyScreen</Text>
</View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default BuyScreen;