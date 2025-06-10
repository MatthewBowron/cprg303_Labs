import { FunctionComponent } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface Props { 
    counter: number; 
    setCounter: Function;
}

const Increment: FunctionComponent<Props> = ({counter, setCounter}) => {
    return(
        <TouchableOpacity onPress={() => setCounter(counter + 1)}>
                <Text style={styles.button}>{"Increment"}</Text>
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
export default Increment;