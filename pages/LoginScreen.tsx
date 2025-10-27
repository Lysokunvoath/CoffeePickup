
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.logoContainer}>
          <View style={styles.logoBackground}>
            <Text style={styles.logoLetter}>C</Text>
          </View>
          <Text style={styles.logoText}>Coffee Pickup</Text>
        </View>
        <Text style={styles.title}>Pick up better coffee</Text>
        <Text style={styles.subtitle}>Order ahead, skip the line, and get on with your day.</Text>
      </View>

      <View style={styles.imageCard}>
        <Image source={require('../assets/image.png')} style={styles.coffeeImage} />
        <View style={styles.imageTextContainer}>
            <Text style={styles.imageCardText}>Secure payments via PayWay. Real-time order updates and easy pickup at your favorite shops.</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.continueAsContainer}>
            <Text style={styles.continueAsTitle}>Continue as</Text>
            <View style={styles.optionsContainer}>
                <View style={styles.option}>
                    <Text style={styles.optionTitle}>Customer</Text>
                    <Text style={styles.optionSubtitle}>Browse shops, order ahead, track pickup.</Text>
                    <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('CusHome')}>
                        <Text style={styles.signInButtonText}>Sign in as Customer</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.option}>
                    <Text style={styles.optionTitle}>Coffee Shop Owner</Text>
                    <Text style={styles.optionSubtitle}>Manage menu, accept orders, payouts.</Text>
                    <TouchableOpacity style={styles.signInButton}>
                        <Text style={styles.signInButtonText}>Sign in as Owner</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.option}>
                    <Text style={styles.optionTitle}>Admin</Text>
                    <Text style={styles.optionSubtitle}>Monitor performance, users, and shops.</Text>
                    <TouchableOpacity style={styles.signInButton}>
                        <Text style={styles.signInButtonText}>Sign in as Admin</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.option}>
                    <Text style={styles.optionTitle}>PayWay Linked</Text>
                    <Text style={styles.optionSubtitle}>Secure payments and receipts.</Text>
                    <TouchableOpacity style={styles.aboutButton}>
                        <Text style={styles.aboutButtonText}>About PayWay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>

      <Text style={styles.orText}>Or</Text>

      <View style={styles.card}>
        <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue with phone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue with email link</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.secureCheckoutTitle}>Secure Checkout</Text>
        <Text style={styles.secureCheckoutSubtitle}>Payments processed by PayWay. Your data is encrypted and never stored on device.</Text>
        <View style={styles.tagsContainer}>
            <View style={styles.tag}><Text style={styles.tagText}>PCI-DSS</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>Biometric login</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>Pickup ETA</Text></View>
        </View>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#FDF9F3', // Light cream background
  },
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    width: '100%',
    maxWidth: 400,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  logoBackground: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#A0522D', // Sienna brown
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoLetter: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 24,
  },
  imageCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
    overflow: 'hidden',
    marginBottom: 20,
  },
  coffeeImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  imageTextContainer: {
    padding: 20,
  },
  imageCardText: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    lineHeight: 22,
  },
  continueAsContainer: {
    width: '100%',
  },
  continueAsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'left',
    color: '#333',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  option: {
    width: '48%',
    backgroundColor: '#F8F8F8',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#444',
  },
  optionSubtitle: {
    fontSize: 13,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
    height: 40,
    lineHeight: 18,
  },
  signInButton: {
    backgroundColor: '#A0522D', // Sienna brown
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  aboutButton: {
    backgroundColor: '#F5E5D5',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  aboutButtonText: {
    color: '#A0522D', // Sienna brown
    fontSize: 14,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    color: '#888',
    marginVertical: 15,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1.5,
    borderColor: '#D3D3D3',
  },
  continueButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
  secureCheckoutTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    alignSelf: 'flex-start',
    color: '#333',
  },
  secureCheckoutSubtitle: {
    fontSize: 15,
    color: '#666',
    marginBottom: 20,
    alignSelf: 'flex-start',
    lineHeight: 22,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
  },
  tag: {
    backgroundColor: '#EFEFEF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    fontSize: 13,
    color: '#555',
  },
});
