import React, { Component } from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

class Deck extends Component {
    render() {
        return (
            <View>
                <Text>This is Deck Page</Text>
                <Button title="To Quiz" onPress={() => navigation.navigate("Quiz")} />
            </View>
        );
    }
}

const styles = StyleSheet.create({})

export default Deck;
