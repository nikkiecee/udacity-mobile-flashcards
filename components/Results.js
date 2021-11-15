import React, { Component } from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

class Results extends Component {
    render() {
        return (
            <View>
                <Text>This is Results Page</Text>
                <Button title="To DeckList" onPress={() => navigation.navigate("DeckList")} />
            </View>
        );
    }
}

const styles = StyleSheet.create({})

export default Results;
