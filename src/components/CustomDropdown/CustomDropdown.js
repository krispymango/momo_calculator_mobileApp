import React from 'react';
import {View,Text,StyleSheet,Pressable} from 'react-native';




const CustomDropdown = ({onPress,text}) => {
  return (

  <Pressable onPress={onPress} style={styles.container}>
  <Text style={styles.text}>{text}</Text>
  </Pressable>
  );
};



const styles = StyleSheet.create({
  container:{
    width:'80%',
    borderRadius:10,
    borderWidth:3,
    borderColor:'#D1D1D1',
    marginVertical: 10,
    textAlign:'center'
  },
    text:{
      fontWeight: 'bold',
      color: 'black',
      height:50,
      textAlign:'center',
      lineHeight:50
    }
});


export default CustomDropdown;
