import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native';

//dimensões do aparelho
const largura = Dimensions.get('screen').width;

export class Post extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      item: this.props.item
    }
  }

  loadIcon(likeada){
    return likeada ? require('../assets/img/s2-check.png') : require('../assets/img/s2.png');
  }

  like(){
    const { item } = this.state;

    let novaLista = [];
    if(!item.likeada){
      novaLista = [
        ...item.likers,
        {login: 'Papa Neto'}
      ];
    }else{
      novaLista = item.likers.filter(
        liker => {
          return liker.login !== 'Papa Neto'
        }
      );
    }

    const fotoAtualizada = {
      ...item,
      likeada: !item.likeada,
      likers: novaLista
    }    

    this.setState({item: fotoAtualizada});
  }

  mostraLikes(likers){
    if(likers.length < 1)
      return;

    return (
      <Text style={styles.likes}>
        {likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  mostraComentarios(item){
    if(item.comentario === '')
      return;

    return (
      <View style={styles.comentario}>
        <Text style={styles.negrito}>{item.loginUsuario}</Text>
        <Text style={styles.textComentario} >{item.comentario}</Text>
      </View>
    );
  }

  render() {

    const { item } = this.state;

    return (
        <View>
          <View style={styles.header}>
            <Image source={{uri: item.urlPerfil}} style={styles.perfil} />
            <Text style={styles.nome}>{item.loginUsuario}</Text>
          </View>
          <Image source={{uri: item.urlFoto}} style={styles.post}/>

          <View style={styles.rodape}>
            <TouchableOpacity onPress={ this.like.bind(this) }>
              <Image source={this.loadIcon(item.likeada)} style={styles.botaoDeLike} />
            </TouchableOpacity>
            
            {this.mostraLikes(item.likers)}

            {this.mostraComentarios(item)}
          </View>
        </View>
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
  },
  rodape: {
    margin: 10
  },
  botaoDeLike: {
    width: 40,
    height: 40
  },
  likes: {
    fontWeight: '700',
    margin: 10
  },
  comentario: {
    flexDirection: 'row',
    marginTop: 10
  },
  textComentario: {
    marginLeft: 5
  }
});
