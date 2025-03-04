import { getFlightData, filterRoutes } from '../models/flightModel';
import { calculateTotalPrice } from '../utils/priceCalculator';

export const getRoutes = async (req: any, res: any)=> {
  const { source, destination, date } = req.query;

  if (!source || !destination || !date) {
    return res.status(400).json({ error: 'Please Enter all the details' });
  }

  try {
    const data = await getFlightData();
    const routes = filterRoutes(data, source as string, destination as string, date as string);

    if (routes.length === 0) {
      return res.status(404).json({ error: 'No flights available' });
    }

    const airlineData = routes.map((route: any) => {
      return {
        airline: route.airline,
        price: route.price,
        departure_time: route.departure_time,
        arrival_time: route.arrival_time,
        remaining_seats_percentage: route.remainingSeatsPercentage,
      };
    });

    return res.json(airlineData);
  } catch (error) {
    console.error('Error in reading data of file', error);
    return res.status(500).json({ error: 'Error' });
  }
};

export const getPassengerDetails = async (req: any, res: any) => {
  const { source, destination, date, adults, children, infants, luggage } = req.query;

  if (!source || !destination || !date || !adults || !children || !infants || !luggage) {
    return res.status(400).json({ error: 'Please enter details' });
  }

  try {
    const data = await getFlightData();
    const routes = filterRoutes(data, source as string, destination as string, date as string);

    if (routes.length === 0) {
      return res.status(404).json({ error: 'No flights available' });
    }

    const airlineData = routes.map((route: any) => {
      const basePrice = parseFloat(route.price.replace('₹', '').replace(',', ''));
      const totalPrice = calculateTotalPrice(basePrice, parseInt(adults as string), parseInt(children as string), parseInt(infants as string), parseInt(luggage as string));

      return {
        airline: route.airline,
        price: `₹${totalPrice}`,
        departure_time: route.departure_time,
        arrival_time: route.arrival_time,
        adults,
        children,
        infants,
        luggage,
        totalPrice
      };
    });

    return res.json(airlineData);
  } catch (error) {
    console.error('Error reading flight data:', error);
    return res.status(500).json({ error: 'Error' });
  }
};
