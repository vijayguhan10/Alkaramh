import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";
const CombinedProductPage = () => {
  const categories = ["All", "Feed", "Protein", "Salts"];
  const filters = ["Previously Ordered", "Rating 4.0+"];
  const products = [
    { name: "Wheat Straw", rating: "4.7★", price: "QAR 12" },
    { name: "Wheat Straw", rating: "4.7★", price: "QAR 12" },
    { name: "Wheat Straw", rating: "4", price: "QAR 12" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Filter Section */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterTitle}>Filters ▼</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterItems}
        >
          {filters.map((filter, index) => (
            <TouchableOpacity key={index} style={styles.filterItem}>
              <Text style={styles.filterText}>{filter}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.starter}>
        <Text style={{ fontWeight: "700" }}>Recomended Products</Text>
        <Text style={{ color: "blue" }}>See All</Text>
      </View>{" "}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.productsContainer}
      >
        {products.map((product, index) => (
          <View key={index} style={styles.productCard}>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>{product.rating}</Text>
            </View>
            <View style={styles.productImage}>
              <Text style={styles.imagePlaceholder}>Image</Text>
            </View>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </ScrollView>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  filterTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
    color: "#333",
  },
  filterItems: {
    flexDirection: "row",
  },
  filterItem: {
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
  },
  filterText: {
    fontSize: 12,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  productsContainer: {
    marginBottom: 10,
  },
  productCard: {
    width: 120,
    marginRight: 15,
  },
   starter: {
      marginTop: hp("1.5%"),
      flexDirection: "row",
      justifyContent: "space-between",
    },
  ratingContainer: {
    position: "relative",
    top: 120,
    zIndex: 7,
    backgroundColor: "#f5f5f5",
    padding: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginBottom: 5,
    marginLeft: 6,
  },
  ratingText: {
    fontSize: 12,
    color: "#333",
  },
  productImage: {
    width: 120,
    height: 120,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  imagePlaceholder: {
    color: "#888",
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  productPrice: {
    fontSize: 14,
    color: "#333",
  },
  seeAllButton: {
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  seeAllText: {
    fontSize: 14,
    color: "#007bff",
  },
  spotlightTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
});

export default CombinedProductPage;
