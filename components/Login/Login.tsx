import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const MobileLoginScreen = () => {
    const navigation:any=useNavigation();
  const [phone, setPhone] = useState<string>("");
  const handlecontinue = (): void => {
    navigation.navigate("otp");
}

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>
          Let’s start with your{"\n"}mobile number
        </Text>

        <View style={styles.inputRow}>
          <View style={styles.codeBox}>
            <Text style={styles.codeText}>+974</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={(text: string) => setPhone(text)}
          />
        </View>

        <Text style={styles.subtext}>We will send you a text message</Text>

        <Button
          mode="contained"
          style={styles.continueButton}
          labelStyle={styles.continueText}
          onPress={handlecontinue}
        >
          Continue
        </Button>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>Continue with Apple</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          By continuing, you automatically accept our{"\n"}
          <Text style={{ fontWeight: "bold" }}>Terms & Conditions</Text>,{" "}
          <Text style={{ fontWeight: "bold" }}>Privacy Policy</Text>, and{" "}
          <Text style={{ fontWeight: "bold" }}>Cookies Policy</Text>.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MobileLoginScreen;
const styles = StyleSheet.create({
    safeContainer: {
      flex: 1,
      backgroundColor: "#fff",
    },
    scrollContainer: {
      paddingHorizontal: wp("5%"),
      paddingVertical: hp("4%"),
    },
    title: {
      fontSize: wp("6.5%"),
      fontWeight: "700",
      color: "#1A237E",
      marginBottom: hp("5%"),
    },
    inputRow: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#f9f9f9",
      borderRadius: wp("2%"),
      paddingHorizontal: wp("3%"),
      borderColor: "#ddd",
      borderWidth: 1,
      marginBottom: hp("1%"),
    },
    codeBox: {
      paddingRight: wp("2%"),
      borderRightWidth: 1,
      borderColor: "#ccc",
    },
    codeText: {
      fontSize: wp("4.2%"),
      color: "#1A237E",
    },
    input: {
      flex: 1,
      paddingHorizontal: wp("3%"),
      paddingVertical: hp("1.8%"),
      fontSize: wp("4%"),
      color: "#000",
    },
    subtext: {
      fontSize: wp("3.5%"),
      color: "#666",
      marginVertical: hp("1.5%"),
    },
    continueButton: {
      backgroundColor: "#303F9F",
      borderRadius: wp("2%"),
      paddingVertical: hp("1.2%"),
      marginTop: hp("2%"),
    },
    continueText: {
      fontSize: wp("4%"),
      color: "#fff",
    },
    orContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: hp("4%"),
    },
    orText: {
      marginHorizontal: wp("3%"),
      color: "#999",
      fontSize: wp("3.5%"),
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: "#ddd",
    },
    socialButton: {
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: wp("2%"),
      paddingVertical: hp("1.5%"),
      paddingHorizontal: wp("4%"),
      alignItems: "center",
      marginBottom: hp("2%"),
    },
    socialText: {
      fontSize: wp("4%"),
      color: "#333",
    },
    footer: {
      fontSize: wp("3%"),
      color: "#777",
      textAlign: "center",
      marginTop: hp("6%"),
      lineHeight: hp("2.8%"),
    },
  });
  