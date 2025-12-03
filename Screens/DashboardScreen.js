import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView 
} from 'react-native';

export default function DashboardScreen({ navigation }) {
  const signals = [
    { pair: "EURUSD", signal: "BUY", strength: "Strong", time: "Now" },
    { pair: "BTCUSD", signal: "SELL", strength: "Medium", time: "1 min ago" },
    { pair: "XAUUSD", signal: "BUY", strength: "Strong", time: "3 min ago" },
    { pair: "USDJPY", signal: "SELL", strength: "Weak", time: "5 min ago" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>ULTRA ALGO SIGNALS</Text>

      {signals.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.pair}>{item.pair}</Text>
          <Text style={[
              styles.signal, 
              item.signal === "BUY" ? styles.buy : styles.sell
            ]}
          >
            {item.signal}
          </Text>
          <Text style={styles.strength}>{item.strength}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      ))}

      <View style={{ marginTop: 30 }}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button2} 
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.buttonText2}>Profile</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0a0f24",
    padding: 20,
  },
  title: {
    color: "#00d4ff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#131b3a",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  pair: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  signal: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 5,
  },
  buy: { color: "#00ff9d" },
  sell: { color: "#ff4f4f" },
  strength: {
    color: "#aaa",
    fontSize: 16,
    marginTop: 3,
  },
  time: {
    color: "#777",
    fontSize: 14,
    marginTop: 2,
  },
  button: {
    backgroundColor: "#00d4ff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  button2: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonText2: {
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  }
});
