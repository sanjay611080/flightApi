export const calculateTotalPrice = (
    basePrice: number, 
    adults: number, 
    children: number, 
    infants: number, 
    luggage: number
  ) => {
    const childPrice = basePrice * 0.75; 
    const infantPrice = basePrice * 0.15; 
    
    const totalAdultPrice = adults * basePrice;
    const totalChildPrice = children * childPrice;
    const totalInfantPrice = infants * infantPrice;
    const luggageCost = luggage * 500; 
    
    return totalAdultPrice + totalChildPrice + totalInfantPrice + luggageCost;
  };
  