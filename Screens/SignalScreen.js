import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView 
} from 'react-native';

export default function SignalScreen() {
  const signalData = [
    {
      pair: "EURUSD",
      direction: "BUY",
      entry: "1.0835",
      tp: "1.0890",
      sl: "1.0795",
      strength: "Strong Trend Up",
      time: "Updated 20 sec ago"
    },
    {
      pair: "XAUUSD",
      direction: "SELL",
      entry: "2315.20",
      tp: "2298.00",
      sl: "2328.50",
      strength: "Medium Downtrend",
      time: "Updated 55 sec ago"
    },
    {
      pair: "GBPJPY",
      direction: "BUY",
      entry: "190.450",
      tp: "191.300",
      sl: "189.800",
      strength: "Weak Uptrend",
      time: "Updated 2 min ago"
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Detailed Signals</Text>

      {signalData.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.pair}>{item.pair}</Text>

          <Text style={[
            styles.direction,
            item.direction === "BUY" ? styles.buy : styles.sell
          ]}>
            {item.direction}
          </Text>

          <Text style={styles.label}>Entry: <Text style={styles.value}>{item.entry}</Text></Text>
          <Text style={styles.label}>Take Profit: <Text style={styles.value}>{item.tp}</Text></Text>
          <Text style={styles.label}>Stop Loss: <Text style={styles.value}>{item.sl}</Text></Text>

          <Text style={styles.strength}>{item.strength}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      ))}
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
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#131b3a",
    padding: 22,
    borderRadius: 15,
    marginBottom: 18,
  },
  pair: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  direction: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  buy: { color: "#00ff9d" },
  sell: { color: "#ff4f4f" },
  label: {
    color: "#aaa",
    fontSize: 16,
    marginTop: 10,
  },
  value: {
    color: "#fff",
    fontWeight: "bold",
  },
  strength: {
    marginTop: 12,
    color: "#00d4ff",
    fontWeight: "500",
    fontSize: 15,
  },
  time: {
    marginTop: 6,
    color: "#777",
    fontSize: 13,
  },
});
