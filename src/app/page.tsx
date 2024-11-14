import CountryList from "@/app/components/CountryList"
import React from "react";

const HomePage: React.FC = () => {
  return (
    <main className="mainApp">
      <h1>Welcome Recruiters from DevelopsToday!</h1>
      <CountryList/>
    </main>
  )
}

export default HomePage;