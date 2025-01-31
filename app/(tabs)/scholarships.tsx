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

// Dummy scholarships data
const scholarships = [
  {
    id: '1',
    title: 'Fulbright Scholarship 2024',
    organization: 'Fulbright Commission',
    amount: '$50,000',
    deadline: 'May 30, 2024',
    daysLeft: 45,
    requirements: ['GPA 3.5+', 'Bachelor\'s Degree', 'IELTS 7.0'],
    category: 'International',
    isBookmarked: true,
  },
  {
    id: '2',
    title: 'STEM Excellence Award',
    organization: 'National Science Foundation',
    amount: '$25,000',
    deadline: 'April 15, 2024',
    daysLeft: 30,
    requirements: ['GPA 3.0+', 'STEM Major', 'Research Experience'],
    category: 'Academic',
    isBookmarked: false,
  },
  {
    id: '3',
    title: 'Women in Technology Grant',
    organization: 'Tech Foundation',
    amount: '$15,000',
    deadline: 'June 1, 2024',
    daysLeft: 47,
    requirements: ['Female Students', 'Computer Science Major'],
    category: 'Diversity',
    isBookmarked: true,
  },
  {
    id: '4',
    title: 'Global Leadership Program',
    organization: 'International Education Institute',
    amount: '$35,000',
    deadline: 'May 15, 2024',
    daysLeft: 30,
    requirements: ['Leadership Experience', 'Community Service'],
    category: 'Leadership',
    isBookmarked: false,
  },
];

export default function Scholarships() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Scholarships</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={24} color="#6366f1" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search-outline" size={20} color="#666" />
        <TouchableOpacity style={styles.searchBar} activeOpacity={0.7}>
          <Text style={styles.searchText}>Search scholarships...</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
      >
        {['All', 'International', 'Academic', 'Diversity', 'Leadership'].map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterChip,
              filter === 'All' && styles.activeFilterChip,
            ]}
          >
            <Text
              style={[
                styles.filterChipText,
                filter === 'All' && styles.activeFilterChipText,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Scholarships List */}
      <ScrollView style={styles.scholarshipsContainer}>
        {scholarships.map((scholarship) => (
          <TouchableOpacity key={scholarship.id} style={styles.scholarshipCard}>
            <View style={styles.cardHeader}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>{scholarship.category}</Text>
              </View>
              <TouchableOpacity>
                <Ionicons
                  name={scholarship.isBookmarked ? "bookmark" : "bookmark-outline"}
                  size={24}
                  color="#6366f1"
                />
              </TouchableOpacity>
            </View>
            
            <Text style={styles.scholarshipTitle}>{scholarship.title}</Text>
            <Text style={styles.organizationName}>{scholarship.organization}</Text>
            
            <View style={styles.detailsContainer}>
              <View style={styles.detail}>
                <Ionicons name="cash-outline" size={16} color="#6b7280" />
                <Text style={styles.detailText}>{scholarship.amount}</Text>
              </View>
              <View style={styles.detail}>
                <Ionicons name="time-outline" size={16} color="#6b7280" />
                <Text style={styles.detailText}>{scholarship.deadline}</Text>
              </View>
            </View>

            <View style={styles.requirementsContainer}>
              {scholarship.requirements.map((req, index) => (
                <View key={index} style={styles.requirementChip}>
                  <Text style={styles.requirementText}>{req}</Text>
                </View>
              ))}
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
  filtersContainer: {
    paddingHorizontal: 20,
    marginBottom: 16,
    height: 36,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: '#f4f4f5',
    borderRadius: 20,
    marginRight: 8,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeFilterChip: {
    backgroundColor: '#6366f1',
  },
  filterChipText: {
    color: '#6b7280',
    fontWeight: '500',
    fontSize: 13,
  },
  activeFilterChipText: {
    color: '#ffffff',
  },
  scholarshipsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  scholarshipCard: {
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
  scholarshipTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  organizationName: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  detailsContainer: {
    flexDirection: 'row',
    gap: 16,
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
  requirementsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  requirementChip: {
    backgroundColor: '#f4f4f5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  requirementText: {
    color: '#6b7280',
    fontSize: 12,
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
}); 