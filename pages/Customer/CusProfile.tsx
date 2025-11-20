import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';

const CusProfileScreen = ({ navigation }: { navigation: any }) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleGetLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  return (
    <View style={{ flex: 1 }}>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Coffee Pickup</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Feather name="settings" size={24} color="black" />
          <Text style={styles.sectionTitle}>Settings</Text>
        </View>
        <View style={styles.setting}>
          <View>
            <Text style={styles.name}>Alex Johnson</Text>
            <Text style={styles.role}>Role: Customer</Text>
          </View>
          <Text style={styles.signedIn}>Signed in</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Feather name="shield" size={24} color="black" />
          <Text style={styles.sectionTitle}>Account & Security</Text>
        </View>
        <TouchableOpacity style={styles.row}>
          <View>
            <Text style={styles.rowTitle}>Email</Text>
            <Text style={styles.rowSubtitle}>alex@coffeepickup.app</Text>
          </View>
          <Feather name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <View>
            <Text style={styles.rowTitle}>Change Password</Text>
            <Text style={styles.rowSubtitle}>Last updated 3 mo ago</Text>
          </View>
          <Feather name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={handleGetLocation}>
            <View>
              <Text style={styles.rowTitle}>Get Location</Text>
              {location && (
                <Text style={styles.rowSubtitle}>
                  Lat: {location.coords.latitude}, Long: {location.coords.longitude}
                </Text>
              )}
              {errorMsg && <Text style={styles.rowSubtitle}>{errorMsg}</Text>}
            </View>
            <Feather name="chevron-right" size={24} color="gray" />
          </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Feather name="bell" size={24} color="black" />
          <Text style={styles.sectionTitle}>Notifications</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Feather name="info" size={24} color="black" />
          <Text style={styles.sectionTitle}>About</Text>
        </View>
        <Text style={styles.aboutText}>Coffee Pickup • Secure payments via PayWay</Text>
        <View style={styles.links}>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>Terms</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>Support</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.version}>v1.0.0</Text>
      </View>

      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>You can sign back in as Customer, Shop Owner, or Admin from Get Started.</Text>
    </ScrollView>
    <View style={styles.bottomNavBar}>
        <TouchableOpacity
          style={styles.navBarItem}
          onPress={() => navigation.navigate('CusHome')}
        >
          <Feather name="home" size={24} color="#8B4513" />
          <Text style={styles.navBarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navBarItem}
          onPress={() => navigation.navigate('Cart')}
        >
          <Feather name="shopping-cart" size={24} color="#8B4513" />
          <Text style={styles.navBarText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navBarItem}
          onPress={() => navigation.navigate('CusProfile')}
        >
          <Feather name="user" size={24} color="#8B4513" />
          <Text style={styles.navBarText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 8,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 14,
    color: 'gray',
  },
  signedIn: {
    marginLeft: 'auto',
    color: '#4caf50',
    backgroundColor: '#e8f5e9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    overflow: 'hidden'
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  rowTitle: {
    fontSize: 16,
  },
  rowSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  aboutText: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 15,
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  linkButton: {
    marginHorizontal: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 20,
  },
  linkText: {
    color: 'black'
  },
  version: {
    position: 'absolute',
    top: 20,
    right: 20,
    color: 'gray',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    overflow: 'hidden'
  },
  signOutButton: {
    margin: 20,
    padding: 15,
    backgroundColor: '#d9534f',
    borderRadius: 10,
    alignItems: 'center',
  },
  signOutText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  footerText: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 20
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navBarItem: {
    alignItems: 'center',
  },
  navBarText: {
    fontSize: 12,
    color: '#8B4513',
  },
});

export default CusProfileScreen;
