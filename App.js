import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

	constructor(props)
  	{
  		super(props);
  		this.state = {
  		data : ''
  		}
  	}

  componentDidMount(){
  	return fetch('http://hellojc.pythonanywhere.com/index/?format=json')
  	.then((response) => response.json())
  	.then((responseJson)=>{

  		this.setState({ data : responseJson });

  	}).catch((error)=>{
  		console.error(error);
  	});

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Fetching From Django Rest Api</Text>
        <Text>{this.state.data}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
