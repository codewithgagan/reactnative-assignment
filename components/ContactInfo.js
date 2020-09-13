import React from "react";
import { StyleSheet, View, Text } from "react-native";

function ContactInfo({ style, country, phone, email }) {
  return (
    <View style={style}>
      <Text style={styles.country}>{country}</Text>
      <Text style={styles.phone}>Phone: {phone}</Text>
      <Text style={styles.phone}>Email: {email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  country: {
    fontSize: 20,
  },
  phone: {
    color: "white",
  },
});

export default ContactInfo;
