import { StatusBar } from 'expo-status-bar';
import { Container, H1 } from '../modules/design-system';
import { Card } from '../modules/card';
import { ICardThemeName } from '../modules/card';

const mockData: {
  title: string;
  date: string;
  theme: ICardThemeName;
}[] = [
  {
    title: 'Birth',
    date: '1995-05-22',
    theme: 'red',
  },
  {
    title: 'George Birth',
    date: '2022-03-17',
    theme: 'purple',
  },
];

export default function Index() {
  return (
    <Container>
      <H1>Your counters</H1>
      <StatusBar style="auto" />
      {mockData.map(counter => (
        <Card
          key={counter.title}
          title={counter.title}
          date={new Date(counter.date)}
          theme={counter.theme}
        />
      ))}
    </Container>
  );
}
