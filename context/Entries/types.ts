import { EntryStatus } from '../../types';

export type UpdateEntryProps = {
  _id: string;
  description?: string;
  status?: EntryStatus;
};
