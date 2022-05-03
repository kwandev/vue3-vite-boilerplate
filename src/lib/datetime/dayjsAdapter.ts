import dayjs, { Dayjs } from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(timezone);
dayjs.extend(utc);

import type DateTime from './dateTime';

export default class DayjsAdapter implements DateTime {
  today(): string {
    return dayjs().format();
  }

  todayUTC(): string {
    return dayjs().utc().format();
  }

  format(date: Date | string, format: string, prevFormat?: string): string {
    if (!!prevFormat) {
      return dayjs(date, prevFormat).format(format);
    }

    return dayjs(date).format(format);
  }
}
