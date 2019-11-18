-- Database Queries

-- Find all customers with postal code 1010
select * from Customers where PostalCode = '1010'


-- Find the phone number for the supplier with the id 11
select Phone from Suppliers 
where supplierId = '11';

-- List first 10 orders placed, sorted descending by the order date
select * from Orders order by OrderDate limit 10;

-- Find all customers that live in London, Madrid, or Brazil
-- Not Operational
select * from Customers where City="London" or City="Madrid" or Country="Brazil";

-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
insert into Customers VALUES ('101','The Shire','Bilbo Baggins','1 Hobitt-Hole','Bag End', '111', 'Middle Earth' );

-- Update Bilbo Baggins record so that the postal code changes to "11122"
-- update Customers set PostalCode = '11122'
where CustomerID = 100;

-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

select count(distinct City) from Customers

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name

select SupplierName, length(SupplierName) from Suppliers order by length(SupplierName) desc;
