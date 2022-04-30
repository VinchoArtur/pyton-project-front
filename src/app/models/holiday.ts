export interface IHoliday {
  id: number;
  name: string;
}

export interface IHolidayWrapper extends IHoliday{
  title?: string,
  description?: string,
  imageDescription?: string,
}

export interface IHolidayMoreInfo {
  id: number,
  name: string,
  costHour: number,
  description: string,
}
