import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Footer from '../../../Utils/Footer/Footer';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const ProfileDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.profileText}>Profile</Text>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.profilePicContainer}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            }}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} value="Sivakumar" editable={false} />

          <Text style={styles.label}>Mobile</Text>
          <View style={styles.row}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              value="9150203344"
              editable={false}
            />
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeText}>CHANGE</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Email</Text>
          <View style={styles.row}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Email"
              editable={false}
            />
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeText}>CHANGE</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>Date of birth</Text>
          <TextInput
            style={styles.input}
            placeholder="Date of birth"
            editable={false}
          />

          <TouchableOpacity style={styles.updateButton} disabled={true}>
            <Text style={styles.updateButtonText}>Update profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer />
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  header: {
    height: hp('8%'),
    marginHorizontal:wp("3"),
    marginTop:hp("4"),
    flexDirection:'row',
    gap:wp("3")
  },
  profileText: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
  },
  profileCard: {
    backgroundColor: '#fff',
    marginHorizontal: wp('5%'),
    marginTop: hp('5%'),
    borderRadius: 20,
    paddingTop: hp('8%'),
    paddingBottom: hp('4%'),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // for android
    position: 'relative',
  },
  profilePicContainer: {
    position: 'absolute',
    top: -hp('6%'),
    backgroundColor: '#fff',
    borderRadius: 100,
    padding: 5,
  },
  profileImage: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: wp('10%'),
  },
  formContainer: {
    width: '90%',
    marginTop: hp('2%'),
  },
  label: {
    fontSize: wp('3.5%'),
    color: '#777',
    marginTop: hp('2%'),
    marginBottom: hp('0.5%'),
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: hp('1%'),
    fontSize: wp('4%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeButton: {
    marginLeft: wp('2%'),
  },
  changeText: {
    color: '#3366FF',
    fontWeight: 'bold',
    fontSize: wp('3.5%'),
  },
  updateButton: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    paddingVertical: hp('1.8%'),
    alignItems: 'center',
    marginTop: hp('4%'),
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
});
