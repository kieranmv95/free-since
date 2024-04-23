import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  colors,
  radius,
  spacing,
  text,
} from '../../design-system/helpers/variables';

import { ICardThemeName } from '../types/ICardThemeName';
import { getTheme } from '../helpers/theme';
import { calculateDisplay } from '../helpers/calculateDisplay';

type CardProps = {
  title: string;
  date: Date;
  theme: ICardThemeName;
};

export const Card = ({ title, date, theme }: CardProps) => {
  const [dateFormat, setDateFormat] = useState(calculateDisplay(date));
  const styles = getTheme(theme);

  setTimeout(() => {
    const newDateFormat = calculateDisplay(date);
    if (newDateFormat !== dateFormat) {
      setDateFormat(newDateFormat);
    }
  }, 1000);

  return (
    <TouchableOpacity>
      <View style={{ backgroundColor: styles.cardColor, ...cardStyles.card }}>
        <Text style={{ color: styles.textColor, ...cardStyles.number }}>
          {dateFormat.value}
        </Text>
        <Text style={{ color: styles.textColor }}>{dateFormat.label}</Text>
      </View>
      <View style={cardStyles.description}>
        <Text style={cardStyles.descriptionText}>{title}</Text>
        <Text style={cardStyles.descriptionText}>{date.toDateString()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const cardStyles = StyleSheet.create({
  card: {
    padding: spacing['4'],
    borderRadius: radius.lg,
  },
  number: {
    fontSize: text.size.xl4,
    fontWeight: 'bold',
  },
  description: {
    marginTop: spacing['2'],
  },
  descriptionText: {
    color: colors.thom,
  },
});
