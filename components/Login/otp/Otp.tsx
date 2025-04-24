import React, { useState } from 'react';
import { View, StyleSheet, Text,TextInput } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Otp = () => {
    const [otp,setotp]=useState<string[]>(['','','','']);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.firsttext}>Please check your Email or phone</Text>
        <Text style={styles.secondtext}>
          We have send the code to +91XXXXXX3344
        </Text>
        <View style={styles.otpfield}>
          {otp.map((value, index) => (
            <TextInput style={styles.otpbox}></TextInput>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'),
    // alignItems:'center',

  },
  textContainer: {
    gap:hp("2%"),
    marginTop:hp("5%")
  },  firsttext: {
    fontSize: wp('5.5%'),
    fontWeight: 'bold',
    color: '#030518',
  },
  secondtext: {
    fontSize: wp('4%'),
    color: '#555',
  },
  otpfield:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
    
  },
  otpbox:{
    width:wp('12%'),
    borderWidth: 1,
    borderColor: '#999',
    textAlign: 'center',
    fontSize: wp('5%'),
    borderRadius: wp('2%'),

  }
});
