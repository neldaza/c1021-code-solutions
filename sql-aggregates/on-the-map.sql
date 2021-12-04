select
  "countries"."name",
   count("cityId") as "numberOfCities"
from "countries"
join "cities" using ("countryId")
group by "countries"."name";
