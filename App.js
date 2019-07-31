import React,{Component} from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
// Importamos los componentes que nesesitmamos para el TAB
import { TabView, SceneMap } from 'react-native-tab-view';

// Definimos las vistas que tendran ca tab
const FirstRoute=()=>(
  <View></View>
);
const SecondRoute=()=>(
  <View></View>
);

export default class App extends Component{
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Top' },
      { key: 'second', title: 'Todas' },
    ],
  };
  render(){
    return (
      <TabView 
        style={styles.container}
        navigationState={this.state}
        renderScene={SceneMap({
          first:FirstRoute,
          second:SecondRoute,
        })}
        onIndexChange={index=>this.setState({index})}
        initialLayout={{ width:Dimensions.get('window').width }}
      />
  );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:'10%',
  },
});
