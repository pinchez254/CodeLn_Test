import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';
import Header from './Header';
import Footer from './Footer'
import Body from './Body'
export default class IndexScreen extends React.Component {
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
      <View style={{ flex: 1,  }}>
        <Header />
        {/* <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
          keyExtractor={({ id }, index) => id}

        /> */}
        <Body/>
        <Footer/>
      </View>
    );
  }
}
