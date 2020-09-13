import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ContactInfo from "../components/ContactInfo";

// This function will create a contact us page used in drawer navigation
// In this we are passing props in ContactInfo like style for CSS, country where office is, phone number and email ID of that office
function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact Us</Text>
      <ContactInfo
        style={styles.contactInfo}
        country="India"
        phone="+91 1234567890"
        email="test123@test.com"
      />
      <ContactInfo
        style={styles.contactInfo}
        country="USA"
        phone="+1 1234567890"
        email="example@example.com"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  container: {
    backgroundColor: "#0ba4f4",
  },
  contactInfo: {
    padding: 20,
    margin: 10,
  },
});

export default Contact;
