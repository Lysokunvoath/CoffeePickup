import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '../../App';

const CartScreen = ({ navigation }: { navigation: any }) => {
  const { cartItems } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const renderHeader = () => (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <TouchableOpacity style={styles.payWayButton}>
          <Ionicons name="shield-checkmark-outline" size={16} color="#333" />
          <Text style={styles.payWayButtonText}>PayWay</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="card-outline" size={24} color="#333" />
          <Text style={styles.cardTitle}>Checkout • PayWay</Text>
          <Text style={styles.totalAmount}>${calculateTotal()}</Text>
        </View>
        <Text style={styles.cardSubtitle}>Face ID is supported on iPhone 16 Pro Max.</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="location-outline" size={24} color="#333" />
          <Text style={styles.cardTitle}>Pickup Details</Text>
        </View>
        <View style={styles.pickupDetails}>
          <View>
            <Text style={styles.pickupShop}>Main Street Cafe</Text>
            <Text style={styles.pickupInfo}>Ready in 6-10 min • Order under John</Text>
          </View>
          <TouchableOpacity style={styles.changeButton}>
            <Text style={styles.changeButtonText}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="card-outline" size={24} color="#333" />
          <Text style={styles.cardTitle}>Payment Method</Text>
        </View>
        <TouchableOpacity style={styles.paymentMethod}>
          <View style={styles.cardIcon}>
            <Text>💳</Text>
          </View>
          <View style={styles.paymentMethodInfo}>
            <Text style={styles.paymentMethodText}>Visa •••• 4242</Text>
            <Text style={styles.paymentMethodExpiry}>Exp 04/28 • Default via PayWay</Text>
          </View>
          <Feather name="chevron-right" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="cart-outline" size={24} color="#333" />
          <Text style={styles.cardTitle}>Items</Text>
        </View>
        {cartItems.length > 0 ? (
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name} • {item.size}</Text>
                  <Text style={styles.itemMods}>{item.milk} milk • {item.ice} ice</Text>
                </View>
                <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
              </View>
            )}
          />
        ) : (
          <Text style={styles.emptyCartText}>Your cart is empty.</Text>
        )}
        <View style={styles.itemFooter}>
          <Text style={styles.itemCount}>{cartItems.length} item(s)</Text>
          <TouchableOpacity style={styles.editCartButton} onPress={() => navigation.navigate('Menu')}>
            <Feather name="edit-2" size={16} color="#333" />
            <Text style={styles.editCartButtonText}>Edit cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );

  const renderFooter = () => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons name="document-text-outline" size={24} color="#333" />
        <Text style={styles.cardTitle}>Order Summary</Text>
      </View>
      {cartItems.map((item) => (
        <View key={item.id} style={styles.summaryRow}>
          <Text style={styles.summaryText}>{item.name} ({item.quantity})</Text>
          <Text style={styles.summaryText}>${(item.price * item.quantity).toFixed(2)}</Text>
        </View>
      ))}
      <View style={styles.summaryTotal}>
        <Text style={styles.summaryTotalText}>Total</Text>
        <Text style={styles.summaryTotalText}>${calculateTotal()}</Text>
      </View>
      <View style={styles.securePaymentInfo}>
        <Ionicons name="shield-checkmark-outline" size={16} color="#8B4513" />
        <Text style={styles.securePaymentText}>Your payment is processed securely by PayWay.</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        data={[]}
        renderItem={null}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={20} color="#333" />
          <Text style={styles.backButtonText}>Back to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay ${calculateTotal()}</Text>
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
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  payWayButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#EFEFEF',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  payWayButtonText: {
    marginLeft: 5,
    fontWeight: '600',
    color: '#333',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginHorizontal: 15,
    marginTop: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    flex: 1,
    color: '#333',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  pickupDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickupShop: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  pickupInfo: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  changeButton: {
    borderColor: '#EFEFEF',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  changeButtonText: {
    fontWeight: '600',
    color: '#333',
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 15,
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentMethodInfo: {
    flex: 1,
    marginLeft: 15,
  },
  paymentMethodText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  paymentMethodExpiry: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  itemMods: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
  },
  itemCount: {
    fontSize: 14,
    color: '#666',
  },
  editCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#EFEFEF',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  editCartButtonText: {
    marginLeft: 5,
    fontWeight: '600',
    color: '#333',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
    color: '#666',
  },
  summaryTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
  },
  summaryTotalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  securePaymentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5E5D5',
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },
  securePaymentText: {
    marginLeft: 10,
    fontSize: 12,
    color: '#8B4513',
    fontWeight: '600',
  },
  authMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  authSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  useFaceIdButton: {
    backgroundColor: '#EFEFEF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  useFaceIdButtonText: {
    fontWeight: 'bold',
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  payButton: {
    backgroundColor: '#8B4513',
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  payButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  emptyCartText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginVertical: 20,
  },
});

export default CartScreen;
