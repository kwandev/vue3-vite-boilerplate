import type DateTime from './DateTime';

import Adapter from './dayjsAdapter';
// import Adapter from './momentAdapter';
// import Adapter from './datFnsAdapter';

const instance: DateTime = new Adapter();

export const getToday = () => instance.today();
export const getTodayUTC = () => instance.todayUTC();
export const getDateFormat = (date: Date | string, format: string, prevFormat?: string) => {
  return instance.format(date, format, prevFormat);
};
