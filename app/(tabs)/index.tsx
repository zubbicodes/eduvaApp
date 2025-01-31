import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 2; // 60 = padding and gap

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>welcome to eduva! 👋</Text>
            <Text style={styles.subGreeting}>What would you like to explore today?</Text>
          </View>
          <TouchableOpacity 
            style={styles.profileButton}
            onPress={() => router.push('/profile')}
          >
            <Ionicons name="person-circle-outline" size={32} color="#6366f1" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Ionicons name="search-outline" size={20} color="#666" style={styles.searchIcon} />
          <TouchableOpacity style={styles.searchBar} activeOpacity={0.7}>
            <Text style={styles.searchText}>Search scholarships, materials...</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Active Applications</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Deadlines Today</Text>
          </View>
        </View>

        {/* Quick Access Grid */}
        <Text style={styles.sectionTitle}>Quick Access</Text>
        <View style={styles.quickAccessGrid}>
          <TouchableOpacity 
            style={styles.gridItem}
            onPress={() => router.push('/scholarships')}
          >
            <View style={[styles.iconContainer, { backgroundColor: '#e8f3ff' }]}>
              <Ionicons name="school-outline" size={24} color="#2563eb" />
            </View>
            <Text style={styles.gridItemText}>Scholarships</Text>
            <Text style={styles.gridItemSubtext}>500+ Available</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.gridItem}
            onPress={() => router.push('/study')}
          >
            <View style={[styles.iconContainer, { backgroundColor: '#fef3f2' }]}>
              <Ionicons name="book-outline" size={24} color="#dc2626" />
            </View>
            <Text style={styles.gridItemText}>Study Material</Text>
            <Text style={styles.gridItemSubtext}>1000+ Resources</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.gridItem}
            onPress={() => router.push('/govt-schemes')}
          >
            <View style={[styles.iconContainer, { backgroundColor: '#f5f3ff' }]}>
              <Ionicons name="business-outline" size={24} color="#7c3aed" />
            </View>
            <Text style={styles.gridItemText}>Govt. Schemes</Text>
            <Text style={styles.gridItemSubtext}>50+ Schemes</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.gridItem}
            onPress={() => router.push('/internships')}
          >
            <View style={[styles.iconContainer, { backgroundColor: '#ecfdf5' }]}>
              <Ionicons name="briefcase-outline" size={24} color="#059669" />
            </View>
            <Text style={styles.gridItemText}>Internships</Text>
            <Text style={styles.gridItemSubtext}>200+ Openings</Text>
          </TouchableOpacity>
        </View>

        {/* Upcoming Deadlines */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Deadlines</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllButton}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardIcon}>
                <Ionicons name="time-outline" size={20} color="#6366f1" />
              </View>
              <Text style={styles.deadlineTag}>2 days left</Text>
            </View>
            <Text style={styles.cardTitle}>Fulbright Scholarship</Text>
            <Text style={styles.cardDeadline}>Deadline: 30 May 2024</Text>
          </View>
        </View>

        {/* Recent Study Materials */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Study Materials</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllButton}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            <View style={styles.studyCard}>
              <View style={[styles.iconContainer, { backgroundColor: '#fef3f2' }]}>
                <Ionicons name="document-text-outline" size={24} color="#dc2626" />
              </View>
              <Text style={styles.cardTitle}>Advanced Mathematics</Text>
              <Text style={styles.cardSubtitle}>Grade 12 • New</Text>
            </View>
            <View style={styles.studyCard}>
              <View style={[styles.iconContainer, { backgroundColor: '#f5f3ff' }]}>
                <Ionicons name="flask-outline" size={24} color="#7c3aed" />
              </View>
              <Text style={styles.cardTitle}>Physics Notes</Text>
              <Text style={styles.cardSubtitle}>Grade 12 • Updated</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    paddingBottom: 100,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileButton: {
    padding: 4,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  subGreeting: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  searchBarContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f5',
    padding: 12,
    borderRadius: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
  },
  searchText: {
    color: '#6b7280',
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#f4f4f5',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6366f1',
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 12,
  },
  seeAllButton: {
    color: '#6366f1',
    fontSize: 14,
    fontWeight: '500',
  },
  quickAccessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    gap: 12,
  },
  gridItem: {
    width: cardWidth,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  gridItemText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  gridItemSubtext: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 4,
  },
  section: {
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
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
  cardIcon: {
    backgroundColor: '#ede9fe',
    padding: 8,
    borderRadius: 8,
  },
  deadlineTag: {
    backgroundColor: '#fee2e2',
    color: '#dc2626',
    padding: 6,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: '500',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  cardDeadline: {
    color: '#6b7280',
    marginTop: 4,
    fontSize: 14,
  },
  horizontalScroll: {
    marginLeft: -20,
  },
  studyCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    marginLeft: 20,
    width: cardWidth * 1.2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  cardSubtitle: {
    color: '#6b7280',
    marginTop: 4,
    fontSize: 14,
  },
});
