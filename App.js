import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList } from 'react-native';

//dimensões do aparelho
const largura = Dimensions.get('screen').width;

export default class App extends React.Component {
  render() {

    const dash = [
      {id: 1, nome: 'Rafael Castro', imagem: 'Potala-Palace.jpg', perfilImg: 'person01.png'},
      {id: 2, nome: 'João Melo', imagem: 'Jiuzhaigou.jpg', perfilImg: 'person02.png'}
    ];

    return (
      <FlatList
      style={styles.topSpace}
      keyExtractor = {item => item.id} 
      data = {dash}
      renderItem = {
        ({item}) => 
        <View>
          <View style={styles.header}>
            <Image source={require('./assets/img/person01.png')} style={styles.perfil} />
            <Text style={styles.nome}>{item.nome}</Text>
          </View>
          <Image source={require('./assets/img/Potala-Palace.jpg')} style={styles.post}/>
        </View>
      }
      />
    );
  }
}

const styles = StyleSheet.create({
  centralizado: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  negrito: {
    fontWeight: '700',
  },
  white: {
    color: '#fff',
  },
  post: {
    width: largura,
    height: largura
  },
  topSpace: {
    marginTop: 20
  },
  header: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  nome: {
    marginLeft: 10
  },
  perfil: {
    width: 40,
    height: 40,
    borderRadius: 20
  }
});
