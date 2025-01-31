import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

// Dummy schemes data
const schemes = [
  {
    id: '1',
    title: 'Prime Minister Research Fellowship',
    ministry: 'Ministry of Education',
    amount: 'Up to ₹80,000/month',
    deadline: 'May 30, 2024',
    eligibility: [
      'GATE/NET qualified',
      'CGPA > 8.0',
      'Indian citizen',
    ],
    category: 'Research',
    isBookmarked: true,
  },
  {
    id: '2',
    title: 'National Overseas Scholarship',
    ministry: 'Ministry of Social Justice',
    amount: 'Full funding',
    deadline: 'June 15, 2024',
    eligibility: [
      'Family income < 8L',
      'Age below 35',
      'For foreign studies',
    ],
    category: 'Education',
    isBookmarked: false,
  },
  {
    id: '3',
    title: 'Credit Guarantee Fund Scheme',
    ministry: 'Ministry of MSME',
    amount: 'Up to ₹2 Cr',
    deadline: 'Ongoing',
    eligibility: [
      'Start-up age < 5 years',
      'Valid business plan',
      'Indian registration',
    ],
    category: 'Business',
    isBookmarked: false,
  },
];

export default function GovtSchemes() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Government Schemes</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={24} color="#6366f1" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search-outline" size={20} color="#666" />
        <TouchableOpacity style={styles.searchBar} activeOpacity={0.7}>
          <Text style={styles.searchText}>Search schemes...</Text>
        </TouchableOpacity>
      </View>

      {/* Schemes List */}
      <ScrollView style={styles.schemesContainer}>
        {schemes.map((scheme) => (
          <TouchableOpacity key={scheme.id} style={styles.schemeCard}>
            <View style={styles.cardHeader}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>{scheme.category}</Text>
              </View>
              <TouchableOpacity>
                <Ionicons
                  name={scheme.isBookmarked ? "bookmark" : "bookmark-outline"}
                  size={24}
                  color="#6366f1"
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.schemeTitle}>{scheme.title}</Text>
            <Text style={styles.ministryName}>{scheme.ministry}</Text>

            <View style={styles.detailsContainer}>
              <View style={styles.detail}>
                <Ionicons name="cash-outline" size={16} color="#6b7280" />
                <Text style={styles.detailText}>{scheme.amount}</Text>
              </View>
              <View style={styles.detail}>
                <Ionicons name="calendar-outline" size={16} color="#6b7280" />
                <Text style={styles.detailText}>Deadline: {scheme.deadline}</Text>
              </View>
            </View>

            <Text style={styles.eligibilityTitle}>Key Eligibility:</Text>
            <View style={styles.eligibilityContainer}>
              {scheme.eligibility.map((item, index) => (
                <View key={index} style={styles.eligibilityItem}>
                  <Ionicons name="checkmark-circle" size={16} color="#6366f1" />
                  <Text style={styles.eligibilityText}>{item}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>View Details</Text>
              <Ionicons name="arrow-forward" size={16} color="#fff" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  headerTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  filterButton: {
    padding: 8,
    backgroundColor: '#f4f4f5',
    borderRadius: 8,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f5',
    margin: 20,
    padding: 12,
    borderRadius: 12,
    gap: 8,
  },
  searchBar: {
    flex: 1,
  },
  searchText: {
    color: '#6b7280',
    fontSize: 16,
  },
  schemesContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  schemeCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryContainer: {
    backgroundColor: '#ede9fe',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  categoryText: {
    color: '#6366f1',
    fontSize: 12,
    fontWeight: '500',
  },
  schemeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  ministryName: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailText: {
    color: '#6b7280',
    fontSize: 14,
  },
  eligibilityTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  eligibilityContainer: {
    gap: 8,
    marginBottom: 16,
  },
  eligibilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  eligibilityText: {
    color: '#4b5563',
    fontSize: 14,
  },
  applyButton: {
    backgroundColor: '#6366f1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f4f4f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 