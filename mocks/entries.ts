import { v4 as uuid } from 'uuid';
import { Entry } from '../types';

export const ENTRIES_MOCK: Entry[] = [
  {
    _id: uuid(),
    description:
      'Officia aliquip et veniam ut voluptate enim do cupidatat culpa dolore officia qui sit do.',
    status: 'pending',
    createdAt: Date.now(),
  },
  {
    _id: uuid(),
    description:
      'Qui non cupidatat laboris eiusmod ullamco eiusmod do sunt enim esse.',
    status: 'pending',
    createdAt: Date.now(),
  },
  {
    _id: uuid(),
    description:
      'Labore eiusmod ea proident cillum veniam reprehenderit ad tempor tempor.',
    status: 'in-progress',
    createdAt: Date.now() - 10000,
  },
  {
    _id: uuid(),
    description: 'Exercitation magna pariatur aliquip cupidatat labore qui eu.',
    status: 'finished',
    createdAt: Date.now() - 100000,
  },
];
