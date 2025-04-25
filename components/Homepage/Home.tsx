import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from './Header';
import ContentPage from './Contentpage';
import DownProductPage from './Downproduct';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <ContentPage />
        <DownProductPage />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Home;