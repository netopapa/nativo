import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import { Post } from './components/Post';

//dimensões do aparelho
const largura = Dimensions.get('screen').width;

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount(){
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
    .then(response => response.json())
    .then(json => this.setState({fotos: json}));
  }

  render() {


    /*
    const dash = [
      {id: 1, nome: 'Rafael Castro', imagem: 'Potala-Palace.jpg', perfilImg: 'person01.png'},
      {id: 2, nome: 'João Melo', imagem: 'Jiuzhaigou.jpg', perfilImg: 'person02.png'}
    ];
    */

    return (
      <FlatList
      style={styles.topSpace}
      keyExtractor = {item => item.id} 
      data = {this.state.fotos}
      renderItem = {
        ({item}) =>
        <Post item={item} />
      }
      />
    );
  }
}

const styles = StyleSheet.create({
  topSpace: {
    marginTop: 20
  }
});
