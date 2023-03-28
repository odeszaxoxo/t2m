export interface IComment {
  author: string;
  text: string;
  date: Date;
}

export interface IAppointment {
  id?: number;
  comment: IComment;
  startDate: Date;
  remove?: (date: string) => void;
  initialDate?: string;
  userZone?: string;
  link?: string;
}

export interface ISlot {
  startedat: string;
  status: number;
  id: number;
}

export interface ISvgIcon {
  color?: string;
  className?: string;
  width?: number;
  height?: number;
}

// TODO: deep props validation
