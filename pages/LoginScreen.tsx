
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SignupScreen() {
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
                    <TouchableOpacity style={styles.signInButton}>
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
    backgroundColor: '#F5F5F5',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoBackground: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6F4E37',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  logoLetter: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  imageCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
    marginBottom: 20,
  },
  coffeeImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  imageTextContainer: {
    padding: 15,
  },
  imageCardText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  continueAsContainer: {
    width: '100%',
  },
  continueAsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  option: {
    width: '48%',
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  optionSubtitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
    height: 40,
  },
  signInButton: {
    backgroundColor: '#8B4513',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
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
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  aboutButtonText: {
    color: '#8B4513',
    fontSize: 14,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },
  continueButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  continueButtonText: {
    color: '#000000',
    fontSize: 16,
  },
  secureCheckoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  secureCheckoutSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  tag: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  tagText: {
    fontSize: 12,
  },
});
