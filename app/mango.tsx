import { View, StyleSheet } from 'react-native';

import DisplayFruit from "../components/display-fruit";

export default function mango() {
    
    return (
        <View style={styles.container}>
            <DisplayFruit fruit="Mango" />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});