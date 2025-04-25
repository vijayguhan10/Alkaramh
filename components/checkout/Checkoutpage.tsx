import React,{useState} from "react";
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity,Modal} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const Checkoutpage = () => {
    const[selectedoption,setselectedoption]=useState<number>(0)
    const handleselectpaymentmethod=(index:number):void=>{
   setselectedoption(index);
    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={wp("6%")} />
        <Text style={styles.headerText}>Checkout</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pay with</Text>

        <TouchableOpacity
          style={styles.option}
          onPress={() => handleselectpaymentmethod(1)}
        >
          <Text style={styles.optionText}>💳 Debit Card</Text>
          <Ionicons
            name={selectedoption === 1 ? "radio-button-on" : "radio-button-off"}
            size={wp("5.5%")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => handleselectpaymentmethod(2)}
        >
          <Text style={styles.optionText}>💳 Credit Card</Text>
          <Ionicons
            name={selectedoption === 2 ? "radio-button-on" : "radio-button-off"}
            size={wp("5.5%")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => handleselectpaymentmethod(3)}
        >
          <Text style={styles.optionText}>💵 Cash on delivery</Text>
          <Ionicons
            name={selectedoption === 3 ? "radio-button-on" : "radio-button-off"}
            size={wp("5.5%")}
            color="#2A3B8F"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Price details</Text>
        <View style={styles.row}>
          <Text>Basket Total</Text>
          <Text>24 QAR</Text>
        </View>
        <View style={styles.row}>
          <Text>Delivery Fee</Text>
          <Text>50 QAR</Text>
        </View>
        <View style={[styles.row, styles.totalRow]}>
          <Text>Total amount</Text>
          <Text>74 QAR</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Place Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Checkoutpage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp("4%"),
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("2%"),
    marginTop: hp("4%"),
    gap: wp("2.5%")
  },
  headerText: {
    fontSize: wp("5%"),
    fontWeight: "600",
  },
  section: {
    backgroundColor: "#F8F8FA",
    borderRadius: wp("2.5%"),
    padding: wp("6%"),
    marginVertical: hp("1.5%"),
  },
  sectionTitle: {
    color: "#2A3B8F",
    fontWeight: "600",
    marginBottom: hp("1.5%"),
    fontSize: wp("4.2%"),
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: hp("2.4%"),
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  optionText: {
    fontSize: wp("4%"),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: hp("2%"),
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: "#EAEAEA",
    marginTop: hp("1%"),
    paddingTop: hp("1.2%"),
  },
  button: {
    backgroundColor: "#2A3B8F",
    paddingVertical: hp("2%"),
    borderRadius: wp("3%"),
    alignItems: "center",
    marginTop: "auto",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: wp("4.3%"),
  },
});
