import fs from 'fs';
import path from 'path';

const dataPath = path.join(__dirname, '../data/data.json');

export const getFlightData = async () => {
  try {
    const data = await fs.promises.readFile(dataPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error('Error reading flight data');
  }
};

export const filterRoutes = (data: any[], source: string, destination: string, date: string) => {
  return data.filter((route: any) =>
    route.source.toLowerCase() === source.toLowerCase() &&
    route.destination.toLowerCase() === destination.toLowerCase() &&
    route.date === date
  );
};
