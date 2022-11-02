import React from 'react';
import {View,Text,StyleSheet,Pressable} from 'react-native';




const CustomDropdownButton = ({onPress,text}) => {
  return (

    <Pressable onPress={onPress} style={styles.container}>
  <Text style={styles.text}>{text}</Text>
  </Pressable>
  );
};



const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      width: '100%',
      padding: 15,
      marginVertical: 5,
      borderRadius: 10,
      backgroundColor: '#3b71f3'
    },
    text:{
      fontWeight: 'bold',
      color: 'white',
    }
});


export default CustomDropdownButton;
