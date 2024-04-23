import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { colors, text } from '../../helpers/variables';

export const H1 = ({ style, children, ...rest }: TextProps) => (
  <Text style={{ ...styles.text, ...(style as TextStyle) }} {...rest}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: text.size.xl3,
    color: colors.thom,
    fontWeight: '800',
  },
});
