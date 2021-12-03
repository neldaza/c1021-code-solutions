select "releaseYear",
       "genres"."name"
from "films"
join "filmCategory" using ("filmId")
join "genres" using ("genreId")
where "films"."title" = 'Boogie Amelie';
