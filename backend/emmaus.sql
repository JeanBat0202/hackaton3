-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: emmaus
-- ------------------------------------------------------
-- Server version	8.0.33
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;

/*!50503 SET NAMES utf8mb4 */
;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;

/*!40103 SET TIME_ZONE='+00:00' */
;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;

--
-- Table structure for table `employe`
--
DROP TABLE IF EXISTS `employe`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `employe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `hashedPassword` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `firstname` varchar(80) NOT NULL,
  `lastname` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `employe`
--
LOCK TABLES `employe` WRITE;

/*!40000 ALTER TABLE `employe` DISABLE KEYS */
;

INSERT INTO
  `employe`
VALUES
  (
    1,
    '123456',
    'sandrine.martin@emmaus.fr',
    'Sandrine',
    'Martin'
  );

/*!40000 ALTER TABLE `employe` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `smartphone`
--
DROP TABLE IF EXISTS `smartphone`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `smartphone` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(80) NOT NULL,
  `model` varchar(80) NOT NULL,
  `status` varchar(80) NOT NULL,
  `storage` int NOT NULL,
  `ram` int NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `smartphone`
--
LOCK TABLES `smartphone` WRITE;

/*!40000 ALTER TABLE `smartphone` DISABLE KEYS */
;

INSERT INTO
  `smartphone`
VALUES
  (
    1,
    'apple',
    'iPhone6',
    'bon',
    32,
    1,
    'frontend/src/assets/images/iphone6.jpg'
  ),
(
    2,
    'samsung',
    'GalaxyA6',
    'correct',
    32,
    3,
    'frontend/src/assets/images/SamsungGalaxy.webp'
  ),
(
    3,
    'xiaomi',
    'RedmiNote7',
    'tres bon',
    64,
    4,
    'frontend/src/assets/images/Xiami.png'
  );

/*!40000 ALTER TABLE `smartphone` ENABLE KEYS */
;

UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;

-- Dump completed on 2023-06-28 15:39:40