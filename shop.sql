/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : testshop

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2015-10-16 11:45:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `id` varchar(255) DEFAULT NULL,
  `shop_number` varchar(255) NOT NULL,
  `shop_name` varchar(255) DEFAULT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `business_sort` varchar(255) DEFAULT NULL,
  `detial_sort` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `principal` varchar(255) DEFAULT NULL,
  `principal_tel` varchar(255) DEFAULT NULL,
  `business_scope` varchar(255) DEFAULT NULL,
  `worktime` varchar(255) DEFAULT NULL,
  `discount` varchar(255) DEFAULT NULL,
  `worker` varchar(255) DEFAULT NULL,
  `worker_tel` varchar(255) DEFAULT NULL,
  `star` varchar(5) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `top` int(1) DEFAULT NULL,
  `service` varchar(255) DEFAULT NULL,
  `oldprice` varchar(255) DEFAULT NULL,
  `newprice` varchar(255) DEFAULT NULL,
  `distance` double(255,1) DEFAULT NULL,
  PRIMARY KEY (`shop_number`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
