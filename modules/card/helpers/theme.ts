import { ICardThemeName } from '../types/ICardThemeName';
import { ICardTheme } from '../types/ICardTheme';

const themes: { [key in ICardThemeName]?: ICardTheme } = {
  white: {
    cardColor: 'white',
    textColor: 'black',
  },
  purple: {
    cardColor: '#9333ea',
    textColor: '#faf5ff',
  },
  red: {
    cardColor: '#e11d48',
    textColor: '#fff1f2',
  },
  green: {
    cardColor: '#10b981',
    textColor: '#ecfdf5',
  },
};

export const getTheme = (theme: ICardThemeName): ICardTheme => {
  return themes[theme] as ICardTheme;
};
