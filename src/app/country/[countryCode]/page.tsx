"use client";
import { fetchCountryInfo } from "@/services/countries";
import type { CountryInfo, CountryInfoProps } from "@/types/country";
import { useEffect, useState, use } from "react";
import Link from "next/link";



const CountryInfo: React.FC<CountryInfoProps> = ({ params }) => {
    const { countryCode } = use(params);
    const [countryInfo, setCountryInfo] = useState<CountryInfo | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (countryCode) {
            const getCountryInfo = async () => {
                setLoading(true);
                try {
                    const data = await fetchCountryInfo(countryCode);
                    setCountryInfo(data);
                } catch (error) {
                    console.error("Failed to fetch country info:", error);
                } finally {
                    setLoading(false);
                }
            };
            getCountryInfo();
        }
    }, [countryCode]);

    if (loading) return <p>Loading...</p>;

    const maxPopulation = Math.max(...(countryInfo?.populationData?.map((data) => data.value) || [1]));

    return (
        <div className="infoCountries">
            <h1>Country Information</h1>
            <h2>Country Name: {countryInfo?.countryName}</h2>

            <h3>Flag</h3>
            {countryInfo?.flagURL && (
                <img src={countryInfo.flagURL} alt={`${countryInfo.countryName} flag`} width="50%" />
            )}

            <h3>Border Countries</h3>
            <ul className="borderCountries">
                {countryInfo?.borders?.map((border) => (
                    <li key={border.countryCode}>
                        <Link legacyBehavior href={`/country/${border.countryCode}`}>          
                                <span>{border.commonName}</span>                          
                        </Link>
                    </li>
                ))}
            </ul>

            <h3>Population Over Time</h3>
            <div className="populationChart">
                <div className="chart">
                    {countryInfo?.populationData?.map((data) => (
                        <div
                            key={data.year}
                            className="bar"
                            style={{
                                height: `${(data.value / maxPopulation) * 100}%`,
                            }}
                            title={`${data.year}: ${data.value.toLocaleString()}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CountryInfo;