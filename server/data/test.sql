/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2018-04-11 10:47:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `person`
-- ----------------------------
DROP TABLE IF EXISTS `person`;
CREATE TABLE `person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(11) NOT NULL,
  `professional` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of person
-- ----------------------------
INSERT INTO `person` VALUES ('1', '武一', '11', '计算机科学与技术');
INSERT INTO `person` VALUES ('2', '王二', '11', '计算机科学与技术');
INSERT INTO `person` VALUES ('3', '张三', '13', '计算机科学与技术');
INSERT INTO `person` VALUES ('4', '李四', '14', '计算机科学与技术');
INSERT INTO `person` VALUES ('5', '孙五', '15', '计算机科学与技术');
INSERT INTO `person` VALUES ('6', '钱六', '16', '计算机科学与技术');
INSERT INTO `person` VALUES ('7', '赵七', '17', '计算机科学与技术');
INSERT INTO `person` VALUES ('16', '11', '27', '金融');
INSERT INTO `person` VALUES ('19', '456', '456', '456');
INSERT INTO `person` VALUES ('21', '123', '123', '123');
INSERT INTO `person` VALUES ('22', '789', '789', '789');

-- ----------------------------
-- Table structure for `sessions`
-- ----------------------------
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sessions
-- ----------------------------
INSERT INTO `sessions` VALUES ('85AiYzAFtuG2BmrHPuiAYnVXm7Q99i0U', '1523474716', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A36303030303030302C2265787069726573223A22323031382D30342D31315431393A32343A33362E3936325A222C22687474704F6E6C79223A747275652C2270617468223A222F227D2C226E616D65223A2261646D696E227D);

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('18', 'admin', '$2a$10$hSLET0v6/GcffGIb8FHEGu1cWOzIyc1ONqGOkcpKxlEBcUPcHj2FS');
INSERT INTO `user` VALUES ('20', '123456', '$2a$10$RTui8m4Ni.UZVJe3Gx/EmuGb6nj8sq5.GzfJuzFBvqj.m/Cn7/y6O');
INSERT INTO `user` VALUES ('21', 'admin123', '$2a$10$KfmdPdxu3N/ZL6AI4r6dq.BNCOnj/MMR86Jh864n0X.DODfszy6Pm');
