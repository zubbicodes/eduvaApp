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

// Dummy forum data
const forumPosts = [
  {
    id: '1',
    title: 'Tips for Fulbright Scholarship Application',
    author: 'Sarah M.',
    category: 'Scholarships',
    replies: 23,
    likes: 45,
    timeAgo: '2h ago',
    isVerified: true,
  },
  {
    id: '2',
    title: 'Study Group for Advanced Mathematics',
    author: 'John D.',
    category: 'Study Groups',
    replies: 15,
    likes: 32,
    timeAgo: '5h ago',
    isVerified: false,
  },
  {
    id: '3',
    title: 'Experience with UK University Applications',
    author: 'Emma W.',
    category: 'Admissions',
    replies: 56,
    likes: 89,
    timeAgo: '1d ago',
    isVerified: true,
  },
  {
    id: '4',
    title: 'Need Help with Physics Problem Set',
    author: 'Mike R.',
    category: 'Homework Help',
    replies: 8,
    likes: 12,
    timeAgo: '3h ago',
    isVerified: false,
  },
];

export default function Forum() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Community Forum</Text>
        <TouchableOpacity style={styles.newPostButton}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Forum Posts */}
      <ScrollView style={styles.postsContainer}>
        {forumPosts.map((post) => (
          <TouchableOpacity key={post.id} style={styles.postCard}>
            <View style={styles.postHeader}>
              <View style={styles.authorInfo}>
                <Text style={styles.category}>{post.category}</Text>
                <Text style={styles.timeAgo}>{post.timeAgo}</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" size={20} color="#6b7280" />
              </TouchableOpacity>
            </View>
            <Text style={styles.postTitle}>{post.title}</Text>
            <View style={styles.postFooter}>
              <View style={styles.authorSection}>
                <Text style={styles.authorName}>
                  {post.author}
                  {post.isVerified && (
                    <Ionicons name="checkmark-circle" size={14} color="#6366f1" />
                  )}
                </Text>
              </View>
              <View style={styles.statsSection}>
                <View style={styles.stat}>
                  <Ionicons name="chatbubble-outline" size={14} color="#6b7280" />
                  <Text style={styles.statText}>{post.replies}</Text>
                </View>
                <View style={styles.stat}>
                  <Ionicons name="heart-outline" size={14} color="#6b7280" />
                  <Text style={styles.statText}>{post.likes}</Text>
                </View>
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
  newPostButton: {
    backgroundColor: '#6366f1',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 8,
    paddingBottom: 100,
  },
  postCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    marginTop: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  category: {
    fontSize: 12,
    color: '#6366f1',
    backgroundColor: '#ede9fe',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  timeAgo: {
    fontSize: 12,
    color: '#6b7280',
  },
  postTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  authorName: {
    fontSize: 14,
    color: '#4b5563',
  },
  statsSection: {
    flexDirection: 'row',
    gap: 12,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 12,
    color: '#6b7280',
  },
}); 