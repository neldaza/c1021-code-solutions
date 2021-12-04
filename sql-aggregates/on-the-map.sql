select
  "countries",
   count("cityId") as "numberOfCities"
from "countries"
join "cities" using ("countryId")
group by "countries"
