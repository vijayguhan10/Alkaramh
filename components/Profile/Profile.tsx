import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Footer from '../../Utils/Footer/Footer';
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
  const navigation:any=useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.firsthalf}>
          <View style={styles.firsthalfinner}>
            <View style={styles.profilepic}></View>
            <View style={styles.profiledetail}>
              <Text style={styles.name}>Sivakumar S</Text>
              <Text style={styles.email}>Not updated</Text>
            </View>
          </View>
        </View>

        <View style={styles.secondhalf}>
  <Text style={styles.sectionTitle}>Account Settings</Text>

  <ListItem
    icon="person-outline"
    label="Personal Information"
    onPress={() => navigation.navigate('Profiledetails')}
  />
  <ListItem
    icon="notifications-outline"
    label="Notification Preferences"
    onPress={() => navigation.navigate('NotificationPreferences')}
  />

  <Text style={styles.sectionTitle}>Orders</Text>
  <ListItem
    icon="cube-outline"
    label="Your orders"
    onPress={() => navigation.navigate('Orders')}
  />
  <ListItem
    icon="heart-outline"
    label="Wishlist"
    onPress={() => navigation.navigate('Wishlist')}
  />
  <ListItem
    icon="map-outline"
    label="Address book"
    onPress={() => navigation.navigate('AddressBook')}
  />

  <Text style={styles.sectionTitle}>More</Text>
  <ListItem
    icon="information-circle-outline"
    label="About"
    onPress={() => navigation.navigate('About')}
  />
  <ListItem
    icon="sync-outline"
    label="Check app updates"
    onPress={() => navigation.navigate('CheckUpdates')}
  />
  <ListItem
    icon="help-circle-outline"
    label="Help"
    onPress={() => navigation.navigate('Help')}
  />
  <ListItem
    icon="settings-outline"
    label="Settings"
    onPress={() => navigation.navigate('Settings')}
  />
</View>

      </ScrollView>
      <Footer />
    </View>
  );
};

interface ListItemProps {
  icon: string;
  label: string;
  onPress?:()=>void;
}

const ListItem: React.FC<ListItemProps> = ({ icon, label,onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Icon name={icon} type="ionicon" size={22} color="#283593" />
    <Text style={styles.itemText}>{label}</Text>
    <Icon name="chevron-forward-outline" type="ionicon" size={22} color="#999" />
  </TouchableOpacity>
);

export default Profile;
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firsthalf: {
    height: hp("25%"),
    backgroundColor: "rgba(40, 53, 147, 1)",
    justifyContent: "center",
    paddingHorizontal: wp("5%"),
  },
  firsthalfinner: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilepic: {
    width: wp("18%"),
    height: wp("18%"),
    borderRadius: wp("9%"),
    backgroundColor: "#ccc",
    marginRight: wp("5%"),
  },
  profiledetail: {
    flex: 1,
  },
  name: {
    fontSize: wp("5%"),
    fontWeight: "bold",
    color: "#fff",
  },
  email: {
    fontSize: wp("3.8%"),
    color: "#d1d1f7",
  },
  secondhalf: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    borderTopLeftRadius: wp("8%"),
    borderTopRightRadius: wp("8%"),
    paddingTop: hp("3%"),
    paddingHorizontal: wp("5%"),
    marginTop: -hp("3%"),
  },
  sectionTitle: {
    marginTop: hp("2%"),
    marginBottom: hp("1%"),
    fontSize: hp("2%"),
    fontWeight: "600",
    color: "#333",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp("1.5%"),
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  itemText: {
    flex: 1,
    marginLeft: wp("4%"),
    fontSize: hp("2%"),
    color: "#222",
  },
  scrollContent: {
    paddingBottom: hp('10%'), 
  },
});
