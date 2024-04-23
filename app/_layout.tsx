import { Slot } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { colors } from '../modules/design-system/helpers/variables';

export default function Layout() {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.rand['400'] }} />
      <SafeAreaView style={styles.container}>
        <View style={styles.loadedApp}>
          <Slot />
        </View>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.rand['400'] }} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadedApp: {
    flex: 1,
  },
});
