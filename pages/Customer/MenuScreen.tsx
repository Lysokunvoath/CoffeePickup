import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

interface MenuItemType {
  name: string;
  description: string;
  price: number;
  image: any;
}

const menu: { [key: string]: MenuItemType[] } = {
  'Popular drinks': [
    {
      name: 'Iced Latte',
      description: 'Rich espresso over milk, lightly sweet.',
      price: 4.50,
      image: require('../../assets/image.png'),
    },
    {
      name: 'Cappuccino',
      description: 'Velvety foam with a double shot.',
      price: 4.20,
      image: require('../../assets/image.png'),
    },
    {
      name: 'Cold Brew',
      description: 'Slow-steeped, smooth and bold.',
      price: 4.00,
      image: require('../../assets/image.png'),
    },
  ],
  'Pastries': [
    {
      name: 'Butter Croissant',
      description: 'Flaky layers, baked fresh daily.',
      price: 3.20,
      image: require('../../assets/image.png'),
    },
    {
      name: 'Choco Chip Cookie',
      description: 'Soft center, crisp edge.',
      price: 2.50,
      image: require('../../assets/image.png'),
    },
  ],
};

const MenuItem = ({ item, navigation }: { item: MenuItemType, navigation: any }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ItemCustomize', { item })}>
      <View style={styles.menuItem}>
        <Image source={item.image} style={styles.menuItemImage} />
        <View style={styles.menuItemInfo}>
          <Text style={styles.menuItemName}>{item.name}</Text>
          <Text style={styles.menuItemDescription}>{item.description}</Text>
          <Text style={styles.menuItemPrice}>${item.price.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function MenuScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('CusHome')}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Coffee Pickup</Text>
        <View style={styles.timeContainer}>
          <Feather name="clock" size={16} color="black" />
          <Text style={styles.timeText}>6-10 min</Text>
        </View>
      </View>

      <View style={styles.shopHeader}>
        <Image source={require('../../assets/image.png')} style={styles.shopImage} />
        <View style={styles.shopInfo}>
          <Text style={styles.shopName}>Brew & Bloom</Text>
          <View style={styles.shopDetails}>
            <Feather name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>4.7</Text>
            <Feather name="clock" size={16} color="gray" style={{ marginLeft: 10 }} />
            <Text style={styles.prepTime}>Prep 6–10 min</Text>
            <Feather name="map-pin" size={16} color="gray" style={{ marginLeft: 10 }} />
            <Text style={styles.distance}>0.4 mi</Text>
          </View>
        </View>
      </View>

      <View style={styles.searchSection}>
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color="gray" />
          <TextInput placeholder="Search menu" style={styles.searchInput} />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <MaterialCommunityIcons name="filter-variant" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.chipContainer}>
        {['Featured', 'Espresso', 'Cold Brew', 'Pastries'].map((chip) => (
          <TouchableOpacity key={chip} style={styles.chip}>
            <Text style={styles.chipText}>{chip}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {Object.keys(menu).map((category) => (
        <View key={category} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category}</Text>
          {menu[category].map((item) => (
            <MenuItem key={item.name} item={item} navigation={navigation} />
          ))}
        </View>
      ))}
    </ScrollView>
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
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  timeText: {
    marginLeft: 5,
  },
  shopHeader: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  shopImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  shopInfo: {
    marginLeft: 15,
  },
  shopName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  shopDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    marginLeft: 5,
    color: 'gray',
  },
  prepTime: {
    marginLeft: 5,
    color: 'gray',
  },
  distance: {
    marginLeft: 5,
    color: 'gray',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
    paddingHorizontal: 15,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    height: 40,
  },
  filterButton: {
    marginLeft: 15,
  },
  chipContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  chip: {
    backgroundColor: '#F5E5D5',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  chipText: {
    color: '#8B4513',
    fontWeight: 'bold',
  },
  categoryContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  menuItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  menuItemInfo: {
    flex: 1,
    marginLeft: 15,
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItemDescription: {
    color: 'gray',
    marginVertical: 5,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
  },

});
