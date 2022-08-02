import { isValidObjectId } from 'mongoose';
import { db } from '.';
import { Entry, IEntry } from '../models';
import { serialize } from './utils/serialize';

export const getEntryById = async (id: string): Promise<IEntry | null> => {
  if (!isValidObjectId(id)) return null;

  try {
    await db.connect();
    const entry = await Entry.findById(id).lean();
    await db.disconnect();

    return serialize(entry);
  } catch (error) {
  } finally {
    await db.disconnect();
  }

  return null;
};
