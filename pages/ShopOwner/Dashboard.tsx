import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Header />
        <OwnerDashboard />
        <IncomingOrders />
        <ReadyForPickup />
        <MenuManagement />
        <Payouts />
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

const OwnerDashboard = () => (
  <View style={styles.ownerDashboardContainer}>
    <View style={styles.ownerDashboardHeader}>
      <MaterialCommunityIcons name="view-dashboard-outline" size={24} color="black" />
      <Text style={styles.ownerDashboardTitle}>Owner Dashboard</Text>
      <View style={styles.cafeNameContainer}>
        <Text style={styles.cafeName}>Main Street Cafe</Text>
      </View>
    </View>
    <View style={styles.statsRow}>
      <View style={styles.statBox}>
        <Ionicons name="time-outline" size={24} color="black" />
        <Text style={styles.statTitle}>Active orders</Text>
        <Text style={styles.statValue}>6 in queue • 4m avg</Text>
      </View>
      <View style={styles.statBox}>
        <Feather name="dollar-sign" size={24} color="black" />
        <Text style={styles.statTitle}>Today's sales</Text>
        <Text style={styles.statValue}>$312.40</Text>
      </View>
    </View>
    <View style={styles.actionsRow}>
      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="volume-medium-outline" size={20} color="black" />
        <Text style={styles.actionButtonText}>Sound on</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <MaterialCommunityIcons name="line-scan" size={20} color="black" />
        <Text style={styles.actionButtonText}>Scan pickup</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const IncomingOrders = () => (
  <View style={styles.sectionContainer}>
    <View style={styles.sectionHeader}>
      <Ionicons name="timer-outline" size={20} color="black" />
      <Text style={styles.sectionTitle}>Incoming orders</Text>
    </View>
    <OrderCard
      orderNumber="#132"
      itemName="Iced Latte • Medium"
      details="No sugar • Oat milk • 2 min ago"
    />
    <OrderCard
      orderNumber="#133"
      itemName="Americano • Large"
      details="Extra hot • 1 min ago"
    />
    <OrderCard
      orderNumber="#134"
      itemName="Cappuccino • Small"
      details="1 extra shot • now"
    />
  </View>
);

const OrderCard = ({ orderNumber, itemName, details }: { orderNumber: string, itemName: string, details: string }) => (
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

const ReadyForPickup = () => (
  <View style={styles.sectionContainer}>
    <View style={styles.sectionHeader}>
      <Feather name="check-circle" size={20} color="black" />
      <Text style={styles.sectionTitle}>Ready for pickup</Text>
    </View>
    <PickupCard
      orderInfo="Order #129 • Sofia M."
      details="Mocha • Medium • 6 min ready"
    />
    <PickupCard
      orderInfo="Order #130 • Ryan K."
      details="Flat White • Small • 3 min ready"
    />
  </View>
);

const PickupCard = ({ orderInfo, details }: { orderInfo: string, details: string }) => (
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

const MenuManagement = () => (
  <View style={styles.sectionContainer}>
    <View style={styles.sectionHeader}>
      <Feather name="book-open" size={20} color="black" />
      <Text style={styles.sectionTitle}>Menu management</Text>
    </View>
    <View style={styles.searchContainer}>
      <Feather name="search" size={20} color="#8A8A8A" style={styles.searchIcon} />
      <TextInput placeholder="Search items" style={styles.searchInput} />
      <TouchableOpacity style={styles.addItemButton}>
        <Text style={styles.addItemButtonText}>Add item</Text>
      </TouchableOpacity>
    </View>
    <MenuItem name="Espresso" price="$2.50 • Available" action="Hide" actionColor="#D9534F" />
    <MenuItem name="Iced Latte" price="$4.90 • Available" action="Hide" actionColor="#D9534F" />
    <MenuItem name="Cappuccino" price="$3.90 • Sold out" action="Restock" actionColor="#8B4513" />
  </View>
);

const MenuItem = ({ name, price, action, actionColor }: { name: string, price: string, action: string, actionColor: string }) => (
  <View style={styles.menuItem}>
  <View style={{ flex: 1, marginRight: 10 }}>
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemSubDetails}>{price}</Text>
    </View>
    <View style={styles.menuActions}>
      <TouchableOpacity style={[styles.actionButtonBase, styles.editButton]}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.actionButtonBase, styles.hideButton, { backgroundColor: actionColor }]}>
        <Text style={styles.hideButtonText}>{action}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Payouts = () => (
  <View style={styles.sectionContainer}>
    <View style={styles.sectionHeader}>
      <Feather name="credit-card" size={20} color="black" />
      <Text style={styles.sectionTitle}>Payouts</Text>
    </View>
    <View style={styles.payoutsContent}>
      <View style={styles.payoutRow}>
        <View>
          <Text style={styles.payoutTitle}>Today</Text>
          <Text style={styles.payoutDetails}>$312.40 • 18 orders</Text>
        </View>
        <View style={styles.onTrackChip}>
          <Text style={styles.onTrackText}>On track</Text>
        </View>
      </View>
      <View style={styles.payoutRow}>
        <View>
          <Text style={styles.payoutTitle}>PayWay status</Text>
        </View>
        <View style={styles.connectedChip}>
          <Text style={styles.connectedText}>Connected</Text>
        </View>
      </View>
    </View>
  </View>
);

const BottomNavBar = () => {
  const navigation = useNavigation();
  return (
  <View style={styles.navBar}>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Dashboard' as never)}>
      <MaterialIcons name="dashboard" size={24} color="#8B4513" />
      <Text style={styles.navText}>Dashboard</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ShopOwnerMenu' as never)}>
      <MaterialIcons name="menu-book" size={24} color="grey" />
      <Text style={styles.navText}>Menu</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ShopOwnerOrder' as never)}>
      <MaterialIcons name="receipt-long" size={24} color="grey" />
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
  ownerDashboardContainer: {
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
  ownerDashboardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  ownerDashboardTitle: {
    fontSize: 18,
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
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  statBox: {
    backgroundColor: '#F8F7F4',
    borderRadius: 15,
    padding: 15,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'flex-start',
  },
  statTitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 2,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#F0EAE4',
    borderRadius: 15,
    paddingVertical: 12,
    flex: 1,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    marginLeft: 8,
    fontWeight: '600',
  },
  sectionContainer: {
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
    justifyContent: 'flex-end',
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F7F4',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
  },
  addItemButton: {
    backgroundColor: '#8B4513',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  addItemButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionButtonBase: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15, 
    width: 90, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  editButton: {
    backgroundColor: '#EFEBE8',
    marginRight: 10,
  },
  editButtonText: {
    fontWeight: 'bold',
    color: '#8B4513',
  },
  hideButton: {
  },
  hideButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  payoutsContent: {
    paddingTop: 5,
  },
  payoutRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  payoutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  payoutDetails: {
    color: '#666',
    marginTop: 2,
  },
  onTrackChip: {
    backgroundColor: '#28A745',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  onTrackText: {
    color: 'white',
    fontWeight: 'bold',
  },
  connectedChip: {
    backgroundColor: '#EFEBE8',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  connectedText: {
    color: '#8B4513',
    fontWeight: 'bold',
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

export default Dashboard;