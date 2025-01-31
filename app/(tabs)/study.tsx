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

// Dummy data for study materials
const studyMaterials = [
  {
    id: '1',
    title: 'Advanced Mathematics',
    subject: 'Mathematics',
    grade: '12',
    type: 'Notes',
    lastUpdated: '2 days ago',
    downloads: 1200,
  },
  {
    id: '2',
    title: 'Physics Formulas',
    subject: 'Physics',
    grade: '12',
    type: 'Reference',
    lastUpdated: '1 week ago',
    downloads: 850,
  },
  {
    id: '3',
    title: 'Chemistry Lab Manual',
    subject: 'Chemistry',
    grade: '12',
    type: 'Lab Work',
    lastUpdated: '3 days ago',
    downloads: 650,
  },
  {
    id: '4',
    title: 'Biology Diagrams',
    subject: 'Biology',
    grade: '12',
    type: 'Visual Aid',
    lastUpdated: '5 days ago',
    downloads: 920,
  },
];

export default function Study() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Study Materials</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={24} color="#6366f1" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search-outline" size={20} color="#666" />
        <TouchableOpacity style={styles.searchBar} activeOpacity={0.7}>
          <Text style={styles.searchText}>Search study materials...</Text>
        </TouchableOpacity>
      </View>

      {/* Subject Filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
      >
        {['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology'].map((subject) => (
          <TouchableOpacity
            key={subject}
            style={[
              styles.filterChip,
              subject === 'All' && styles.activeFilterChip,
            ]}
          >
            <Text
              style={[
                styles.filterChipText,
                subject === 'All' && styles.activeFilterChipText,
              ]}
            >
              {subject}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Study Materials List */}
      <ScrollView style={styles.materialsContainer}>
        {studyMaterials.map((material) => (
          <TouchableOpacity key={material.id} style={styles.materialCard}>
            <View style={styles.materialIcon}>
              <Ionicons name="document-text" size={24} color="#6366f1" />
            </View>
            <View style={styles.materialInfo}>
              <Text style={styles.materialTitle}>{material.title}</Text>
              <Text style={styles.materialSubject}>
                {material.subject} • Grade {material.grade}
              </Text>
              <View style={styles.materialStats}>
                <Text style={styles.materialType}>{material.type}</Text>
                <Text style={styles.materialDownloads}>
                  {material.downloads} downloads
                </Text>
              </View>
            </View>
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
  materialsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  materialCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  materialIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#f4f4f5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  materialInfo: {
    flex: 1,
  },
  materialTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  materialSubject: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  materialStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  materialType: {
    fontSize: 12,
    color: '#6366f1',
    backgroundColor: '#ede9fe',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  materialDownloads: {
    fontSize: 12,
    color: '#6b7280',
  },
}); 