
import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Today = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the Today screen</Text>
      <Button title="Go to Profile Page" 
      onPress={() => navigation.navigate("Profile")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Today;
