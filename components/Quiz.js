import React, { Component } from 'react';
import {View, StyleSheet,Text, Button} from 'react-native';

class Quiz extends Component {
    render() {
        return (
            <View>
                <Text>This is Quiz Page</Text>
                <Button title="To Results" onPress={() => navigation.navigate("Results")} />
            </View>
        );
    }
}

const styles = StyleSheet.create({})

export default Quiz;
