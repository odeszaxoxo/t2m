import { atom } from 'recoil';
import Utilities from 'Utilities';

export interface IUser {
  logged: boolean;
  gender?: number;
  langs?: string[];
  link?: string;
  name?: string;
  roles?: number[];
  timeZone?: string;
  userId?: number;
  email?: string;
}

const userAtom = atom({
  key: 'user',
  default: {
    logged: !!Utilities.apiTokenStorage.get(),
  } as IUser,
});

export default userAtom;
