import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Video from 'react-native-video'; // Add this import for video support

const Gallery = ({data, descriptions}) => {
  const [index, setIndex] = useState(0);

  const windowWidth = Dimensions.get('window').width;

  const rightPressHandler = () => {
    setIndex(prevIndex => (prevIndex + 1) % data.length);
  };
  const leftPressHandler = () => {
    setIndex(prevIndex => (prevIndex - 1 + data.length) % data.length);
  };

  const currentItem = data[index];
  const currentDescription = descriptions[index];
  return (
    <View style={styles.container}>
      <View style={styles.galleryContainer}>
        {currentItem.type === 'image' ? (
          <Image
            source={currentItem.source}
            style={{
              width: windowWidth,
              resizeMode: 'contain',
            }}
          />
        ) : (
          <Video
            source={currentItem.source}
            muted
            style={{
              width: windowWidth,
              height: 300,
            }}
          />
        )}
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, {borderLeftWidth: 1}]}
          onPress={leftPressHandler}>
          <Text style={styles.arrow}>&larr;</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {borderLeftWidth: 1}]}
          onPress={rightPressHandler}>
          <Text style={styles.arrow}>&rarr;</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{currentDescription.title}</Text>
        {currentDescription.topspeed && (
          <Text>Top Speed: {currentDescription.topspeed}</Text>
        )}
        {currentDescription.engine && (
          <Text>Engine: {currentDescription.engine}</Text>
        )}
        {currentDescription.price && (
          <Text>Price: {currentDescription.price}</Text>
        )}
        {currentDescription.location && (
          <Text>Location: {currentDescription.location}</Text>
        )}
        {currentDescription.description && (
          <Text>Description: {currentDescription.description}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  galleryContainer: {
    height: 300,
    // backgroundColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    height: 60,
    backgroundColor: 'pink',
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    height: '100%',
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    color: '#fff',
    fontSize: Platform.OS === 'android' ? 38 : 24,
  },
  descriptionContainer: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Gallery;
