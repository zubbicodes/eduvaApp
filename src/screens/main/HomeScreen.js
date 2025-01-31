import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, Student!</Text>
          <Text style={styles.subGreeting}>What would you like to explore today?</Text>
        </View>

        {/* Search Bar */}
        <TouchableOpacity style={styles.searchBar}>
          <Text style={styles.searchText}>Search scholarships, materials...</Text>
        </TouchableOpacity>

        {/* Quick Access Grid */}
        <View style={styles.quickAccessGrid}>
          <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.gridItemText}>Scholarships</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.gridItemText}>Study Material</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.gridItemText}>Govt. Schemes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.gridItemText}>Internships</Text>
          </TouchableOpacity>
        </View>

        {/* Upcoming Deadlines */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Deadlines</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Fulbright Scholarship</Text>
            <Text style={styles.cardDeadline}>Deadline: 30 May 2024</Text>
          </View>
        </View>

        {/* Recent Study Materials */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Study Materials</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Advanced Mathematics</Text>
            <Text style={styles.cardSubtitle}>Grade 12 • New</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  searchBar: {
    margin: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  searchText: {
    color: '#666',
  },
  quickAccessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    gap: 10,
  },
  gridItem: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    margin: 5,
  },
  gridItemText: {
    textAlign: 'center',
    fontWeight: '600',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardDeadline: {
    color: '#666',
    marginTop: 5,
  },
  cardSubtitle: {
    color: '#666',
    marginTop: 5,
  },
});

export default HomeScreen; 