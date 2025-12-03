import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Switch, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';

export default function SettingsScreen({ navigation }) {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Notifications</Text>
        <Switch 
          value={notifications}
          onValueChange={() => setNotifications(!notifications)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch 
          value={darkMode}
          onValueChange={() => setDarkMode(!darkMode)}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Contact Support</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.logoutText}>Logout</Text>
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
  section: {
    backgroundColor: "#131b3a",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#00d4ff",
    padding: 15,
    borderRadius: 12,
    marginTop: 25,
  },
  buttonText: {
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: "#ff4f4f",
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
  },
  logoutText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  }
});
