import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { HealthPermission } from "react-native-health";
import AppleHealthPermissions, {
  IAppleHealthPermissionsProps,
} from "./components/AppleHealthPermissions";
import HealthSync from "./components/HealthSync";

export default function App() {
  const [permissionsGranted, setPermissionsGranted] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {permissionsGranted ? (
        <HealthSync />
      ) : (
        <AppleHealthPermissions setPermissionsGranted={setPermissionsGranted} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
  },
});
