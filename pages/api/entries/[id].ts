import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data =
  | {
      message: string;
    }
  | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: `El id ${id} no es valido.` });
  }

  switch (req.method) {
    case 'PATCH':
      return updateEntry(req, res);
    case 'GET':
      return getEntry(req, res);

    default:
      return res.status(400).json({ message: `Metodo no existente.` });
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  try {
    await db.connect();
    const entryToUpdate = await Entry.findById(id);

    if (!entryToUpdate)
      return res
        .status(400)
        .json({ message: `No hay entrada con el id ${id}` });

    const {
      description = entryToUpdate.description,
      status = entryToUpdate.status,
    } = req.body;

    entryToUpdate.description = description;
    entryToUpdate.status = status;
    await entryToUpdate.save();

    res.status(200).json(entryToUpdate);
  } catch (error) {
    return res.status(500).json({ message: 'Algo salio mal' });
  } finally {
    await db.disconnect();
  }
};

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  try {
    await db.connect();
  } catch (error) {
    return res.status(500).json({ message: 'Algo salio mal' });
  } finally {
    await db.disconnect();
  }

  const entry = await Entry.findById(id);

  if (!entry)
    return res.status(400).json({ message: `No hay entrada con el id ${id}` });

  res.status(200).json(entry);
};
