import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ItemCustomize = ({ route, navigation }) => {
  const { item } = route.params;
  const [size, setSize] = useState('Medium');
  const [milk, setMilk] = useState('Whole');
  const [sweetness, setSweetness] = useState('50%');
  const [ice, setIce] = useState('Regular');
  const [addons, setAddons] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addonPrices = {
    'Extra Shot': 1.00,
    'Vanilla Syrup': 0.60,
    'Caramel Drizzle': 0.60,
  };

  const calculateTotal = () => {
    let total = item.price;
    if (milk === 'Oat') total += 0.50;
    if (milk === 'Almond') total += 0.50;
    addons.forEach(addon => {
      total += addonPrices[addon];
    });
    return (total * quantity).toFixed(2);
  };

  const toggleAddon = (addon) => {
    if (addons.includes(addon)) {
      setAddons(addons.filter(a => a !== addon));
    } else {
      setAddons([...addons, addon]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Coffee Pickup</Text>
          <View style={styles.timeContainer}>
            <Text>6-10 min</Text>
          </View>
        </View>

        <View style={styles.itemContainer}>
          <Image source={item.image} style={styles.itemImage} />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemPrice}>From ${item.price.toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.optionsContainer}>
          <Text style={styles.optionTitle}>Size</Text>
          <View style={styles.optionButtons}>
            {['Small', 'Medium', 'Large'].map(s => (
              <TouchableOpacity key={s} style={[styles.optionButton, size === s && styles.selectedOption]} onPress={() => setSize(s)}>
                <Text style={[styles.optionText, size === s && styles.selectedOptionText]}>{s}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.optionsContainer}>
          <Text style={styles.optionTitle}>Milk</Text>
          <View style={styles.optionButtons}>
            {['Whole', 'Skim', 'Oat (+$0.50)', 'Almond (+$0.50)'].map(m => (
              <TouchableOpacity key={m} style={[styles.optionButton, milk === m.split(' ')[0] && styles.selectedOption]} onPress={() => setMilk(m.split(' ')[0])}>
                <Text style={[styles.optionText, milk === m.split(' ')[0] && styles.selectedOptionText]}>{m}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.optionsContainer}>
          <Text style={styles.optionTitle}>Sweetness</Text>
          <View style={styles.optionButtons}>
            {['0%', '50%', '100%'].map(s => (
              <TouchableOpacity key={s} style={[styles.optionButton, sweetness === s && styles.selectedOption]} onPress={() => setSweetness(s)}>
                <Text style={[styles.optionText, sweetness === s && styles.selectedOptionText]}>{s}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.optionsContainer}>
          <Text style={styles.optionTitle}>Ice</Text>
          <View style={styles.optionButtons}>
            {['Regular', 'Light', 'No Ice'].map(i => (
              <TouchableOpacity key={i} style={[styles.optionButton, ice === i && styles.selectedOption]} onPress={() => setIce(i)}>
                <Text style={[styles.optionText, ice === i && styles.selectedOptionText]}>{i}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.addonsContainer}>
          <Text style={styles.addonsTitle}>Add-ons</Text>
          {Object.keys(addonPrices).map(addon => (
            <TouchableOpacity key={addon} style={styles.addon} onPress={() => toggleAddon(addon)}>
              <View style={[styles.checkbox, addons.includes(addon) && styles.checkedCheckbox]} />
              <Text style={styles.addonText}>{addon}</Text>
              <Text style={styles.addonPrice}>+${addonPrices[addon].toFixed(2)}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsTitle}>Special instructions</Text>
          <TextInput
            style={styles.input}
            placeholder="Add a note for the barista"
          />
        </View>

        <View style={styles.quantityContainer}>
            <View style={styles.quantitySelector}>
                <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
                    <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                    <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
            </View>
          <Text style={styles.totalText}>Total ${calculateTotal()}</Text>
        </View>

        <View style={styles.checkoutContainer}>
            <Text style={styles.checkoutTitle}>PayWay secure checkout</Text>
            <Text style={styles.checkoutDescription}>Your payment will be processed via PayWay. You can confirm with Face ID on iPhone 16 Pro Max.</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add to cart - ${calculateTotal()}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    margin: 15,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  itemDetails: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    color: 'gray',
    marginVertical: 5,
  },
  itemPrice: {
    fontWeight: 'bold',
  },
  optionsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionButton: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
  },
  selectedOption: {
    backgroundColor: '#C4A484',
  },
  optionText: {
    fontWeight: 'bold',
  },
  selectedOptionText: {
    color: 'white',
  },
  addonsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  addonsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginRight: 10,
  },
  checkedCheckbox: {
    backgroundColor: '#C4A484',
    borderColor: '#C4A484',
  },
  addonText: {
    flex: 1,
    fontSize: 16,
  },
  addonPrice: {
    fontSize: 16,
  },
  instructionsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 10,
    height: 80,
    textAlignVertical: 'top',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
  },
  quantityButton: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutContainer: {
    padding: 15,
    marginHorizontal: 15,
  },
  checkoutTitle: {
    fontWeight: 'bold',
  },
  checkoutDescription: {
    color: 'gray',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: 'white',
  },
  backButton: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  backButtonText: {
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#8B4513',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ItemCustomize;
