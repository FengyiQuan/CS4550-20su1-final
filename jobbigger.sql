USE `webdev-final-jobbigger`;

CREATE TABLE `webdev-final-jobbigger`.`login_info` (
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `role` ENUM('employee','job_seeker','admin') NOT NULL,
  `email` VARCHAR(50) NULL,
  `dob` DATE NULL,
  PRIMARY KEY (`username`)
);

CREATE TABLE `webdev-final-jobbigger`.`companys` (
  `cid` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NULL,
  `since` DATE NOT NULL,
  PRIMARY KEY (`cid`)
);

CREATE TABLE `webdev-final-jobbigger`.`employees` (
  `username` VARCHAR(50) NOT NULL,
  `belong` INT NULL,
  PRIMARY KEY (`username`),
  CONSTRAINT employee_belong_fk FOREIGN KEY(`belong`) REFERENCES companys(`cid`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `webdev-final-jobbigger`.`job_seekers` (
  `username` VARCHAR(50) NOT NULL,
  `wishlist` INT UNIQUE,
  PRIMARY KEY (`username`)
);

CREATE TABLE `webdev-final-jobbigger`.`jobs` (
  `jid` INT NOT NULL,
  `company` INT NOT NULL,
  PRIMARY KEY (`jid`),
  CONSTRAINT jobs_company_fk FOREIGN KEY(`company`) REFERENCES companys(`cid`) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE `webdev-final-jobbigger`.`wishlists` (
  `wid` INT NOT NULL,
  `jid` INT NOT NULL,
  CONSTRAINT wishlist_wid_fk FOREIGN KEY(`wid`) REFERENCES job_seekers(`wishlist`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT wishlist_jid_fk FOREIGN KEY(`jid`) REFERENCES jobs(`jid`) ON DELETE CASCADE ON UPDATE CASCADE

);

CREATE TABLE `webdev-final-jobbigger`.`reviews` (
  `rid` INT NOT NULL,
  `jid` INT NOT NULL,
  `text` VARCHAR(255),
  `username` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`rid`),
  CONSTRAINT review_job_fk FOREIGN KEY(`jid`) REFERENCES jobs(`jid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT review_employee_fk FOREIGN KEY(`username`) REFERENCES employees(`username`) ON DELETE CASCADE ON UPDATE CASCADE
)

