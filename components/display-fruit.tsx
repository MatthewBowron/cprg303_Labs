import { Image, StyleSheet, Dimensions } from 'react-native';
import { FunctionComponent } from 'react';

import { FRUIT_LIST } from './fruitList';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

interface Props { fruit: string; }

const DisplayFruit: FunctionComponent<Props> = ({fruit}) => {
  var imageLocation;
  for(const f of FRUIT_LIST){
    if (f.name == fruit){
      imageLocation = f.image_uri;
      break;
    }
  };

  if (imageLocation == null)
    imageLocation = require('./images/no_image_available.jpg');
  return (
    <Image style={styles.img} source={imageLocation} />
  )
}

const styles = StyleSheet.create({
  img: {
    width: 0.8*screenWidth,
    height: 0.8*screenHeight,
    marginHorizontal: 0.1*screenWidth,
    marginVertical: 0.1*screenHeight,
    resizeMode: 'contain',
  }
});

export default DisplayFruit;