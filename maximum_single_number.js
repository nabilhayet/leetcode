/* 

select max(num) as num
from
(select num
from MyNumbers
group by num
having count(num) < 2
order by num desc
) As single_numbers


*/ 