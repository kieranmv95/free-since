import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, spacing } from '../helpers/variables';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.rand['400'],
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing['4'],
    gap: spacing['5'],
  },
});
