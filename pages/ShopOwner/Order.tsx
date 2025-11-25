
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const OrderScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Incoming');

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Header />
        <View style={styles.topSection}>
          <View style={styles.titleContainer}>
            <Ionicons name="list" size={24} color="black" />
            <Text style={styles.title}>Orders</Text>
            <View style={styles.cafeNameContainer}>
              <Text style={styles.cafeName}>Main Street Cafe</Text>
            </View>
          </View>
          <View style={styles.searchFilterContainer}>
            <View style={styles.searchContainer}>
              <Feather name="search" size={20} color="#8A8A8A" style={styles.searchIcon} />
              <TextInput placeholder="Search order ID or name" style={styles.searchInput} />
            </View>
            <TouchableOpacity style={styles.filterButton}>
              <Ionicons name="filter" size={20} color="black" />
              <Text style={styles.filterButtonText}>Filters</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabsContainer}>
            <TouchableOpacity 
              style={[styles.tab, selectedTab === 'Incoming' && styles.activeTab]}
              onPress={() => setSelectedTab('Incoming')}
            >
              <Text style={[styles.tabText, selectedTab === 'Incoming' && styles.activeTabText]}>Incoming (3)</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, selectedTab === 'In Progress' && styles.activeTab]}
              onPress={() => setSelectedTab('In Progress')}
            >
              <Text style={[styles.tabText, selectedTab === 'In Progress' && styles.activeTabText]}>In Progress (2)</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, selectedTab === 'Ready' && styles.activeTab]}
              onPress={() => setSelectedTab('Ready')}
            >
              <Text style={[styles.tabText, selectedTab === 'Ready' && styles.activeTabText]}>Ready (2)</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons name="timer-sand" size={20} color="black" />
            <Text style={styles.sectionTitle}>Incoming</Text>
          </View>
          <IncomingOrderCard orderNumber="#135" itemName="Iced Latte • Medium" details="No sugar • Oat milk • 1 min ago" />
          <IncomingOrderCard orderNumber="#136" itemName="Flat White • Small" details="Extra hot • 2 min ago" />
          <IncomingOrderCard orderNumber="#137" itemName="Americano • Large" details="Light ice • now" />
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="time-outline" size={20} color="black" />
            <Text style={styles.sectionTitle}>In progress</Text>
          </View>
          <InProgressOrderCard orderNumber="#132" itemName="Mocha • Medium" details="2m elapsed" />
          <InProgressOrderCard orderNumber="#133" itemName="Cappuccino • Small" details="1m elapsed" />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Feather name="check-circle" size={20} color="black" />
            <Text style={styles.sectionTitle}>Ready for pickup</Text>
          </View>
          <ReadyForPickupCard orderInfo="Order #129 • Sofia M." details="Mocha • 6 min ready" />
          <ReadyForPickupCard orderInfo="Order #130 • Ryan K." details="Flat White • 3 min ready" />
        </View>
        
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <MaterialCommunityIcons name="calendar-check-outline" size={20} color="black" />
            <Text style={styles.footerText}>7 total today</Text>
          </View>
          <View style={styles.footerActions}>
            <TouchableOpacity style={styles.printButton}>
              <Text style={styles.printButtonText}>Print</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeAllButton}>
              <Text style={styles.closeAllButtonText}>Close all ready</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BottomNavBar />
    </View>
  );
};

const Header = () => (
  <View style={styles.header}>
    <View style={styles.headerLeft}>
      <View style={styles.logoBackground}>
        <Text style={styles.logoText}>C</Text>
      </View>
      <Text style={styles.headerTitle}>Coffee Pickup</Text>
    </View>
  </View>
);

const IncomingOrderCard = ({ orderNumber, itemName, details }: { orderNumber: string, itemName: string, details: string }) => (
  <View style={styles.card}>
    <View style={styles.orderNumberContainer}>
      <Text style={styles.orderNumber}>{orderNumber}</Text>
    </View>
    <View style={styles.itemDetails}>
      <Text style={styles.itemName}>{itemName}</Text>
      <Text style={styles.itemSubDetails}>{details}</Text>
    </View>
    <View style={styles.orderActions}>
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.readyButton}>
        <Text style={styles.readyButtonText}>Ready</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const InProgressOrderCard = ({ orderNumber, itemName, details }: { orderNumber: string, itemName: string, details: string }) => (
  <View style={styles.card}>
    <View style={styles.orderNumberContainer}>
      <Text style={styles.orderNumber}>{orderNumber}</Text>
    </View>
    <View style={styles.itemDetails}>
      <Text style={styles.itemName}>{itemName}</Text>
      <Text style={styles.itemSubDetails}>{details}</Text>
    </View>
    <View style={styles.orderActions}>
      <TouchableOpacity style={styles.pauseButton}>
        <Text style={styles.pauseButtonText}>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.markReadyButton}>
        <Text style={styles.markReadyButtonText}>Mark ready</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const ReadyForPickupCard = ({ orderInfo, details }: { orderInfo: string, details: string }) => (
  <View style={styles.card}>
    <View style={styles.customerIcon}>
      <Ionicons name="person-outline" size={24} color="black" />
    </View>
    <View style={styles.itemDetails}>
      <Text style={styles.itemName}>{orderInfo}</Text>
      <Text style={styles.itemSubDetails}>{details}</Text>
    </View>
    <TouchableOpacity style={styles.markPickedButton}>
      <Text style={styles.markPickedButtonText}>Mark picked</Text>
    </TouchableOpacity>
  </View>
);

const BottomNavBar = () => {
  const navigation = useNavigation();
  return (
  <View style={styles.navBar}>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Dashboard' as never)}>
      <MaterialIcons name="dashboard" size={24} color="grey" />
      <Text style={styles.navText}>Dashboard</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ShopOwnerMenu' as never)}>
      <MaterialIcons name="menu-book" size={24} color="grey" />
      <Text style={styles.navText}>Menu</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ShopOwnerOrder' as never)}>
      <MaterialIcons name="receipt-long" size={24} color="#8B4513" />
      <Text style={styles.navText}>Order</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ShopOwnerReport' as never)}>
      <MaterialIcons name="bar-chart" size={24} color="grey" />
      <Text style={styles.navText}>Report</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ShopOwnerProfile' as never)}>
      <MaterialIcons name="person" size={24} color="grey" />
      <Text style={styles.navText}>Profile</Text>
    </TouchableOpacity>
  </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F7F4',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: '#F8F7F4',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoBackground: {
        backgroundColor: '#8B4513',
        borderRadius: 8,
        padding: 8,
    },
    logoText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    topSection: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 15,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        flex: 1,
    },
    cafeNameContainer: {
        backgroundColor: '#F0EAE4',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    cafeName: {
        color: '#8B4513',
        fontWeight: '500',
    },
    searchFilterContainer: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F7F4',
        borderRadius: 25,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 50,
    },
    filterButton: {
        backgroundColor: '#F0EAE4',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterButtonText: {
        marginLeft: 8,
        fontWeight: '600',
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#F0EAE4',
        borderRadius: 25,
        padding: 5,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: '#8B4513',
    },
    tabText: {
        fontWeight: '600',
        color: '#8B4513',
    },
    activeTabText: {
        color: 'white',
    },
    section: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 15,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F7F4',
        borderRadius: 15,
        padding: 15,
        marginBottom: 10,
    },
    orderNumberContainer: {
        backgroundColor: '#EFEBE8',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginRight: 15,
    },
    orderNumber: {
        fontWeight: 'bold',
        color: '#8B4513',
    },
    itemDetails: {
        flex: 1,
        marginRight: 10,
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    itemSubDetails: {
        color: '#666',
        marginTop: 2,
    },
    orderActions: {
        flexDirection: 'row',
    },
    startButton: {
        backgroundColor: '#EFEBE8',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    startButtonText: {
        fontWeight: 'bold',
        color: '#8B4513',
    },
    readyButton: {
        backgroundColor: '#8B4513',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    readyButtonText: {
        fontWeight: 'bold',
        color: 'white',
    },
    pauseButton: {
        backgroundColor: '#EFEBE8',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    pauseButtonText: {
        fontWeight: 'bold',
        color: '#8B4513',
    },
    markReadyButton: {
        backgroundColor: '#8B4513',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    markReadyButtonText: {
        fontWeight: 'bold',
        color: 'white',
    },
    customerIcon: {
      backgroundColor: '#EFEBE8',
      borderRadius: 25,
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15,
    },
    markPickedButton: {
      backgroundColor: '#EFEBE8',
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    markPickedButtonText: {
      fontWeight: 'bold',
      color: '#8B4513',
    },
    footer: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 15,
        marginTop: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
    },
    footerActions: {
        flexDirection: 'row',
    },
    printButton: {
        backgroundColor: '#EFEBE8',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 10,
    },
    printButtonText: {
        fontWeight: 'bold',
        color: '#8B4513',
    },
    closeAllButton: {
        backgroundColor: '#8B4513',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    closeAllButtonText: {
        fontWeight: 'bold',
        color: 'white',
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

export default OrderScreen;
