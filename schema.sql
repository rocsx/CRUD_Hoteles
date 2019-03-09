/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table cities
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cities`;

CREATE TABLE `cities` (
  `id_city` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `city` char(100) NOT NULL DEFAULT '',
  `id_state` int(11) NOT NULL,
  PRIMARY KEY (`id_city`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;

INSERT INTO `cities` (`id_city`, `city`, `id_state`)
VALUES
	(1,'Guadalajara',1),
	(2,'Puerto Vallarta',1),
	(3,'Ciudad Obregón',2),
	(4,'Culiacán',3),
	(5,'Mazatlán',3),
	(6,'Cuauhtémoc',4);

/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table hotels
# ------------------------------------------------------------

DROP TABLE IF EXISTS `hotels`;

CREATE TABLE `hotels` (
  `id_hotel` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `hotel` char(100) NOT NULL DEFAULT '',
  `description` text NOT NULL,
  `stars` float(1,1) NOT NULL,
  `id_city` int(11) NOT NULL,
  `status` enum('Activo','Inactivo') NOT NULL DEFAULT 'Inactivo',
  PRIMARY KEY (`id_hotel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table states
# ------------------------------------------------------------

DROP TABLE IF EXISTS `states`;

CREATE TABLE `states` (
  `id_state` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `state` char(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id_state`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;

INSERT INTO `states` (`id_state`, `state`)
VALUES
	(1,'Jalisco'),
	(2,'Sonora'),
	(3,'Sinaloa'),
	(4,'Ciudad de México');

/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
