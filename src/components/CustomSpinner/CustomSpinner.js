import React from 'react';
import {View,Text,StyleSheet,Modal,Pressable,useWindowDimensions} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons/faHourglassHalf';

const CustomSpinner = () => {
    const {height} = useWindowDimensions();
  return (
    <Modal transparent={true} animationType="fade">
    <View style={{flex:1,alignItems:'center',backgroundColor:'rgba(0,0,0,0.6)'}}>
    <View style={{backgroundColor:'white',marginTop:height *0.25+100,width:'85%',elevation:20,shadowColor:'#000000',padding:5,height:100,width:100,alignItems:'center',justifyContent:'center',borderRadius: 50}} >
    <FontAwesomeIcon icon={faHourglassHalf} style={{elevation:15,shadowColor:'black'}}  size={42} />
    </View>
    </View>
    </Modal>
  );
};



const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      width: '95%',
      padding: 15,
      marginVertical: 10,
      borderRadius: 10,
      backgroundColor: '#3b71f3'
    },
    text:{
      fontWeight: 'bold',
      color: 'white',
    }
});


export default CustomSpinner;
