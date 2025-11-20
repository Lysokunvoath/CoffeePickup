import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';

const coffeeShops = [
  {
    name: 'Brew & Bloom',
    rating: 4.7,
    type: 'Espresso, Pastries',
    time: '6-10 min',
    image: require('../../assets/image.png'), 
  },
  {
    name: 'Roast Republic',
    rating: 4.6,
    type: 'Cold brew, Croissants',
    time: 'Ready ~8 min',
    image: require('../../assets/image.png'), 
  },
  {
    name: 'Corner Cup',
    rating: 4.8,
    type: 'Drip, Sandwiches',
    time: '~5 min',
    image: require('../../assets/image.png'), 
  },
];

export default function CusHomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.logoBackground}>
              <Text style={styles.logoLetter}>C</Text>
            </View>
            <Text style={styles.headerTitle}>Coffee Pickup</Text>
          </View>
          <View style={styles.headerRight}>
            <Feather name="user" size={24} color="black" />
            <Text style={styles.customerText}>Customer</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Nearby coffee shops</Text>
          <View style={styles.locationButtons}>
            <TouchableOpacity style={styles.locationButton}>
              <MaterialIcons name="my-location" size={20} color="#8B4513" />
              <Text style={styles.locationButtonText}>Use current location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchButton}>
              <Feather name="search" size={20} color="#8B4513" />
              <Text style={styles.searchButtonText}>Search shops</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mapPlaceholder}>
            <Text>Map Placeholder</Text>
          </View>
        </View>

        <View style={styles.popularSection}>
          <Text style={styles.popularTitle}>Popular nearby</Text>
          {coffeeShops.map((shop, index) => (
            <View key={index} style={styles.shopCard}>
              <Image source={shop.image} style={styles.shopImage} />
              <View style={styles.shopInfo}>
                <Text style={styles.shopName}>{shop.name}</Text>
                <View style={styles.ratingContainer}>
                  <Feather name="star" size={16} color="#FFD700" />
                  <Text style={styles.ratingText}>
                    {shop.rating} • {shop.type}
                  </Text>
                </View>
              </View>
              <View style={styles.shopTimeContainer}>
                <Text style={styles.shopTime}>{shop.time}</Text>
              </View>
              <View style={styles.shopButtons}>
                <TouchableOpacity
                  style={styles.viewMenuButton}
                  onPress={() => navigation.navigate('Menu')}
                >
                  <Text style={styles.viewMenuButtonText}>View Menu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.orderButton}
                  onPress={() => navigation.navigate('Menu')}
                >
                  <Text style={styles.orderButtonText}>Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBackground: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8B4513',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  logoLetter: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customerText: {
    marginLeft: 5,
    fontSize: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    margin: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  locationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5E5D5',
    padding: 10,
    borderRadius: 20,
  },
  locationButtonText: {
    color: '#8B4513',
    marginLeft: 5,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5E5D5',
    padding: 10,
    borderRadius: 20,
  },
  searchButtonText: {
    color: '#8B4513',
    marginLeft: 5,
  },
  mapPlaceholder: {
    height: 150,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#8B4513',
  },
  popularSection: {
    padding: 20,
  },
  popularTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  shopCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  shopImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  shopInfo: {
    marginBottom: 10,
  },
  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    color: '#666',
  },
  shopTimeContainer: {
    position: 'absolute',
    top: 30,
    right: 30,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
    borderRadius: 5,
  },
  shopTime: {
    color: '#FFFFFF',
  },
  shopButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewMenuButton: {
    backgroundColor: '#F5E5D5',
    padding: 15,
    borderRadius: 30,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  viewMenuButtonText: {
    color: '#8B4513',
    fontWeight: 'bold',
  },
  orderButton: {
    backgroundColor: '#8B4513',
    padding: 15,
    borderRadius: 30,
    flex: 1,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
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