import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/index";

class DeckList extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { decks} = this.props
console.log(decks)
    return (
      <SafeAreaView style={styles.container}>
        {Object.keys(decks).map((deck) => {
                const { title, questions } = decks[deck]
                return (
                    <TouchableOpacity key={deck} onPress={() => navigation.navigate('DeckView', {deck})}>
                        <Text> {title} </Text>
                        <Text> {questions.length} questions </Text>
                    </TouchableOpacity>

                )
            })}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
function mapStateToProps(decks) {
  console.log(decks);
  return {
    decks,
  };
}

export default connect(mapStateToProps)(DeckList);
