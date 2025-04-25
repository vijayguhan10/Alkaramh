import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';

type SpotlightProduct = {
  id: string;
  title: string;
  image: string;
  deliveryTime: string;
  rating: number;
  tags: string[];
};

const Downproduct: React.FC = () => {
  const [spotlightData, setSpotlightData] = useState<SpotlightProduct>({
    id: '1',
    title: 'Al Karamh Trading',
    image: 'https://media.maalaimalar.com/h-upload/2022/10/29/1783337-pulses.jpg',  
    deliveryTime: '120 - 150 mins',
    rating: 4.8,
    tags: [
      'Last 100 Orders Without Complaints',
      'Bestseller',
      'Frequently Reordered',
    ],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}>IN THE SPOTLIGHT</Text>

      <View style={styles.card}>
        <Image source={{ uri: spotlightData.image }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.time}>⏱ {spotlightData.deliveryTime}</Text>
          <Text style={styles.title}>{spotlightData.title}</Text>

          <View style={styles.tagsContainer}>
            {spotlightData.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>✓ {tag}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.rating}>
          <Text style={styles.ratingText}>{spotlightData.rating} ★</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  content: {
    padding: 12,
  },
  time: {
    position:"relative",
    bottom:26,
    right:12,
    width:120,
    borderRightWidth:7,
    borderBottomRightRadius:7,
    backgroundColor:"#ffffff",
    color: '#666',
    fontSize: 12,
    marginBottom: 4,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#e6f4f1',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 6,
    marginBottom: 6,
  },
  tagText: {
    fontSize: 12,
    color: '#333',
  },
  rating: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  ratingText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Downproduct;
