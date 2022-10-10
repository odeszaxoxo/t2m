import { atom } from 'recoil';

interface IDictionaryAtom {}

const dictionaryAtom = atom({
  key: 'dictionaryAtom',
  default: null as IDictionaryAtom | null,
});

export default dictionaryAtom;
