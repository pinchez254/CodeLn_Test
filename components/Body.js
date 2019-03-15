import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions,FlatList ,ActivityIndicator} from "react-native";
const { width, height } = Dimensions.get("window");

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
      }
    
      componentDidMount() {
        return fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
    
          .then(responseJson => {
            this.setState(
              {
                isLoading: false,
                dataSource: responseJson,
              },
              function() {}
            );
          })
          .catch(error => {
            console.error(error);
          });
      }
  render() {
    if (this.state.isLoading) {
        return (
          <View style={{ flex: 1, padding: 20 }}>
            <ActivityIndicator />
          </View>
        );
      }
    return (
      <View style={styles.container}>
        <View style={styles.ImageComponent}>
          <Text>image</Text>
        </View>
        <View style={styles.TextBody}>
          <Text>body data from api...</Text>
          <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
          keyExtractor={({ id }, index) => id}

        />
        </View>
        <View style={styles.floatButton} >
        <Text style={{fontWeight:'bold', color:'white', fontSize:20}}>Go</Text>
        
        </View>
      </View>
    );
  }
}
export default Body;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.8
  },
  ImageComponent: {
    flex: 1,
    backgroundColor: "green",
    width: width
  },
  TextBody: {
    flex: 1,
    backgroundColor: "white",
    width: width
  },
  floatButton: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: height / 2- 50,
    right: 10,
    height: 50,
    width: 50,
    backgroundColor: "blue"
  }
});
