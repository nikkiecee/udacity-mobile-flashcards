import React, { Component } from 'react';
import {View, StyleSheet,Text, Button} from 'react-native';

class NewDeck extends Component {
    render() {
        return (
            <View>
                <Text>This is NewDeck Page</Text>
                <Button title="To DeckList" onPress={() => navigation.navigate("DeckList")} />
            </View>
        );
    }
}

const styles = StyleSheet.create({})

export default NewDeck;
