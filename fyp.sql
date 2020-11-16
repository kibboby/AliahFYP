-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2020 at 02:24 PM
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
-- Database: `fyp`
--

-- --------------------------------------------------------

--
-- Table structure for table `company_admin`
--

CREATE TABLE `company_admin` (
  `admin_username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin_name` varchar(255) NOT NULL,
  `company_name` varchar(200) NOT NULL,
  `company_email` varchar(255) NOT NULL,
  `company_contact` int(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `quote` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company_admin`
--

INSERT INTO `company_admin` (`admin_username`, `password`, `admin_name`, `company_name`, `company_email`, `company_contact`, `address`, `quote`) VALUES
('Aliah', '', 'Aliah Rozunan', 'Swinburne', 'swin@gmail.com', 102036027, 'Kuching, Sarawak', '');

-- --------------------------------------------------------

--
-- Table structure for table `leads`
--

CREATE TABLE `leads` (
  `lead_id` int(10) NOT NULL,
  `lead_name` varchar(255) NOT NULL,
  `lead_email` varchar(255) NOT NULL,
  `lead_contact` varchar(20) NOT NULL,
  `comments` varchar(255) NOT NULL,
  `Contacted` varchar(255) NOT NULL,
  `Quote_Sent` varchar(255) NOT NULL,
  `Quote_Agreed` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `remarks` varchar(255) NOT NULL,
  `lead_company` varchar(255) NOT NULL,
  `interest` varchar(255) NOT NULL,
  `company_username` varchar(100) NOT NULL,
  `salesperson_username` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `leads`
--

INSERT INTO `leads` (`lead_id`, `lead_name`, `lead_email`, `lead_contact`, `comments`, `Contacted`, `Quote_Sent`, `Quote_Agreed`, `status`, `remarks`, `lead_company`, `interest`, `company_username`, `salesperson_username`) VALUES
(1, 'Bryan', 'oj@gmail.com', '0102036027', '', 'Yes', 'RM1200', 'RM10000', 'Lose', 'Disagreement over quotation', 'Google', 'Design', 'Aliah', 'John David'),
(2, 'Jason', 'JJJ892@gmail.com', '0198764532', '', 'No', 'No', '', 'Lose', 'Miscommunication over phone', 'Swin.Tech', 'IT', 'Aliah', 'John David'),
(3, 'Ahmed', 'ahmd@hotmail.com', '0153452456', 'Website matters', 'Yes', 'RM300', 'RM400', 'Won', '', 'Kaison', 'IT', 'Aliah', 'John David'),
(4, 'Koh Chau', 'kochi@office.com', '0198765432', '', 'Yes', 'RM3000', 'Rm2400', 'Won', '', 'Polish Car Sdn Bhd', 'Marketing', 'Aliah', 'John David'),
(5, 'Melissa Rau', 'melru@office.com', '0197867654', '', 'Yes', 'RM2000', 'RM3000', 'Won', '', 'Photobook Malaysia', 'IT', 'Aliah', 'John David'),
(6, 'Lee Sung Kyu', 'leessk@yahoo.com', '+6102543277', '', 'Yes', '', '', 'Lose', 'Miscommunication', 'Korean Tourism Board', 'Design', 'Aliah', 'John David'),
(7, 'Nur Azifa', 'aziNur@hotmail.com', '0143245654', '', 'Yes', 'RM12000', '', 'Open', '', 'Shopee', 'Marketing', 'Aliah', 'John David');

-- --------------------------------------------------------

--
-- Table structure for table `salesperson`
--

CREATE TABLE `salesperson` (
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `sales_name` varchar(255) NOT NULL,
  `sales_email` varchar(255) NOT NULL,
  `sales_contact` int(20) NOT NULL,
  `designation` varchar(200) NOT NULL,
  `admin_username` varchar(100) NOT NULL,
  `company_name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `salesperson`
--

INSERT INTO `salesperson` (`username`, `password`, `sales_name`, `sales_email`, `sales_contact`, `designation`, `admin_username`, `company_name`) VALUES
('John David', '', 'Sir John Wilson David', 'daveWilson@gmail.com', 102036027, 'Manager', 'Aliah', 'Swinburne'),
('Wee', '', 'Wee Chien', 'wee@gmail.com', 1022233344, 'SL', 'Aliah', 'Swinburne');

-- --------------------------------------------------------

--
-- Table structure for table `superadmin`
--

CREATE TABLE `superadmin` (
  `super_username` varchar(100) NOT NULL,
  `password_super` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `superadmin`
--

INSERT INTO `superadmin` (`super_username`, `password_super`) VALUES
('Cheyenne ', 'Karuna12345');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `task_id` int(10) NOT NULL,
  `task_title` varchar(255) NOT NULL,
  `task_date` varchar(100) NOT NULL,
  `task_time` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `task_comments` varchar(255) NOT NULL,
  `task_status` varchar(255) NOT NULL,
  `salesperson_username` varchar(100) NOT NULL,
  `lead_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`task_id`, `task_title`, `task_date`, `task_time`, `location`, `task_comments`, `task_status`, `salesperson_username`, `lead_id`) VALUES
(26, 'Call', '19/11/2020', '10:00', '', '', 'Completed', 'John David', 3),
(28, 'Call', '28/11/2020', '9:00', '', '', 'Completed', 'John David', 1),
(29, 'Other', '13/11/2020', '11:00', '', 'Confirm with lead first', 'Upcoming', 'John David', 4),
(30, 'Appointment', '13/11/2020', '10:00', 'The Spring', '', 'Upcoming', 'John David', 4),
(33, 'Other', '11/11/2020', '10:00', '', 'Fax the agreement document', 'Completed', 'John David', 4),
(34, 'Appointment', '01/01/2021', '9:00', 'Sunny Hill', '', 'Upcoming', 'John David', 4),
(35, 'Call', '09/11/2020', '10:00', '', '', 'Upcoming', 'John David', 4),
(37, 'Call', '25/11/2020', '10:00', '', '', 'Completed', 'John David', 5),
(38, 'Call', '28/11/2020', '15:00', '', '', 'Upcoming', 'John David', 5);

-- --------------------------------------------------------

--
-- Table structure for table `user_login`
--

CREATE TABLE `user_login` (
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_login`
--

INSERT INTO `user_login` (`username`, `password`, `role`) VALUES
('Aliah', 'karuna12345', 'CA'),
('Cheyenne ', 'Karuna12345', 'SA'),
('John David', 'Karuna12345', 'SL'),
('Wee', 'karuna12345', 'SL');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company_admin`
--
ALTER TABLE `company_admin`
  ADD PRIMARY KEY (`admin_username`);

--
-- Indexes for table `leads`
--
ALTER TABLE `leads`
  ADD PRIMARY KEY (`lead_id`),
  ADD KEY `company_username` (`company_username`),
  ADD KEY `salesperson_username` (`salesperson_username`);

--
-- Indexes for table `salesperson`
--
ALTER TABLE `salesperson`
  ADD PRIMARY KEY (`username`),
  ADD KEY `company_username` (`admin_username`);

--
-- Indexes for table `superadmin`
--
ALTER TABLE `superadmin`
  ADD PRIMARY KEY (`super_username`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`task_id`),
  ADD KEY `salesperson_username` (`salesperson_username`),
  ADD KEY `lead_id` (`lead_id`);

--
-- Indexes for table `user_login`
--
ALTER TABLE `user_login`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `leads`
--
ALTER TABLE `leads`
  MODIFY `lead_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `task_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `company_admin`
--
ALTER TABLE `company_admin`
  ADD CONSTRAINT `company_admin_ibfk_2` FOREIGN KEY (`admin_username`) REFERENCES `user_login` (`username`) ON UPDATE CASCADE;

--
-- Constraints for table `leads`
--
ALTER TABLE `leads`
  ADD CONSTRAINT `leads_ibfk_1` FOREIGN KEY (`company_username`) REFERENCES `company_admin` (`admin_username`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `leads_ibfk_2` FOREIGN KEY (`salesperson_username`) REFERENCES `salesperson` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `salesperson`
--
ALTER TABLE `salesperson`
  ADD CONSTRAINT `salesperson_ibfk_1` FOREIGN KEY (`admin_username`) REFERENCES `company_admin` (`admin_username`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `salesperson_ibfk_2` FOREIGN KEY (`username`) REFERENCES `user_login` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `superadmin`
--
ALTER TABLE `superadmin`
  ADD CONSTRAINT `superadmin_ibfk_2` FOREIGN KEY (`super_username`) REFERENCES `user_login` (`username`) ON UPDATE CASCADE;

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_ibfk_1` FOREIGN KEY (`lead_id`) REFERENCES `leads` (`lead_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `task_ibfk_2` FOREIGN KEY (`salesperson_username`) REFERENCES `salesperson` (`username`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
