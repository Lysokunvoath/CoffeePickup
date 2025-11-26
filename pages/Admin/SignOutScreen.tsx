import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SignOutScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
            <View style={styles.logoBackground}>
                <Text style={styles.logoText}>C</Text>
            </View>
            <Text style={styles.headerTitle}>Coffee Pickup</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialIcons name="logout" size={24} color="black" />
            <Text style={styles.cardTitle}>Sign out of Coffee Pickup?</Text>
          </View>
          <Text style={styles.cardSubtitle}>You will be returned to the Get Started screen. Unsaved changes may be lost.</Text>
          
          <View style={styles.quickSignIn}>
            <View style={styles.quickSignInHeader}>
                <Feather name="user" size={16} color="gray" />
                <Text style={styles.quickSignInTitle}>Quick Sign In</Text>
            </View>
            <View style={styles.roleButtons}>
              <TouchableOpacity style={styles.roleButton} onPress={() => navigation.navigate('CusHome' as never)}>
                <Feather name="user" size={16} color="black" />
                <Text>Customer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.roleButton} onPress={() => navigation.navigate('Dashboard' as never)}>
                <Feather name="home" size={16} color="black" />
                <Text>Shop Owner</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.quickSignInSubtitle}>Use role shortcuts after signing out.</Text>
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.cancelButton}>
              <Feather name="x" size={16} color="black" />
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('Login' as never)}>
              <MaterialIcons name="logout" size={16} color="white" />
              <Text style={styles.signOutButtonText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.footerText}>Transactions are handled via PayWay. You can sign back in anytime.</Text>
        </View>
      </ScrollView>
      <BottomNavBar />
    </View>
  );
};

const BottomNavBar = () => {
  const navigation = useNavigation();
  return (
      <View style={styles.navBar}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('AdDashboard' as never)}>
              <MaterialIcons name="dashboard" size={24} color="grey" />
              <Text style={styles.navText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('AdPreview' as never)}>
              <Feather name="eye" size={24} color="grey" />
              <Text style={styles.navText}>Preview</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SignOutScreen' as never)}>
              <MaterialIcons name="logout" size={24} color="#8B4513" />
              <Text style={styles.navText}>Sign Out</Text>
          </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  logoBackground: {
    backgroundColor: '#8B4513',
    borderRadius: 8,
    padding: 8,
    marginRight: 10,
  },
  logoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cardSubtitle: {
    color: 'gray',
    marginBottom: 20,
  },
  quickSignIn: {
    backgroundColor: '#F8F8F8',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  quickSignInHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
  },
  quickSignInTitle: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  roleButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  roleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: '#E0E0E0'
  },
  quickSignInSubtitle: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 12,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cancelButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0E0E0',
    padding: 15,
    borderRadius: 25,
    marginRight: 10,
  },
  cancelButtonText: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  signOutButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8B4513',
    padding: 15,
    borderRadius: 25,
  },
  signOutButtonText: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 5,
  },
  footerText: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 12,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: 'white',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: 'grey',
  },
});

export default SignOutScreen;
