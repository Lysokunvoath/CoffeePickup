import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const menuItems = {
    featured: [
      {
        name: 'Iced Vanilla Latte',
        description: 'Oat milk • Less sugar',
        image: require('../../assets/image.png'),
      },
    ],
    hot: [
      {
        name: 'Cappuccino',
        description: 'Small • Medium • Large',
        price: '$4.20',
        image: require('../../assets/image.png'),
      },
      {
        name: 'Flat White',
        description: 'Velvety microfoam',
        price: '$4.50',
        image: require('../../assets/image.png'),
      },
    ],
    cold: [
      {
        name: 'Iced Latte',
        description: 'Choice of milk',
        price: '$4.80',
        image: require('../../assets/image.png'),
      },
      {
        name: 'Cold Brew',
        description: '12h steeped',
        price: '$5.20',
        image: require('../../assets/image.png'),
      },
    ],
    bakery: [
      {
        name: 'Butter Croissant',
        description: 'Fresh daily',
        price: '$3.40',
        image: require('../../assets/image.png'),
      },
      {
        name: 'Blueberry Muffin',
        description: 'Seasonal',
        price: '$3.80',
        image: require('../../assets/image.png'),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>C</Text>
          </View>
          <Text style={styles.headerText}>Coffee Pickup</Text>
        </View>

        <View style={styles.menuHeader}>
          <Feather name="coffee" size={24} color="black" />
          <Text style={styles.menuTitle}>Menu</Text>
          <TouchableOpacity style={styles.cafeButton}>
            <Text style={styles.cafeButtonText}>Main Street Cafe</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchSection}>
          <View style={styles.searchInputContainer}>
            <Feather name="search" size={20} color="gray" style={{marginLeft: 10}}/>
            <TextInput placeholder="Search drinks, food..." style={styles.searchInput} />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter" size={20} color="black" />
            <Text style={styles.filterText}>Filters</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tagsContainer}>
          {['All', 'Hot', 'Cold', 'Bakery'].map((tag) => (
            <TouchableOpacity key={tag} style={[styles.tag, tag === 'All' && styles.activeTag]}>
              <Text style={[styles.tagText, tag === 'All' && styles.activeTagText]}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons name="star-outline" size={24} color="black" />
            <Text style={styles.sectionTitle}>Featured</Text>
          </View>
          {menuItems.featured.map((item, index) => (
            <View key={index} style={styles.featuredItemCard}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </View>
              <TouchableOpacity style={styles.customizeButton}>
                <Text style={styles.customizeButtonText}>Customize</Text>
              </TouchableOpacity>
            </View>
          ))}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.newItemButton}>
              <Feather name="plus" size={20} color="black" />
              <Text style={styles.newItemText}>New item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bulkEditButton}>
              <MaterialCommunityIcons name="swap-horizontal" size={20} color="black" />
              <Text style={styles.bulkEditText}>Bulk edit</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons name="coffee" size={24} color="black" />
            <Text style={styles.sectionTitle}>Hot Drinks</Text>
          </View>
          {menuItems.hot.map((item, index) => (
            <View key={index} style={styles.itemCard}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </View>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="snow-outline" size={24} color="black" />
            <Text style={styles.sectionTitle}>Cold Drinks</Text>
          </View>
          {menuItems.cold.map((item, index) => (
            <View key={index} style={styles.itemCard}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </View>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons name="muffin" size={24} color="black" />
            <Text style={styles.sectionTitle}>Bakery</Text>
          </View>
          {menuItems.bakery.map((item, index) => (
            <View key={index} style={styles.itemCard}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </View>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          ))}
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
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Dashboard' as never)}>
        <MaterialIcons name="dashboard" size={24} color="grey" />
        <Text style={styles.navText}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <MaterialIcons name="menu-book" size={24} color="#8B4513" />
        <Text style={styles.navText}>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <MaterialIcons name="receipt-long" size={24} color="grey" />
        <Text style={styles.navText}>Order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
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
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  logoContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#c97b41',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  logo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    flex: 1,
  },
  cafeButton: {
    backgroundColor: '#edeae7',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  cafeButtonText: {
    fontWeight: 'bold',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    height: 50,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#edeae7',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
  },
  filterText: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
  tagsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  tag: {
    backgroundColor: '#edeae7',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  activeTag: {
    backgroundColor: '#d8c8bb',
  },
  tagText: {
    fontWeight: 'bold',
    color: '#555'
  },
  activeTagText: {
    color: 'black',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  featuredItemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    color: 'gray',
  },
  customizeButton: {
    backgroundColor: '#c97b41',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  customizeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  newItemButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    flex: 1,
    marginRight: 10,
    justifyContent: 'center',
  },
  newItemText: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  bulkEditButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#edeae7',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  bulkEditText: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  editButton: {
    backgroundColor: '#edeae7',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  editButtonText: {
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

export default Menu;
