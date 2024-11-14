

export interface Country {
    countryCode: string;
    flagURL: string;
    name: string;
}

export interface BorderCountry {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    flagURL: string;
}

export interface PopulationData {
    year: number;
    value: number;
}

export interface CountryInfo {
    borders: BorderCountry[];
    countryName: string;
    populationData: PopulationData[];
    flagURL: string;
}

export interface CountryInfoProps {
    params: Promise<{ countryCode: string }>;
}
