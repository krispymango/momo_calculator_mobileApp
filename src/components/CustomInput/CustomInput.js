import React from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';




const CustomInput = ({onChange,placeholder}) => {
  return (
    <TextInput keyboardType = 'numeric' onChangeText={onChange} placeholder={placeholder} style={styles.container}  />
  );
};



const styles = StyleSheet.create({
container:{
  width:'80%',
  borderRadius:10,
  borderWidth:3,
  borderColor:'#D1D1D1',
  marginVertical: 10,
  textAlign:'center',
    fontWeight: 'bold',
    color: 'black',
}
});


export default CustomInput;
