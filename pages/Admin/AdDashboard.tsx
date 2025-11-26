import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const AdDashboard = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
      <Text style={styles.header}>Coffee Pickup</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Shops search & filters</Text>
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput placeholder="Search shops, owners" style={styles.searchInput} />
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter" size={20} color="black" />
            <Text style={styles.filterButtonText}>Filters</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statusFilters}>
          <TouchableOpacity style={styles.statusFilter}>
            <Text>Pending approval</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.statusFilter, styles.activeStatus]}>
            <Text>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statusFilter}>
            <Text>Deactivated</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.cardSubtitle}>Everyone can create a shop. New shops stay private until you approve them.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Shops overview</Text>
        <View style={styles.overviewGrid}>
          <View style={styles.overviewBox}>
            <Text style={styles.overviewNumber}>12</Text>
            <Text style={styles.overviewText}>Pending verification</Text>
          </View>
          <View style={styles.overviewBox}>
            <Text style={styles.overviewNumber}>48</Text>
            <Text style={styles.overviewText}>Active shops</Text>
          </View>
          <View style={styles.overviewBox}>
            <Text style={styles.overviewNumber}>5</Text>
            <Text style={styles.overviewText}>Deactivated</Text>
          </View>
          <View style={styles.overviewBox}>
            <Text style={styles.overviewNumber}>3</Text>
            <Text style={styles.overviewText}>Flagged by reviews</Text>
          </View>
        </View>
        <View style={styles.moderation}>
          <Text style={{ flex: 1, flexWrap: 'wrap' }}>Only approved shops are visible to customers.</Text>
          <View style={styles.moderationStatus}>
            <Text>Moderation on</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Pending shop approvals</Text>
        <View style={styles.shopItem}>
          <View style={{ flex: 1 }}>
            <Text style={styles.shopName}>Main Street Cafe</Text>
            <Text style={styles.shopInfo}>Owner: @sokchea • Created 10 min ago • Not verified</Text>
          </View>
          <TouchableOpacity style={styles.reviewButton}>
            <Text>Review</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.shopItem}>
          <View style={{ flex: 1 }}>
            <Text style={styles.shopName}>Riverside Espresso</Text>
            <Text style={styles.shopInfo}>Owner: @lin.n • Created 32 min ago • Not verified</Text>
          </View>
          <TouchableOpacity style={styles.reviewButton}>
            <Text>Review</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.shopItem}>
          <View style={{ flex: 1 }}>
            <Text style={styles.shopName}>Campus Coffee Lab</Text>
            <Text style={styles.shopInfo}>Owner: @dara • Created 1 hr ago • Not verified</Text>
          </View>
          <TouchableOpacity style={styles.reviewButton}>
            <Text>Review</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.approvalActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Text>View all pending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text>Auto-approve rules</Text>
          </TouchableOpacity>
        </View>
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
            <TouchableOpacity style={styles.approveButton}>
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
                <MaterialIcons name="dashboard" size={24} color="#8B4513" />
                <Text style={styles.navText}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('AdPreview' as never)}>
                <Feather name="eye" size={24} color="grey" />
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
    padding: 10,
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
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 10,
  },
  filterButtonText: {
    marginLeft: 5,
  },
  statusFilters: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  statusFilter: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: '#E0E0E0',
    marginRight: 10,
  },
  activeStatus: {
    backgroundColor: '#D0E8D0',
  },
  cardSubtitle: {
    fontSize: 12,
    color: 'gray',
  },
  overviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  overviewBox: {
    width: '48%',
    backgroundColor: '#F8F0E3',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  overviewNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  overviewText: {
    color: 'gray',
  },
  moderation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  moderationStatus: {
    backgroundColor: '#D0E8D0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shopItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  shopName: {
    fontWeight: 'bold',
  },
  shopInfo: {
    color: 'gray',
    fontSize: 12,
  },
  reviewButton: {
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
  },
  approvalActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  actionButton: {
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
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
  approveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#8B4513',
    borderRadius: 20
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

export default AdDashboard;
