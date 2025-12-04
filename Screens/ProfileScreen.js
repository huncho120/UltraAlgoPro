import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';

export default function ProfileScreen() {
  const user = {
    name: "Ultra Algo User",
    email: "user@example.com",
    plan: "Basic Plan",
    lastLogin: "Today at 14:22",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user.name}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email}</Text>

        <Text style={styles.label}>Account Type</Text>
        <Text style={styles.plan}>{user.plan}</Text>

        <Text style={styles.label}>Last Login</Text>
        <Text style={styles.value}>{user.lastLogin}</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Upgrade to Pro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0a0f24",
    flex: 1,
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
    padding: 25,
    borderRadius: 15,
    marginBottom: 25,
  },
  label: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 10,
  },
  value: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  plan: {
    color: "#00ff9d",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 3,
  },
  button: {
    backgroundColor: "#00d4ff",
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  }
});
