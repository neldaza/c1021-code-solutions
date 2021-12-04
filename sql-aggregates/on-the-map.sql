select
  count("cityId") as "numberOfCities"
from "countries"
join "cities" using ("countryId")
