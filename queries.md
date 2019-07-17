# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT
p.productname,
c.categoryname
from categories as c
join products as p on c.categoryid = p.categoryid

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT
o.orderid,
o.orderdate,
s.shippername
from orders as o
join shippers as s on s.shipperid = o.shipperid
where o.orderdate < "1997-01-09"

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT
p.productname,
od.quantity
from products as p
join orderdetails as od on p.productid = od.productid
where od.orderid = 10251
order by p.productname

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT
o.orderid,
cust.customername as Customer_Name,
e.lastname as Employee_Name
from orders as o
join customers as cust on o.customerid = cust.customerid
join employees as e on o.employeeid = e.employeeid

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT
c.categoryname,
count(p.productname) as Products
from categories as c
join products as p on c.categoryid = p.categoryid
group by p.categoryid

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

select
od.orderid,
count(p.productid) as ItemCount
from orderdetails as od
join products as p on od.productid = p.productid
group by od.orderid
