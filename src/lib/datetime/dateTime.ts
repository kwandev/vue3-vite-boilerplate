export default interface DateTime {
  today(): string;
  todayUTC(): string;
  format(date: Date | string, format: string, prevFormat?: string): string;
}
