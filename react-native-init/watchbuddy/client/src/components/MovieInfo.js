import dummyRottenTomatoesData from '../data/dummyRottenTomatoesData';
import React from 'react';

import {
  Image,
  Text,
  View
} from 'react-native';

import {
  Button
} from 'react-native-elements';

const COMPONENT_WIDTH_RATIOS = {
  cardWidth: .92
}

export default MovieSwipeDeckButtons = ({ dimensions, movie }) => {
  this.getMoviePoster = (movie) => {
    return (
      movie ?
        <Image
          source={{ height: dimensions.height / 2, width: dimensions.width, uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
        />
        : null
    );    
  }

  return (
    <View>
      <View style={{height: dimensions.height / 2, width: dimensions.width}}>
        {this.getMoviePoster(movie)}
        <View>
        <Text style={{ position: 'absolute', width: dimensions.width, bottom: 0, fontSize: 24, color: '#FFF', backgroundColor: 'rgba(0,0,0,.5)' }}>
          {movie.title}
        </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: 'space-between', paddingTop: 10, paddingBottom: 10 }}>
        <Button 
          rounded
          onPress={() => {}}
          title={`rating: ${movie.vote_average}`} 
          buttonStyle={styles.Button} 
        />
        <Button 
          rounded
          onPress={() => {}} 
          title={'watch now'}
          buttonStyle={styles.Button}
        />
        <Button
          rounded
          onPress={() => {}} 
          title={'save'}
          buttonStyle={styles.Button} 
        />
      </View>
      <Text style={{fontSize: 16, fontWeight: 'bold', textDecoration: 'underline'}}>
        Synopsis
      </Text>
      <Text style={{ fontSize: 16 }}>
        {movie.overview}
      </Text>
    </View>
  );
}

const styles = {
  Button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#29b6f6'
  }
}