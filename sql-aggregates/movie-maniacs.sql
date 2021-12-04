select "firstName",
       "lastName",
       sum("payments"."amount") as "spentOnRentals"
from "customers"
join "payments" using ("customerId")
group by "customers"."firstName",
         "customers"."lastName"
order by "spentOnRentals" desc;
