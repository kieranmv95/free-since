import moment from 'moment';

export const calculateDisplay = (date: Date) => {
  const now = moment(new Date());
  const startDate = moment(date);
  const duration = moment.duration(now.diff(startDate));

  const formatResult = (value: number, unit: string) => ({
    value: Math.floor(value),
    label: value >= 2 ? `${unit}s` : unit,
  });

  const years = duration.asYears();

  if (years >= 1) {
    return formatResult(years, 'Year');
  }

  const months = duration.asMonths();
  if (months >= 1) {
    return formatResult(months, 'Month');
  }

  const days = duration.asDays();
  if (days >= 1) {
    return formatResult(days, 'Day');
  }

  const hours = duration.asHours();
  if (hours >= 1) {
    return formatResult(hours, 'Hour');
  }

  const minutes = duration.asMinutes();
  if (minutes >= 1) {
    return formatResult(minutes, 'Minute');
  }

  const seconds = duration.asSeconds();
  return formatResult(seconds, 'Second');
};
