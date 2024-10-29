import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const surveyAtom = atomWithStorage('surveyData');
export const forMyselfAtom = atom(false);
