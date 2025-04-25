import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type Variant = "10kg" | "20kg" | "30kg";

type Quantity = 10 | 20 | 30 | 40;

const ProductDetails: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<Variant>("10kg");
  const [selectedQuantity, setSelectedQuantity] = useState<Quantity | null>(
    null
  );
  const [customQuantity, setCustomQuantity] = useState<string>("");

  return (
    <ScrollView style={styles.container}>
      {/* Product Image */}
      <Image
        source={{ uri: "https://5.imimg.com/data5/SELLER/Default/2023/3/295208831/IJ/UB/KV/184869052/sorghum-red-png-500x500.png" }} // Replace with your real image link
        style={styles.productImage}
        resizeMode="contain"
      />

      {/* Product Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Wheat Straw - 6kg</Text>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={wp("6%")} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Rating */}
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={wp("4.5%")} color="#f5c518" />
        <Text style={styles.ratingText}>4.5</Text>
        <Text style={styles.reviewText}>(1.24K Reviews)</Text>
      </View>

      {/* Price */}
      <Text style={styles.priceText}>12 QAR</Text>

      {/* Variants */}
      <View style={styles.variantsContainer}>
        <TouchableOpacity
          style={[
            styles.variantButton,
            selectedVariant === "10kg" && styles.variantSelected,
          ]}
          onPress={() => setSelectedVariant("10kg")}
        >
          <Text style={styles.variantText}>10 kg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.variantButtonDisabled]}>
          <Text style={styles.variantTextDisabled}>20 kg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.variantButtonDisabled]}>
          <Text style={styles.variantTextDisabled}>30 kg</Text>
        </TouchableOpacity>
      </View>

      {/* Description */}
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.descriptionText}>
        Al Karamh is renowned for its high-quality products. This product
        showcases their dedication to excellence. Customers trust Al Karamh for
        reliable and superior goods.
      </Text>

      {/* Choose Quantity */}
      <Text style={styles.sectionTitle}>Choose Quantity</Text>
      <View style={styles.quantityContainer}>
        {[10, 20, 30, 40].map((qty) => (
          <TouchableOpacity
            key={qty}
            style={[
              styles.quantityButton,
              selectedQuantity === qty && styles.quantitySelected,
            ]}
            onPress={() => setSelectedQuantity(qty as Quantity)}
          >
            <Text style={styles.quantityText}>{qty}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Custom Quantity */}
      <TextInput
        placeholder="Custom"
        keyboardType="numeric"
        value={customQuantity}
        onChangeText={(text) => setCustomQuantity(text)}
        style={styles.customInput}
      />

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: wp("5%"),
  },
  productImage: {
    width: "100%",
    height: hp("30%"),
    marginBottom: hp("2%"),
    borderRadius: wp("2%"),
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: wp("5%"),
    fontWeight: "bold",
    color: "#333",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("1%"),
  },
  ratingText: {
    marginLeft: wp("1%"),
    fontSize: wp("4%"),
    fontWeight: "600",
    color: "#333",
  },
  reviewText: {
    marginLeft: wp("2%"),
    fontSize: wp("3.5%"),
    color: "#777",
  },
  priceText: {
    marginTop: hp("1%"),
    fontSize: wp("5%"),
    fontWeight: "bold",
    color: "#373fd4",
  },
  variantsContainer: {
    flexDirection: "row",
    marginTop: hp("2%"),
    gap: wp("2%"),
  },
  variantButton: {
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("5%"),
    backgroundColor: "#f0f0f0",
    borderRadius: wp("2%"),
  },
  variantSelected: {
    backgroundColor: "#373fd4",
  },
  variantText: {
    fontSize: wp("4%"),
    color: "#333",
  },
  variantButtonDisabled: {
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("5%"),
    backgroundColor: "#e0e0e0",
    borderRadius: wp("2%"),
  },
  variantTextDisabled: {
    fontSize: wp("4%"),
    color: "#aaa",
  },
  sectionTitle: {
    marginTop: hp("3%"),
    fontSize: wp("4.5%"),
    fontWeight: "bold",
    color: "#333",
  },
  descriptionText: {
    marginTop: hp("1%"),
    fontSize: wp("3.8%"),
    color: "#666",
  },
  quantityContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: hp("2%"),
    gap: wp("2%"),
  },
  quantityButton: {
    width: wp("15%"),
    height: hp("5%"),
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: wp("2%"),
    alignItems: "center",
    justifyContent: "center",
  },
  quantitySelected: {
    backgroundColor: "#373fd4",
    borderColor: "#373fd4",
  },
  quantityText: {
    fontSize: wp("4%"),
    color: "#333",
  },
  customInput: {
    marginTop: hp("2%"),
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: wp("2%"),
    padding: wp("3%"),
    fontSize: wp("4%"),
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp("4%"),
  },
  addToCartButton: {
    flex: 1,
    marginRight: wp("2%"),
    backgroundColor: "#fff",
    borderColor: "#373fd4",
    borderWidth: 1,
    paddingVertical: hp("1.5%"),
    borderRadius: wp("2%"),
    alignItems: "center",
  },
  buyNowButton: {
    flex: 1,
    marginLeft: wp("2%"),
    backgroundColor: "#373fd4",
    paddingVertical: hp("1.5%"),
    borderRadius: wp("2%"),
    alignItems: "center",
  },
  buttonText: {
    fontSize: wp("4%"),
    fontWeight: "bold",
    color: "#000000",
  },
});
