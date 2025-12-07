import app from "./firebaseInit";
import { loginUser, registerUser } from "./firebaseServices";import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [screen, setScreen] = useState("login");

  // LOGIN SCREEN
  if (screen === "login") {
    return (
      <LinearGradient colors={["#000428", "#004e92"]} style={styles.container}>
        <Text style={styles.title}>Ultra Algo Pro</Text>

        <TextInput placeholder="Email" placeholderTextColor="#ccc" style={styles.input} />
        <TextInput placeholder="Password" placeholderTextColor="#ccc" secureTextEntry style={styles.input} />

        <TouchableOpacity style={styles.button} onPress={() => setScreen("home")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  // HOME DASHBOARD
  return (
    <LinearGradient colors={["#000428", "#004e92"]} style={styles.container}>
      <Text style={styles.homeTitle}>Dashboard</Text>

      <ScrollView style={{ width: "100%" }}>
        <TouchableOpacity style={styles.card} onPress={() => setScreen("signals")}>
          <Text style={styles.cardText}>📈 Trading Signals</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => setScreen("bot")}>
          <Text style={styles.cardText}>🤖 Auto Trading Bot</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => setScreen("copy")}>
          <Text style={styles.cardText}>👥 Copy Trading</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.logout} onPress={() => setScreen("login")}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  title: { fontSize: 40, color: "white", fontWeight: "bold", marginBottom: 30 },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: "white"
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#00aaff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
  homeTitle: { fontSize: 32, color: "white", marginBottom: 20 },
  card: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 25,
    borderRadius: 15,
    marginBottom: 15
  },
  cardText: { color: "white", fontSize: 20 },
  logout: { marginTop: 20 },
  logoutText: { color: "white" }
});
