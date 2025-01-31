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

// Dummy forum data
const forumPosts = [
  {
    id: '1',
    title: 'Tips for Fulbright Scholarship Application',
    body: 'Here are some key tips that helped me secure the Fulbright scholarship. First, start your application early - at least 3 months before the deadline. Focus on your statement of purpose and get it reviewed by multiple people...',
    author: 'Sarah M.',
    category: 'Scholarships',
    replies: 23,
    upvotes: 45,
    timeAgo: '2h ago',
    isVerified: true,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000', // Example image URL
  },
  {
    id: '2',
    title: 'Study Group for Advanced Mathematics',
    body: 'Looking to form a study group for Advanced Calculus and Linear Algebra. We can meet twice a week online to solve problems and prepare for upcoming exams. Anyone interested?',
    author: 'John D.',
    category: 'Study Groups',
    replies: 15,
    upvotes: 32,
    timeAgo: '5h ago',
    isVerified: false,
  },
  {
    id: '3',
    title: 'Experience with UK University Applications',
    author: 'Emma W.',
    category: 'Admissions',
    replies: 56,
    upvotes: 89,
    timeAgo: '1d ago',
    isVerified: true,
  },
  {
    id: '4',
    title: 'Need Help with Physics Problem Set',
    author: 'Mike R.',
    category: 'Homework Help',
    replies: 8,
    upvotes: 12,
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
            <Text style={styles.postBody} numberOfLines={3}>
              {post.body}
            </Text>
            {post.image && (
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: post.image }}
                  style={styles.postImage}
                  resizeMode="cover"
                />
              </View>
            )}
            <View style={styles.authorSection}>
              <Text style={styles.authorName}>
                {post.author}
                {post.isVerified && (
                  <Ionicons name="checkmark-circle" size={14} color="#6366f1" />
                )}
              </Text>
            </View>
            <View style={styles.interactionButtons}>
              <View style={styles.voteButtons}>
                <TouchableOpacity style={styles.interactionButton}>
                  <Ionicons name="chevron-up" size={24} color="#6b7280" />
                  <Text style={styles.interactionButtonText}>{post.upvotes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.interactionButton}>
                  <Ionicons name="chevron-down" size={24} color="#6b7280" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.interactionButton}>
                <Ionicons name="chatbubble-outline" size={20} color="#6b7280" />
                <Text style={styles.interactionButtonText}>{post.replies}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.interactionButton}>
                <Ionicons name="share-social-outline" size={20} color="#6b7280" />
              </TouchableOpacity>
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
  postBody: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
    marginBottom: 12,
  },
  imageContainer: {
    marginBottom: 12,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f4f4f5',
  },
  postImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#f4f4f5',
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
  voteButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  interactionButtons: {
    flexDirection: 'row',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#f4f4f5',
    gap: 20,
  },
  interactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 4,
  },
  interactionButtonText: {
    color: '#6b7280',
    fontSize: 14,
  },
}); 