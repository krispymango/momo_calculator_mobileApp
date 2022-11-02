import React from 'react';
import {View,Modal,Text,StyleSheet,Pressable,useWindowDimensions} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';



const CustomErrorBox = ({onPress,text}) => {
  const {height} = useWindowDimensions();
  return (

    <Modal transparent={true} animationType="fade">
    <View key={1} style={{flex:1,alignItems:'center',backgroundColor:'rgba(0,0,0,0.6)'}}>
    <View style={{width:'85%',elevation:20,shadowColor:'#000000',padding:5,marginTop: height * 0.40,alignItems:'center',justifyContent:'center',backgroundColor:'white'}} >

    <Pressable onPress={onPress} style={{position:'absolute',top:10,right:10}}>
    <FontAwesomeIcon icon={faTimes} size={24} />
    </Pressable>

    <FontAwesomeIcon icon={faExclamationTriangle} style={{elevation:15,shadowColor:'black'}} color={'orange'} size={48} />

    <View style={{width:'90%'}}>

    <View style={styles.popItem}>
    <View>
    <Text style={{fontSize:22,marginVertical:3,fontWeight:'bold'}}> {text}</Text>
    </View>
    </View>


    </View>
    </View>
    </View>
    </Modal>
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
    },
    popItem:{
      padding: 2,
      marginVertical: 10,
      borderLeftWidth:3,
      borderColor:'red'
    }
});


export default CustomErrorBox;
