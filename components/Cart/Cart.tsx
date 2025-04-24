import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Footer from '../../Utils/Footer/Footer';
const Cart = () => {
    const products = [
        {
          id: 1,
          title: 'Wheat straw',
          weight: '20 kg – Bag',
          price: '12 QAR',
          quantity: 20,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Vehn%C3%A4pelto_6.jpg/960px-Vehn%C3%A4pelto_6.jpg',
        },
        {
          id: 2,
          title: 'Barley Hay',
          weight: '15 kg – Bale',
          price: '18 QAR',
          quantity: 12,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Barley.jpg/800px-Barley.jpg',
        },
        {
          id: 3,
          title: 'Alfalfa',
          weight: '25 kg – Bale',
          price: '25 QAR',
          quantity: 10,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Lucerne_in_seed.jpg/800px-Lucerne_in_seed.jpg',
        },
        {
          id: 4,
          title: 'Corn Silage',
          weight: '50 kg – Bag',
          price: '30 QAR',
          quantity: 5,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Corn_field.jpg/800px-Corn_field.jpg',
        },
        {
          id: 5,
          title: 'Rice Straw',
          weight: '10 kg – Bundle',
          price: '10 QAR',
          quantity: 8,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Rice_straw_bundles.jpg/800px-Rice_straw_bundles.jpg',
        },
      ];
    
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="chevron-back" size={24} />
          <Text style={styles.headerTitle}>Your order</Text>
        </View>

        {/* Address */}
        <TouchableOpacity style={styles.addressRow}>
          <Ionicons name="location-sharp" size={18} color="#3B82F6" />
          <Text style={styles.addressText}>Abu Nakhlah, Qatar...</Text>
          <Ionicons name="chevron-down" size={18} color="#3B82F6" />
        </TouchableOpacity>
        <View style={styles.datacontainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: hp("20%") }}
          >
            {products.map((item) => (
              <View style={styles.card}>
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Vehn%C3%A4pelto_6.jpg/960px-Vehn%C3%A4pelto_6.jpg",
                  }}
                  style={styles.productImage}
                />
                <View style={styles.productInfo}>
                  <Text style={styles.productTitle}>Wheat straw</Text>
                  <Text style={styles.productWeight}>20 kg – Bag</Text>
                  <Text style={styles.productPrice}>12 QAR</Text>
                  <View style={styles.quantityRow}>
                    <Ionicons name="remove-circle-outline" size={22} />
                    <Text style={styles.quantityText}>20</Text>
                    <Ionicons name="add-circle-outline" size={22} />
                    <Ionicons
                      name="trash"
                      size={22}
                      color="red"
                      style={styles.trashIcon}
                    />
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Check out</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: wp("4%"),
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("1.5%"),
    marginTop:hp('4%')

  },
  headerTitle: {
    fontSize: wp("5%"),
    fontWeight: "600",
    marginLeft: wp("2%"),
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F5F9",
    borderRadius: 8,
    padding: wp("3%"),
    marginBottom: hp("2%"),
  },
  addressText: {
    marginHorizontal: wp("2%"),
    color: "#3B82F6",
    fontWeight: "500",
    flex: 1,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#F9FAFB",
    borderRadius: 16,
    padding: wp("3%"),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: hp("2%"),
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: wp("3%"),
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: wp("4%"),
    fontWeight: "600",
  },
  productWeight: {
    color: "#6B7280",
    fontSize: wp("3.5%"),
  },
  productPrice: {
    fontSize: wp("4%"),
    fontWeight: "bold",
    marginTop: hp("0.5%"),
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("1%"),
  },
  quantityText: {
    marginHorizontal: wp("2.5%"),
    fontSize: wp("4%"),
    fontWeight: "500",
  },
  trashIcon: {
    marginLeft: wp("4%"),
  },
  checkoutBtn: {
    backgroundColor: "#1D4ED8",
    paddingVertical: hp("1.8%"),
    borderRadius: 10,
    alignItems: "center",
    position: "absolute",
    bottom: hp("3%"),
    left: wp("4%"),
    right: wp("4%"),
    marginBottom: hp("8%"),
  },
  checkoutText: {
    color: "#fff",
    fontSize: wp("4.2%"),
    fontWeight: "bold",
  },
  datacontainer:{
    height:hp('65%')
  }
});
