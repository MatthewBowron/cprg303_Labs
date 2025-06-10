import { FunctionComponent } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface Props { 
    counter: number; 
    setCounter: Function;
}

const Decrement: FunctionComponent<Props> = ({counter, setCounter}) => {
    var buttonPress = () => {
        if(counter > 0){
          setCounter(counter - 1);
        }
    }
    return(
        <TouchableOpacity onPress={buttonPress}>
            <Text style={styles.button}>{"Decrement"}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    padding: 5,
    margin: 5,
    borderWidth: 1,
  }
});
export default Decrement;