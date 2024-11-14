# Country Information App For My Test in DevelopsToday🌍

This Country Information App is for my test in DevelopsTodayis, React-based project designed to display detailed information about countries worldwide. It allows users to view a list of countries, examine specific details on each country, including population data over time, neighboring countries, and national flags. This project is structured to integrate with a backend API and leverages Next.js for seamless client and server-side rendering.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Components Overview](#components-overview)
- [API Endpoints](#api-endpoints)

## Features
- **Country List**: Browse all available countries.
- **Country Details**: View population trends, flag images, and neighboring countries.
- **Dynamic Routing**: Each country has a dedicated page.
- **Loading States**: Indicators for data fetching to enhance UX.

## Technologies
- **Frontend**: React, TypeScript, Next.js
- **Backend API**: Axios for data fetching
- **Styling**: CSS with basic classes (adjustable based on requirements)

## Setup

1. Clone the repository:
```bash
   git clone https://github.com/murilomotomatsu/DevelopsToday-FrontEnd
   cd developstoday-frontend
```

2. Install dependencies:

```bash
    npm install
```

3. Set up the backend API:

- The backend API should run locally on http://localhost:5000. (able to acess at https://github.com/murilomotomatsu/DevelopsToday-BackEnd)

- Ensure the following endpoints are available:
    GET /api/countries/available - Fetches the list of available countries.
    GET /api/countries/info/:countryCode - Fetches detailed information for a specified country.

4. Start the development server:

```bash
    npm run dev
```

5. Open the app in your browser:

```bash
    http://localhost:3000
```

## Usage
- On the homepage, view the list of countries.
- Click a country to navigate to its dedicated information page.
- Explore flag images, population trends, and neighboring countries for each selected country.

## File Structure
```bash
    .
    ├── components/
    │   ├── CountryList.tsx         # Component for listing countries
    │   └── CountryInfo.tsx         # Component for displaying detailed info on a selected country
    │
    ├── pages/
    │   └── [countryCode].tsx       # Dynamic routing for country-specific pages
    │
    ├── services/
    │   └── countries.ts            # API calls to fetch countries data
    │
    └── types/
        └── country.ts              # TypeScript interfaces for type definitions
```

## Components Overview

- HomePage: The main entry point that displays a greeting message and a list of countries (CountryList component).
- CountryList: Fetches and displays all countries available in the API with links to their specific pages.
- CountryInfo: Displays detailed data for a specific country, including the flag, bordering countries, and a population chart over time.

## API Endpoints

- GET /api/countries/available
    Returns a list of countries with the structure:
    ```bash
        [
        {
            "countryCode": "US",
            "flagURL": "https://flags.com/us.png",
            "name": "United States"
        },
        ...
        ]
    ```

- GET /api/countries/info/:countryCode

    Returns detailed information for a specified country, including population data, borders, and flag image.
    Example structure:
    ```bash
        {
        "countryName": "United States",
        "flagURL": "https://flags.com/us.png",
        "borders": [
            {
            "commonName": "Canada",
            "countryCode": "CA",
            "region": "North America",
            "flagURL": "https://flags.com/ca.png"
            },
            ...
        ],
        "populationData": [
            { "year": 2000, "value": 282162411 },
            ...
        ]
        }

    ```