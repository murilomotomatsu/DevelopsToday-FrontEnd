"use client";
import { fetchAvailableCountries } from "@/services/countries";
import { Country } from "@/types/country";
import { useEffect, useState } from "react";
import Link from "next/link";

const CountryList: React.FC = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCountries = async () => {
            const data = await fetchAvailableCountries();
            // Filter out countries without a valid flagURL
            const filteredData = data.filter((country: Country) => country.flagURL);
            setCountries(filteredData);
            setLoading(false);  
        };
        getCountries();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="listCountries">
            <h1>List of Countries</h1>
            <ul>
                {countries.map((country) => (
                    <li key={country.countryCode}>
                        <Link legacyBehavior href={`/country/${country.countryCode}`}>
                            <a className="country-link">
                                <span>{country.name}</span>
                                <div                                    
                                    style={{
                                        backgroundImage: `url(${country.flagURL})`,
                                        height: '40px', 
                                    }}
                                />
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;
