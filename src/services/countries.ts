import axios from "axios";
import { Country, CountryInfo } from "@/types/country";

const BASE_URL = 'http://localhost:5000/api/countries';

export const fetchAvailableCountries = async (): Promise<Country[]> => {
    const response = await axios.get<Country[]>(`${BASE_URL}/available`);
    return response.data;
};

export const fetchCountryInfo = async (countryCode: string): Promise<CountryInfo> => {
    const response = await axios.get<CountryInfo>(`${BASE_URL}/info/${countryCode}`);
    return response.data;
};

