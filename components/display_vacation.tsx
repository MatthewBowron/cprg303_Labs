import { Image, StyleSheet, Dimensions, View, Text } from 'react-native';
import { FunctionComponent, useEffect, useState } from 'react';


const screenWidth = Dimensions.get('window').width - 40;
const maxImgHeight = 0.2*Dimensions.get('window').height;
var imgHeight = 0;

interface Props { destination: desObj; }
interface desObj {id:number, location:string, price:number, average_yearly_temperature:string}

const DisplayVacation: FunctionComponent<Props> = ({destination}) => {

  const {location, price, average_yearly_temperature} = destination;

  const[data, setData] = useState<any>();

  const fetchData = () => {
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${location}`)
    .then( (response) => {
        if(!response.ok)
            throw new Error("Response was not ok for " + location);
        return response.json();
    })
    .then( (data) => {
        imgHeight = data.thumbnail.height/data.thumbnail.width;
        if (imgHeight>maxImgHeight) imgHeight = maxImgHeight;
        setData(data);
    })
    .catch(console.error);
  }

  useEffect( () =>{
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
        {data && <Image 
            style = {[styles.img, {height: screenWidth*imgHeight}]} 
            src = {data.thumbnail.source} />}
        <Text>Price: {price}</Text>
        <Text>Average Temperature: {average_yearly_temperature}</Text>
        {data && <Text>Description:  {data.extract}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    gap: 5,
  },
  img: {
    width: screenWidth,
    resizeMode: 'contain',
  }
});

export default DisplayVacation;