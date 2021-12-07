select
  "name",
  count("name") as "amountOfTimes"
from "genres"
join "filmCategory" using ("genreId")
join "films" using ("filmId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "actors"."firstName" = 'Lisa' and "actors"."lastName" = 'Monroe'
group by "genres"."name";
