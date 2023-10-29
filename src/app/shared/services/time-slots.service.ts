import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeSlotsService {

  constructor() {
  }

  // findAvailability(start: any, end: any, timespan: any, eventsArray: any) {
  //   return this.availability(start, end, timespan, this.mergeDates(eventsArray));
  // }
  //
  // dateClone(val: any) {
  //   return new Date(val);
  // }
  //
  // toDate(val: any) {
  //   if (val instanceof Date) return val;
  //   return new Date(val);
  // }
  //
  // dateExtend(date: any, timespanMS: any) {
  //   date.setTime(date.getTime() + timespanMS);
  // }
  //
  // availability(start: any, end: any, timespan: any, eventsArray: any) {
  //   const timespanMS = timespan * 1000;
  //   const timeslotStart = this.dateClone(start);
  //   const timeslotEnd = this.dateClone(start);
  //   this.dateExtend(timeslotEnd, timespanMS);
  //
  //   const availArray = [];
  //   while (timeslotStart < this.toDate(end)) {
  //     const found = eventsArray.some(this.eventOverlap);
  //     if (found === false) {
  //       availArray.push({
  //         start: this.dateClone(timeslotStart),
  //         end: this.dateClone(timeslotEnd),
  //       });
  //     }
  //     this.dateExtend(timeslotStart, timespanMS);
  //     this.dateExtend(timeslotEnd, timespanMS);
  //   }
  //   return availArray;
  // }
  //
  // eventOverlap(time: { start: start2, end: end2 }, timeslotStart: any) {
  //   return timeslotStart >= this.toDate(start2) && timeslotStart < this.toDate(end2);
  // }
  //
  // // eslint-disable-next-line max-len
  // /* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["intervals"] }] */
  //
  // reducer(intervals, {start: startInput, end: endInput}) {
  //
  //   const found = intervals.some(this.someCallback);
  //   if (found === false) {
  //     intervals.push({start: startInput, end: endInput});
  //   }
  //   return intervals;
  // }
  //
  // someCallback(start: any, end: any) {
  //   // no overlap?
  //   if (endInput < start) {
  //     return false;
  //   }
  //   let extended = false;
  //   // extend after?
  //   if (startInput < end && endInput > end) {
  //     intervals[index].end = endInput;
  //     extended = true;
  //   }
  //   // extend before?
  //   if (startInput < start && endInput > start) {
  //     intervals[index].start = startInput;
  //     extended = true;
  //   }
  //   return extended;
  // }
  //
  // mergeDates(eventsArray: any) {
  //   return eventsArray.reduce(this.reducer, []);
  // }


}
