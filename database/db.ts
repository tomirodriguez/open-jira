import mongoose, { ConnectionStates } from 'mongoose';

type MongoConnection = {
  connectionState: ConnectionStates;
};

const mongoConnection: MongoConnection = {
  connectionState: ConnectionStates.disconnected,
};

export const connect = async () => {
  if (mongoConnection.connectionState === ConnectionStates.connected) {
    console.log('CONECTADO');
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.connectionState = mongoose.connections[0].readyState;

    if (mongoConnection.connectionState === ConnectionStates.connected) {
      console.log('Usando conexion anterior');
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URL || '');

  mongoConnection.connectionState = ConnectionStates.connected;
  console.log('Conectado a MongoDB:', process.env.MONGO_URL);
};

export const disconnect = async () => {
  if (mongoConnection.connectionState === ConnectionStates.disconnected) return;

  await mongoose.disconnect();
  mongoConnection.connectionState = ConnectionStates.disconnected;
  console.log('Desconectado de MongoDB');
};
