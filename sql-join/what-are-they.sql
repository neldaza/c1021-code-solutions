select "p"."line1" as "line1",
       "p"."district" as "district",
       "cities"."name" as "cityName"
from "addresses" as "p"
join "cities" using ("cityId")
