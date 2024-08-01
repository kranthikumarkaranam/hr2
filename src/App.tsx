import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Gallery from './components/Gallery';

const img1 = require('./assets/image1.jpeg');
const img2 = require('./assets/image2.jpeg');
const img3 = require('./assets/image3.jpeg');
const img4 = require('./assets/image4.jpeg');
const vid1 = require('./assets/video1.mp4');
const vid2 = require('./assets/video2.mp4');

const text = [
  {
    title: 'Dodge Tomahawk',
    topspeed: '300-420 mph (480-680 km/h)',
    engine: '8.3 L V10 (500 hp)',
    price: '$555,000',
  },
  {
    title: 'Kawasaki Ninja H2R',
    topspeed: '206–249 mph (331–400 km/h)',
    engine: 'Supercharged 998 cc inline-4 DOHC (310 hp)',
    price: '$50,000',
  },
  {
    title: 'MTT Y2K Turbine Superbike',
    topspeed: '227 mph (365 km/h)',
    engine: 'Rolls-Royce 250-C18 turboshaft (320 hp)',
    price: '$200,000',
  },
  {
    title: 'Honda CBR1100XX',
    topspeed: '194 mph (312 km/h)',
    engine: '1,137 cc liquid-cooled 4-stroke (152.9 hp)',
    price: '$11,500',
  },
  {
    title: 'Sunset',
    location: 'Australia',
    description: 'A short 10 second timelapse of sunset',
  },
  {
    title: 'Looney toons',
    location: 'Toon land',
    description: 'A short animated video',
  },
];

const App = () => {
  const GalleryData = [
    {type: 'image', source: img1},
    {type: 'image', source: img2},
    {type: 'image', source: img3},
    {type: 'image', source: img4},
    {type: 'video', source: vid1},
    {type: 'video', source: vid2},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Gallery data={GalleryData} descriptions={text} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
  },
});

export default App;
