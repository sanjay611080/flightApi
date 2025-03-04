# Flight API

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Setup Instructions](#setup-instructions)
3. [API Routes and Usage](#api-routes-and-usage)
4. [Mock Data](#mock-data)
5. [Testing API on Vercel](#testing-api-on-vercel)
6. [How the API Works](#how-the-api-works)

---

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building the API.
- **TypeScript**: Typed superset of JavaScript to enhance the development process.
- **fs (File System)**: For reading flight data stored in JSON files.
- **path**: To handle and transform file paths.
- **Cors**: To enable cross-origin requests for development.
- **Vercel**: Platform for hosting and deploying the API.

---

## Setup Instructions

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/flight-api.git

2. **Navigate to the project folder**;
   ```bash
   cd flight-api
   
3. **Install Dependencies**;
   ```bash
   npm install
   
4. **Run the server**;
   ```bash
   npm run dev



## API Routes and Usage
## The API has the following endpoints:
1. /api/routes
Method: GET
Description: Fetch available flight routes between the source and destination on a specific date.
Query Parameters:
source (required): Departure city (e.g., "Delhi").
destination (required): Destination city (e.g., "Mumbai").
date (required): Flight date in the format "YYYY-MM-DD".
Example:
GET /api/routes?source=Delhi&destination=Mumbai&date=2023-04-15

2. /api/passengers
Method: GET
Description: Fetch flight routes and calculate the total price based on the number of passengers (adults, children, infants) and luggage.
Query Parameters:
source (required): Departure city (e.g., "Delhi").
destination (required): Destination city (e.g., "Mumbai").
date (required): Flight date in the format "YYYY-MM-DD".
adults (required): Number of adults.
children (required): Number of children.
infants (required): Number of infants.
luggage (required): Number of luggage pieces.
Example:
GET /api/passengers?source=Delhi&destination=Mumbai&date=2023-04-15&adults=2&children=1&infants=1&luggage=2

## Mock Data
Mock flight data is stored in the data/data.json file. This file contains the following attributes for each flight route:
source: Departure city.
destination: Arrival city.
date: Date of the flight.
airline: The airline company.
price: Price of the ticket (in INR).
departure_time: Time of departure.
arrival_time: Time of arrival.
remaining_seats_percentage: Percentage of remaining seats.

## DEPLOYED ON VERCEL
LINK: https://flight-api-two.vercel.app/


## TO CHECK THE API ROUTES USE THE FOLLOWING LINKS
Get Routes (Fetch available routes between source and destination):
Request URL: https://flight-api-two.vercel.app/api/routes?source=Delhi&destination=Mumbai&date=2023-04-15

Get Passenger Details (Calculate price based on passengers and luggage):
Request URL: https://flight-api-two.vercel.app/api/passengers?source=Delhi&destination=Mumbai&date=2023-04-15&adults=2&children=1&infants=1&luggage=2
