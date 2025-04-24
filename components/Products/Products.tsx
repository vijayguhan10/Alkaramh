import React,{useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView, FlatList, Image } from 'react-native';
import Footer from '../../Utils/Footer/Footer';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

const Products = () => {
    const [selectedTab, setSelectedTab] =useState<string>("All products");
  const productData = [
    {
      id: '1',
      name: 'Wheat straw',
      price: '12 QAR',
      rating: 4.5,
      reviews: '1.24K',
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Vehn%C3%A4pelto_6.jpg/960px-Vehn%C3%A4pelto_6.jpg", // Replace with actual image path
    },
    {
      id: '2',
      name: 'Wheat straw',
      price: '12 QAR',
      rating: 4.5,
      reviews: '1.24K',
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Vehn%C3%A4pelto_6.jpg/960px-Vehn%C3%A4pelto_6.jpg", // Replace with actual image path
    },
    {
      id: '3',
      name: 'Wheat straw',
      price: '12 QAR',
      rating: 4.5,
      reviews: '1.24K',
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Vehn%C3%A4pelto_6.jpg/960px-Vehn%C3%A4pelto_6.jpg", // Replace with actual image path
    },
    {
      id: '4',
      name: 'Wheat straw',
      price: '12 QAR',
      rating: 4.5,
      reviews: '1.24K',
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Vehn%C3%A4pelto_6.jpg/960px-Vehn%C3%A4pelto_6.jpg", // Replace with actual image path
    },
    {
      id: '5',
      name: 'Wheat straw',
      price: '12 QAR',
      rating: 4.5,
      reviews: '1.24K',
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Vehn%C3%A4pelto_6.jpg/960px-Vehn%C3%A4pelto_6.jpg", // Replace with actual image path
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: hp("10%") }}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Al Karamh Trading</Text>
          <View style={styles.ratingBox}>
            <Text style={styles.ratingText}>4.8 ★</Text>
          </View>
        </View>

        <Text style={styles.subtext}>120 - 150 mins</Text>

        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Text>Last 100 Orders Without Complaints</Text>
          </View>
          <View style={styles.badge}>
            <Text>Bestseller</Text>
          </View>
          <View style={styles.badge}>
            <Text>Frequently Reordered</Text>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="gray" />
          <TextInput
            placeholder="Search products here..."
            style={styles.searchInput}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabsContainer}
        >
          {[
            "All products",
            "Aala Feed",
            "Alfalfa",
            "Corn",
            "Date",
            "all is well",
            "good",
          ].map((tab, index) => (
            <Text
              key={index}
              onPress={() => setSelectedTab(tab)}
              style={[styles.tab, selectedTab === tab && styles.activeTab]}
            >
              {tab}
            </Text>
          ))}
        </ScrollView>

        <View style={styles.productList}>
          <Text style={styles.selectedTabText}>
            <Text style={{ fontWeight: "bold" }}>{selectedTab}</Text>
          </Text>

          {productData.map((item) => (
            <View key={item.id} style={styles.productCard}>
              <View style={styles.imageContainer}>
                <Image src={item.image} style={styles.productImage} />
                <Ionicons name="heart" size={20} style={styles.heart} />
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productRating}>★★★★☆ ({item.reviews})</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <Text style={styles.productDesc}>
                  Al Karamh is renowned for its high-quality products.
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("3%"),
    marginHorizontal: wp("3%"),
  },
  selectedTabText: {
    fontSize: 20,

    marginBottom: hp("2%"),
    color: "#333",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
    marginLeft: wp("1%"),
  },
  ratingBox: {
    backgroundColor: "#2ECC71",
    borderRadius: 5,
    padding: 5,
  },
  ratingText: {
    color: "white",
    fontWeight: "bold",
  },
  subtext: {
    marginLeft: wp("5%"),
    color: "gray",
    marginTop: hp("0.5%"),
  },
  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: wp("5%"),
  },
  badge: {
    backgroundColor: "#F1F1F1",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 8,
  },
  badgeText: {
    fontSize: 12,
    color: "#333",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
    marginHorizontal: wp("5%"),
    padding: 5,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  tabsContainer: {
    marginVertical: hp("2%"),
    paddingHorizontal: wp("5%"),
    paddingTop: hp("1%"),
    paddingBottom: hp("2%"),
    backgroundColor: "#ffffffd8",
    width: wp("94%"),
  },
  tab: {
    marginRight: 20,
    color: "#555",
  },
  activeTab: {
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderColor: "#007bff",
    paddingBottom: 2,
  },
  productList: {
    paddingHorizontal: wp("5%"),
  },
  productCard: {
    flexDirection: "row",
    marginBottom: hp("2%"),
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 1,
    padding: 10,
  },
  productImage: {
    width: 80,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  imageContainer: {
    position: "relative",
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  productRating: {
    fontSize: 12,
    color: "#555",
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 2,
  },
  productDesc: {
    fontSize: 12,
    color: "#666",
  },
  heart: {
    position: "absolute",
    top: hp("1.1%"),
    right: wp("6%"),
    zIndex: 1,
  },
});
