import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AdPreview = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Coffee Pickup</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Selected Shop Preview</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Shop Name</Text>
            <View style={styles.inputContainer}>
              <Feather name="home" size={16} color="gray" />
              <Text style={styles.inputText}>Main Street Coffee</Text>
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Owner</Text>
            <View style={styles.inputContainer}>
              <Feather name="user" size={16} color="gray" />
              <Text style={styles.inputText}>@sokchea</Text>
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Notes</Text>
            <TextInput
              style={styles.notesInput}
              placeholder="Add an internal note for this review..."
              multiline
            />
          </View>
          <TouchableOpacity style={styles.actionButton}>
            <Feather name="eye" size={16} color="black" />
            <Text style={styles.actionButtonText}>Open Full Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.approveButton}>
            <Feather name="check" size={16} color="white" />
            <Text style={styles.approveButtonText}>Approve</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Review selected shop</Text>
          <View>
              <Text style={styles.shopName}>Main Street Cafe - Not verified</Text>
              <Text style={styles.shopDetails}>Menu: 18 items • Opens 7:00 - 20:00 • Phnom Penh</Text>
              <Text style={styles.shopDetails}>Location: map & address provided • PayWay + ABA KHQR enabled</Text>
          </View>
          <View style={styles.reviewActions}>
              <TouchableOpacity style={styles.reviewActionButton}>
                  <Feather name="map" size={16} color="black" />
                  <Text>View map & location</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.reviewActionButton}>
                  <Feather name="menu" size={16} color="black" />
                  <Text>View full menu</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.finalActions}>
              <TouchableOpacity style={styles.rejectButton}>
                  <Feather name="x" size={16} color="black" />
                  <Text>Reject with reason</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.approveAndMakePublicButton}>
                  <Feather name="check" size={16} color="white" />
                  <Text style={{color: 'white'}}>Approve & make public</Text>
              </TouchableOpacity>
          </View>
          <Text style={styles.cardSubtitle}>Approval removes the "Not verified" mark and publishes the shop to customers.</Text>
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
              <Feather name="eye" size={24} color="#8B4513" />
              <Text style={styles.navText}>Preview</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SignOutScreen' as never)}>
              <MaterialIcons name="logout" size={24} color="grey" />
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
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: '#FFFFFF',
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    color: 'gray',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 10,
  },
  inputText: {
    marginLeft: 10,
  },
  notesInput: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 10,
    height: 80,
    textAlignVertical: 'top',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0E0E0',
    padding: 15,
    borderRadius: 25,
    marginBottom: 10,
  },
  actionButtonText: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  approveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8B4513',
    padding: 15,
    borderRadius: 25,
  },
  approveButtonText: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  shopName: {
    fontWeight: 'bold',
  },
  shopDetails: {
      fontSize: 12,
      color: 'gray',
  },
  reviewActions: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 10,
  },
  reviewActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  finalActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  rejectButton: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#F0E0E0',
      borderRadius: 20
  },
  approveAndMakePublicButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#8B4513',
    borderRadius: 20
  },
  cardSubtitle: {
    fontSize: 12,
    color: 'gray',
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

export default AdPreview;
