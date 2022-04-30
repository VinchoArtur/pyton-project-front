export interface IHoliday {
  id: number;
  name: string;
}

export interface IHolidayWrapper {
  id: number,
  name: string,
  title: string,
  description: string,
  imageDescription: string,
}

export interface IHolidayMoreInfo {
  id: number,
  name: string,
  costHour: number,
  description: string,
}
