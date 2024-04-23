import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { colors, text } from '../../helpers/variables';

export const P = ({ style, children, ...rest }: TextProps) => (
  <Text style={{ ...styles.text, ...(style as TextStyle) }} {...rest}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: text.size.base,
    color: colors.thom,
  },
});
