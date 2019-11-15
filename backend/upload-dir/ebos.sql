-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 11, 2019 at 08:33 AM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ebos`
--

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(22),
(22);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `customer_email` varchar(255) DEFAULT NULL,
  `customer_mail_send` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `seller_notification_view` varchar(255) DEFAULT NULL,
  `weight` varchar(255) DEFAULT NULL,
  `customer_address` varchar(255) DEFAULT NULL,
  `customer_contact` varchar(255) DEFAULT NULL,
  `customer_name` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `weight` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `description`, `image_url`, `name`, `price`, `quantity`, `seller_id`, `weight`) VALUES
(21, 'ssssssssssssssssss', '../../assets/img/7.jpg', '123ssssssssssssssssssssss', 21, 321, 1, '21132'),
(5, 'Vanila flavour', '../../assets/img/9.jpg', 'Biscuits', 250, 350, 1, '500g'),
(20, 'gdg gdgd', '../../assets/img/12.jpg', 'ssada', 232324, 3242423, 1, '234rgd'),
(8, 'Garlic Bread', '../../assets/img/4.jpg', 'Bread', 180, 400, 1, '250g'),
(7, 'Spicy', '../../assets/img/2.jpg', 'Pastry', 260, 500, 1, '150g'),
(9, 'Fried Fish Bun', '../../assets/img/7.jpg', 'Fish Bun', 190, 300, 1, '100g'),
(10, 'Fried Fish Bun', '../../assets/img/3.jpg', 'Fish Bun', 170, 320, 1, '200g'),
(12, 'Chocolate Biscuit', '../../assets/img/10.jpg', 'Biscuits', 500, 390, 1, '450g'),
(14, 'Fish bun', '../../assets/img/3.jpg', 'Bun', 85, 800, 13, '100g'),
(15, 'Chicken', '../../assets/img/11.jpg', 'Biscuits', 550, 100, 13, '250g'),
(18, 'chocolate cake', '../../assets/img/images.jpg', 'cake', 2000, 100, 17, '1kg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `account_number` varchar(255) DEFAULT NULL,
  `bank_name` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `contact`, `email`, `location`, `name`, `password`, `account_number`, `bank_name`) VALUES
(1, '071023562334', 'amdsaththanayaka@gmail.com', 'Moratuwa', 'Dulani', '1234', NULL, NULL),
(13, '0115234526', 'janahitha@gmail.com', 'Gampaha', 'Janahitha Bakers', '0000', NULL, NULL),
(17, '0114525264', 'abc@gmail.com', 'Moratuwa', 'abc', '1234', NULL, NULL),
(19, 'ssss', 'ss@sss.s', 's', 's', 'ssss', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
