import React, { Component } from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

class Decklist extends Component {
    render() {
        return (
            <View>
                <Text>This is DeckList Page</Text>
                <Button title="To Deck" onPress={() => navigation.navigate("Deck")} />
            </View>
        );
    }
}

const styles = StyleSheet.create({})

export default Decklist;
