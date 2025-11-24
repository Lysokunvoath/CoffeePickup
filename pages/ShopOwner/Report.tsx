
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Report = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View style={styles.appTitleContainer}>
            <View style={styles.appIcon} />
            <Text style={styles.appTitle}>Coffee Pickup</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.headerButton}>
              <Text style={styles.headerButtonText}>This Week</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Store: Main St</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sectionTitleContainer}>
          <Ionicons name="stats-chart-outline" size={24} color="black" />
          <Text style={styles.sectionTitle}>Reports</Text>
        </View>

        <View style={styles.dateFilters}>
          <TouchableOpacity style={[styles.dateFilterButton, { backgroundColor: 'white' }]}>
            <Text style={styles.dateFilterButtonText}>Today</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dateFilterButton}>
            <Text style={styles.dateFilterButtonText}>7 Days</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dateFilterButton}>
            <Text style={styles.dateFilterButtonText}>30 Days</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dateFilterButton}>
            <Text style={styles.dateFilterButtonText}>Custom</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardSection}>
          <View style={styles.cardSectionTitleContainer}>
            <Ionicons name="analytics-outline" size={20} color="black" />
            <Text style={styles.cardSectionTitle}>Sales Overview</Text>
          </View>
          <View style={styles.salesOverviewGrid}>
            <View style={styles.salesOverviewCard}>
              <Text style={styles.salesOverviewLabel}>Total Revenue</Text>
              <Text style={styles.salesOverviewValue}>$4,280</Text>
              <Text style={styles.salesOverviewSubText}>via PayWay</Text>
            </View>
            <View style={styles.salesOverviewCard}>
              <Text style={styles.salesOverviewLabel}>Orders</Text>
              <Text style={styles.salesOverviewValue}>912</Text>
              <Text style={styles.salesOverviewSubText}>Avg $4.69</Text>
            </View>
            <View style={styles.salesOverviewCard}>
              <Text style={styles.salesOverviewLabel}>Refunds</Text>
              <Text style={styles.salesOverviewValue}>$36</Text>
              <Text style={styles.salesOverviewSubText}>0.8%</Text>
            </View>
            <View style={styles.salesOverviewCard}>
              <Text style={styles.salesOverviewLabel}>Prep Time</Text>
              <Text style={styles.salesOverviewValue}>6m 20s</Text>
              <Text style={styles.salesOverviewSubText}>median</Text>
            </View>
          </View>
          <View style={styles.chartPlaceholder}>
            <Text style={styles.chartPlaceholderText}>Sparkline/Bar chart placeholder</Text>
          </View>
          <View style={styles.chartFilters}>
            <TouchableOpacity style={[styles.chartFilterButton, { backgroundColor: '#e0e0e0' }]}>
              <Text style={styles.chartFilterButtonText}>Revenue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chartFilterButton}>
              <Text style={styles.chartFilterButtonText}>Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chartFilterButton}>
              <Text style={styles.chartFilterButtonText}>Refunds</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cardSection}>
          <View style={styles.cardSectionTitleContainer}>
            <FontAwesome5 name="shopping-basket" size={18} color="black" />
            <Text style={styles.cardSectionTitle}>Top Items</Text>
          </View>
          <View style={styles.topItem}>
            <MaterialCommunityIcons name="cup" size={24} color="black" />
            <View style={styles.topItemDetails}>
              <Text style={styles.topItemName}>Iced Vanilla Latte</Text>
              <Text style={styles.topItemStats}>312 orders • $1,520</Text>
            </View>
            <Text style={styles.topItemChange}>+12%</Text>
          </View>
          <View style={styles.topItem}>
            <MaterialCommunityIcons name="cup" size={24} color="black" />
            <View style={styles.topItemDetails}>
              <Text style={styles.topItemName}>Cappuccino</Text>
              <Text style={styles.topItemStats}>204 orders • $860</Text>
            </View>
            <Text style={styles.topItemChange}>+6%</Text>
          </View>
          <View style={styles.topItem}>
            <FontAwesome5 name="cookie-bite" size={24} color="black" />
            <View style={styles.topItemDetails}>
              <Text style={styles.topItemName}>Butter Croissant</Text>
              <Text style={styles.topItemStats}>148 orders • $503</Text>
            </View>
            <Text style={[styles.topItemChange, { color: 'red' }]}>-3%</Text>
          </View>
        </View>

        <View style={styles.cardSection}>
          <View style={styles.cardSectionTitleContainer}>
            <Ionicons name="share-outline" size={20} color="black" />
            <Text style={styles.cardSectionTitle}>Channel Breakdown</Text>
          </View>
          <View style={styles.channelRow}>
            <Ionicons name="phone-portrait-outline" size={24} color="black" />
            <Text style={styles.channelLabel}>Mobile Orders</Text>
            <Text style={styles.channelValue}>$3,540</Text>
            <Text style={[styles.channelPercentage, {backgroundColor: '#ffe6cc'}]}>82%</Text>
          </View>
          <View style={styles.channelRow}>
            <Ionicons name="storefront-outline" size={24} color="black" />
            <Text style={styles.channelLabel}>In-Store</Text>
            <Text style={styles.channelValue}>$620</Text>
            <Text style={[styles.channelPercentage, {backgroundColor: '#fff0b3'}]}>14%</Text>
          </View>
          <View style={styles.channelRow}>
            <Ionicons name="globe-outline" size={24} color="black" />
            <Text style={styles.channelLabel}>Other</Text>
            <Text style={styles.channelValue}>$120</Text>
            <Text style={[styles.channelPercentage, {backgroundColor: '#ffe0b3'}]}>4%</Text>
          </View>
        </View>

        <View style={styles.cardSection}>
          <View style={styles.cardSectionTitleContainer}>
            <Ionicons name="download-outline" size={20} color="black" />
            <Text style={styles.cardSectionTitle}>Export</Text>
          </View>
          <Text style={styles.exportText}>Exports include PayWay payout IDs for reconciliation.</Text>
          <View style={styles.exportButtons}>
            <TouchableOpacity style={styles.exportButton}>
              <Text style={styles.exportButtonText}>CSV</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exportButton}>
              <Text style={styles.exportButtonText}>PDF</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <BottomNavBar />
    </SafeAreaView>
  );
};

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
      <TouchableOpacity style={styles.navItem}>
        <MaterialIcons name="receipt-long" size={24} color="grey" />
        <Text style={styles.navText}>Order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.navItem, styles.navItemActive]} onPress={() => navigation.navigate('ShopOwnerReport' as never)}>
        <MaterialIcons name="bar-chart" size={24} color="white" />
        <Text style={[styles.navText, styles.navTextActive]}>Report</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ShopOwnerProfile' as never)}>
        <MaterialIcons name="person" size={24} color="grey" />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
    )
  };

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  container: {
    padding: 16,
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  appTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appIcon: {
    width: 24,
    height: 24,
    backgroundColor: 'brown',
    borderRadius: 12,
    marginRight: 8,
  },
  appTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
  },
  headerButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
  headerButtonText: {
    fontSize: 12,
    fontWeight: '500',
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  dateFilters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 25,
    padding: 3,
    marginHorizontal: 5,
  },
  dateFilterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  dateFilterButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  cardSection: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardSectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  salesOverviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  salesOverviewCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    width: '48%',
    marginBottom: 10,
  },
  salesOverviewLabel: {
    fontSize: 13,
    color: 'gray',
  },
  salesOverviewValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  salesOverviewSubText: {
    fontSize: 12,
    color: 'gray',
  },
  chartPlaceholder: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  chartPlaceholderText: {
    color: 'gray',
    fontSize: 14,
  },
  chartFilters: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  chartFilterButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
  },
  chartFilterButtonText: {
    fontSize: 12,
    fontWeight: '500',
  },
  topItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  topItemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  topItemName: {
    fontSize: 16,
    fontWeight: '500',
  },
  topItemStats: {
    fontSize: 13,
    color: 'gray',
  },
  topItemChange: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
  },
  channelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  channelLabel: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  channelValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  channelPercentage: {
    fontSize: 14,
    color: 'black',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 15,
  },
  exportText: {
    fontSize: 13,
    color: 'gray',
    marginBottom: 15,
  },
  exportButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  exportButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 15,
  },
  exportButtonText: {
    fontSize: 14,
    fontWeight: '500',
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
  navItemActive: {
    backgroundColor: '#a0a0a0', // Placeholder for active background
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  navTextActive: {
    color: 'white',
  },
});

export default Report;
