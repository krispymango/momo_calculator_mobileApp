
import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  useWindowDimensions,
  Modal,
  Pressable,
  View,
} from 'react-native';
import CustomInput from './src/components/CustomInput';
import CustomSpinner from './src/components/CustomSpinner';
import CustomDropdown from './src/components/CustomDropdown';
import CustomDropdownButton from './src/components/CustomDropdownButton';
import CustomButton from './src/components/CustomButton';
import CustomErrorBox from './src/components/CustomErrorBox';
import Logo from './assets/img/coin-in-hand.png';

const App = () => {
  const {height} = useWindowDimensions();
  const [mob_net,setmob_net] = useState(false);
  const [details,setdetails] = useState(false);
  const [spinner,setspinner] = useState(false);
  const [errorfill,seterrorfill] = useState(false);
  const [errorfetch,seterrorfetch] = useState(false);
  const [data,setdata] = useState(false);
  const [trxn_type,settrxn_type] = useState(false);
  const [trxn_point,settrxn_point] = useState(false);
  const [txtMN,settxtMN] = useState('Mobile network');
  const [txtTP,settxtTP] = useState('Transaction Point');
  const [txtTT,settxtTT] = useState('Transaction Type');
  const [valMN,setvalMN] = useState('');
  const [valTP,setvalTP] = useState('');
  const [valTT,setvalTT] = useState('');
  const [valAm,setvalAm] = useState('');

  let Data={
    mobile_network:valMN,
    transaction_type:valTT,
    transaction_point:valTP,
    amount:valAm
  };

  var url = 'https://apps.kriolay.com/momo_calculator/api/calculation';
  const fetchData = () => {
    try {
        fetch(url,
        {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(Data)
    })
        .then((response) => response.json())
        .then((response) => {setspinner(false);setdata(response);setdetails(true)})
        .catch((error) => {
            seterrorfetch(true)
        });
    } catch (error) {
      // Error retrieving data
    }
  }

  function showMobileNetwork()
  {
    setmob_net(true);
  }

  function showTransactionType()
  {
    settrxn_type(true);
  }

  function showTransactionPoint()
  {
    settrxn_point(true);
  }

  function closeDetails()
  {
    setdata('');
    setdetails(false);
  }

  function closeErrorFetch()
  {
    setdata('');
    seterrorfetch(false);
  }

  function closeErrorFill()
  {
    setdata('');
    seterrorfill(false);
  }

function mobileNetworkSelected(value)
{
  setmob_net(false);
   var text = (value == 1) ? "MTN" : (value == 2) ? "Vodafone" : (value == 3) ? "Airtel/Tigo": null;
   settxtMN(text);
   setvalMN(value);
}

function transactionTypeSelected(value)
{
  settrxn_type(false);
  var text = (value == 1) ? "Money Transfer" : (value == 2) ? "Cash-out" : (value == 3) ? "Money Transfer(P2P)" : (value == 4) ? "Money Transfer(A2C)" : null;
  settxtTT(text);
  setvalTT(value);
}

function transactionPointSelected(value)
{
  settrxn_point(false);
  var text = (value == 1) ? "At Merchant / Agent" : (value == 2) ? "Mobile" :null;
  settxtTP(text);
  setvalTP(value);
}


function amountValue(value) {
  setvalAm(value);
  console.log(value);
}

  const submitCalculator = ()  =>
{
  if (Data.transaction_point !== '' && Data.mobile_network !== '' && Data.transaction_type !== '' && Data.amount !== '')
  {
    setspinner(true);
    fetchData();
  }
  else
  {
    seterrorfill(true);
  }
}

  return (
    <View style={styles.sectionContainer}>

    <View style={styles.customViewContainer}>
    <Text style={styles.title}> Momo Calculator </Text>
    <View style={styles.logoView}>
    <Image source={Logo} style={[styles.logo,{height: height * 0.2}]} />
    </View>
    </View>

    <View style={styles.customViewContainer}>
    <CustomDropdown onPress={showMobileNetwork} text={txtMN} />
    </View>

    <View style={styles.customViewContainer}>
    <CustomDropdown onPress={showTransactionType} text={txtTT} />
    </View>

    <View style={styles.customViewContainer}>
    <CustomDropdown onPress={showTransactionPoint} text={txtTP} />
    </View>

    <View style={styles.customViewContainer}>
    <CustomInput onChange={amountValue} placeholder="Amount" />
    </View>

    <View style={styles.customViewContainer}>
    <CustomButton onPress={submitCalculator} text="Submit" />
    </View>




    {/* Show Error Fields */}
    {
      errorfill ? (
        <CustomErrorBox text="Kindly Fill All Fields" onPress={closeErrorFill}/>
      ):null
    }
    {/* Show Error Fields */}


    {/* Show Error FetchValues */}
    {
      errorfetch ? (
        <CustomErrorBox text="Error, Please Try Again" onPress={closeErrorFetch}/>
      ):null
    }
    {/* Show Error FetchValues */}



    {/* Show Pop up */}
    {
      details ? (<Modal transparent={true} animationType="fade">
      <View key={1} style={{flex:1,alignItems:'center',backgroundColor:'rgba(0,0,0,0.6)'}}>
      <View style={{width:'85%',elevation:20,shadowColor:'#000000',padding:5,marginTop: height * 0.30,alignItems:'center',justifyContent:'center',backgroundColor:'white'}} >

      <Pressable onPress={closeDetails} style={{position:'absolute',top:10,right:10}}>
      <FontAwesomeIcon icon={faTimes} size={24} />
      </Pressable>

      <Text style={{fontSize:25,textAlign:'center',marginVertical:3}}> Details </Text>

      <View style={{width:'90%'}}>

      <View style={styles.popItem}>
      <View>
      <Text style={{fontSize:20,marginVertical:3}}> Amount: </Text>
      </View>
      <View>
      <Text style={{fontSize:22,marginVertical:3,fontWeight:'bold'}}> GHC {data.Mobile_Money_Amount}</Text>
      </View>
      </View>


      <View style={styles.popItem}>
      <View>
      <Text style={{fontSize:20,marginVertical:3}}> E-levy charge: </Text>
      </View>
      <View>
      <Text style={{fontSize:22,marginVertical:3,fontWeight:'bold'}}> GHC {data.E_Levy_Fee}</Text>
      </View>
      </View>


      <View style={styles.popItem}>
      <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
      <Text style={{fontSize:20,marginVertical:3}}> Mobile Money charge: </Text>
      </View>
      <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
      <Text style={{fontSize:22,marginVertical:3,fontWeight:'bold'}}> GHC {data.Mobile_Money_Fee}</Text>
      </View>
      </View>


      <View style={styles.popItem}>
      <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
      <Text style={{fontSize:20,marginVertical:3}}> New amount: </Text>
      </View>
      <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
      <Text style={{fontSize:22,marginVertical:3,fontWeight:'bold'}}> GHC {data.Final_Amount}</Text>
      </View>
      </View>


      </View>
      </View>
      </View>
      </Modal>) : null
    }
    {/* Show Pop up */}

    {/* Mobile Networks Dropdown */}
    {
      mob_net ? (<Modal transparent={true} animationType="fade">
      <View style={{flex:2,opacity:0.5,backgroundColor:'black',  justifyContent:'center',
          alignItems:'center',}}>
      </View>
      <View style={{flex:1,backgroundColor:'white',  justifyContent:'center',
          alignItems:'center',}}>
      <Text style={{fontSize:25,textAlign:'center',marginVertical:3}}> Mobile Network </Text>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={true}>
      <CustomDropdownButton onPress={()=>mobileNetworkSelected("1")} text="MTN" />
      <CustomDropdownButton onPress={()=>mobileNetworkSelected("2")} text="Vodafone" />
      <CustomDropdownButton onPress={()=>mobileNetworkSelected("3")} text="Airtel/Tigo" />
      </ScrollView>
      </View>
      </Modal>): null
    }
    {/* Mobile Networks Dropdown */}

    {/* Transaction Point Dropdown */}
    {
      trxn_point ? (<Modal transparent={true} animationType="fade">
      <View style={{flex:2,opacity:0.5,backgroundColor:'black',  justifyContent:'center',
          alignItems:'center',}}>
      </View>
      <View style={{flex:1,backgroundColor:'white',  justifyContent:'center',
          alignItems:'center',}}>
      <Text style={{fontSize:25,textAlign:'center',marginVertical:3}}> Transaction Point </Text>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={true}>
      <CustomDropdownButton onPress={()=>transactionPointSelected("1")} text="At Merchant / Agent" />
      <CustomDropdownButton onPress={()=>transactionPointSelected("2")} text="Mobile" />
      </ScrollView>
      </View>
      </Modal>): null
    }
    {/* Transaction Point Dropdown */}


    {/* Transaction Type Dropdown */}
    {
      trxn_type ? (<Modal transparent={true} animationType="fade">
      <View style={{flex:2,opacity:0.5,backgroundColor:'black',  justifyContent:'center',
          alignItems:'center',}}>
      </View>
      <View style={{flex:1,backgroundColor:'white',  justifyContent:'center',
          alignItems:'center',}}>
      <Text style={{fontSize:25,textAlign:'center',marginVertical:3}}> Transaction Type </Text>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={true}>
      <CustomDropdownButton onPress={()=>transactionTypeSelected("1")} text="Money Transfer" />
      <CustomDropdownButton onPress={()=>transactionTypeSelected("2")} text="Cash-out" />
      <CustomDropdownButton onPress={()=>transactionTypeSelected("3")} text="Money Transfer(P2P)" />
      <CustomDropdownButton onPress={()=>transactionTypeSelected("4")} text="Money Transfer(A2C)" />
      </ScrollView>
      </View>
      </Modal>): null
    }
    {/* Transaction Type Dropdown */}


    {/* Show Spinner */}
    {
      spinner ? (
        <CustomSpinner/>
      ):null
    }
    {/* Show Spinner */}


    </View>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
    marginTop:50
},
scrollView:{
    width:'90%'
  },
title:{
  fontSize:28,
  fontWeight:'bold',
  marginVertical:10
},
customViewContainer: {
  alignItems:'center',
  elevation: 25,
  shadowColor:'#000000'
},
logoView:{
  width: '60%',
  elevation: 20,
  shadowColor:'black',
  backgroundColor:'#3b71f3',
  borderRadius:20,
  marginBottom:10
},
  logo:{
    width: '100%',
    maxWidth:300,
    height: 100,
  },
  popItem:{
    padding: 2,
    marginVertical: 10,
    borderLeftWidth:3,
    borderColor:'#3b71f3'
  }
});

export default App;
