import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

// Dummy internships data
const internships = [
  {
    id: '1',
    title: 'Software Development Intern',
    company: 'Google',
    location: 'Remote',
    duration: '3 months',
    stipend: '₹50,000/month',
    deadline: 'Apr 30, 2024',
    type: 'Technical',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png',
    isBookmarked: false,
  },
  {
    id: '2',
    title: 'Data Science Intern',
    company: 'Microsoft',
    location: 'Hybrid',
    duration: '6 months',
    stipend: '₹45,000/month',
    deadline: 'May 15, 2024',
    type: 'Technical',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
    isBookmarked: true,
  },
  {
    id: '3',
    title: 'Marketing Intern',
    company: 'Amazon',
    location: 'On-site',
    duration: '4 months',
    stipend: '₹40,000/month',
    deadline: 'May 1, 2024',
    type: 'Non-Technical',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
    isBookmarked: false,
  },
];

export default function Internships() {
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
        <Text style={styles.headerTitle}>Internships</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={24} color="#6366f1" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search-outline" size={20} color="#666" />
        <TouchableOpacity style={styles.searchBar} activeOpacity={0.7}>
          <Text style={styles.searchText}>Search internships...</Text>
        </TouchableOpacity>
      </View>

      {/* Internships List */}
      <ScrollView style={styles.internshipsContainer}>
        {internships.map((internship) => (
          <TouchableOpacity key={internship.id} style={styles.internshipCard}>
            <View style={styles.cardHeader}>
              <Image source={{ uri: internship.logo }} style={styles.companyLogo} />
              <TouchableOpacity>
                <Ionicons
                  name={internship.isBookmarked ? "bookmark" : "bookmark-outline"}
                  size={24}
                  color="#6366f1"
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.internshipTitle}>{internship.title}</Text>
            <Text style={styles.companyName}>{internship.company}</Text>

            <View style={styles.detailsContainer}>
              <View style={styles.detail}>
                <Ionicons name="location-outline" size={16} color="#6b7280" />
                <Text style={styles.detailText}>{internship.location}</Text>
              </View>
              <View style={styles.detail}>
                <Ionicons name="time-outline" size={16} color="#6b7280" />
                <Text style={styles.detailText}>{internship.duration}</Text>
              </View>
            </View>

            <View style={styles.detailsContainer}>
              <View style={styles.detail}>
                <Ionicons name="cash-outline" size={16} color="#6b7280" />
                <Text style={styles.detailText}>{internship.stipend}</Text>
              </View>
              <View style={styles.detail}>
                <Ionicons name="calendar-outline" size={16} color="#6b7280" />
                <Text style={styles.detailText}>Deadline: {internship.deadline}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply Now</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  headerTitle: {
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
  internshipsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  internshipCard: {
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
  companyLogo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#f4f4f5',
  },
  internshipTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  companyName: {
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
  applyButton: {
    backgroundColor: '#6366f1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    gap: 8,
    marginTop: 4,
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