
-- We need to create two tables, departments and products

CREATE TABLE `departments` (
  `department_id` int(11) NOT NULL AUTO_INCREMENT,
  `department_name` varchar(255) NOT NULL,
  `over_head_costs` float NOT NULL,
  `total_sales` float DEFAULT '0',
  PRIMARY KEY (`department_id`)
);

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `department_name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `stock_quantity` int(11) NOT NULL,
  `product_sales` float DEFAULT '0',
  PRIMARY KEY (`id`)
);


INSERT INTO `departments` (`department_id`, `department_name`, `over_head_costs`, `total_sales`)
VALUES
	(1,'Electronics',1000,0),
	(2,'Office',500,0),
	(3,'Sports',400,0),
	(4,'Toys',450,0),
	(5,'Books',850,0);


INSERT INTO `products` (`id`, `product_name`, `department_name`, `price`, `stock_quantity`, `product_sales`)
VALUES
	(1,'Fidget Cube','Toys',19.95,896,0),
	(2,'Foam Roller','Sports',18.99,847,0),
	(3,'Echo Dot (2nd Generation)','Electronics',49.99,2500,0),
	(4,'30 OZ Tumbler','Kitchen',29.99,347,0),
	(5,'Adidas Chelsea FC 3rd Jersey-BLACK','Sports',120,235,0),
	(6,'Keurig Coffee Maker','Kitchen',119.99,295,0),
	(7,'TI-83 Plus Calculator','Office',89.69,150,0),
	(8,'Cards Against Humanity','Toys',25,5000,0),
	(9,'Arduino Uno R3 Microcontroller','Electronics',17.95,187,0),
	(10,'TRUSOX Cushion Soccer Sock','Sports',39.99,453,0);

