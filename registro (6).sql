-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-12-2023 a las 05:27:30
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `registro`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `boleta`
--

CREATE TABLE `boleta` (
  `id` int(11) NOT NULL,
  `expo` tinyint(1) NOT NULL,
  `td` int(11) NOT NULL,
  `rs` text NOT NULL,
  `pa` tinyint(1) NOT NULL,
  `itin` tinyint(1) NOT NULL,
  `esta` tinyint(1) NOT NULL,
  `direc` tinyint(1) NOT NULL,
  `tm` int(11) NOT NULL,
  `da` int(11) NOT NULL,
  `ISC_sel` tinyint(1) NOT NULL,
  `og` tinyint(1) NOT NULL,
  `cyot` tinyint(1) NOT NULL,
  `nombre` text NOT NULL,
  `fecha_emision` date NOT NULL,
  `fecha_vencimiento` date NOT NULL,
  `total` int(11) NOT NULL,
  `total_igv` int(11) NOT NULL,
  `total_icbper` int(11) NOT NULL,
  `total_isc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `boleta`
--

INSERT INTO `boleta` (`id`, `expo`, `td`, `rs`, `pa`, `itin`, `esta`, `direc`, `tm`, `da`, `ISC_sel`, `og`, `cyot`, `nombre`, `fecha_emision`, `fecha_vencimiento`, `total`, `total_igv`, `total_icbper`, `total_isc`) VALUES
(1, 0, 0, '2454325', 1, 1, 0, 0, 0, 0, 0, 0, 0, '', '2023-12-25', '2023-12-20', 0, 0, 0, 0),
(2, 0, 0, 'ffjfgfgf', 0, 0, 1, 0, 0, 0, 0, 0, 0, '', '2023-12-30', '2023-12-29', 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuota`
--

CREATE TABLE `cuota` (
  `id` int(8) NOT NULL,
  `numero_cuota` int(8) NOT NULL,
  `fecha_vencimiento` date NOT NULL,
  `monto_cuota` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cuota`
--

INSERT INTO `cuota` (`id`, `numero_cuota`, `fecha_vencimiento`, `monto_cuota`) VALUES
(7, 1, '2023-11-02', '2000'),
(8, 2, '2023-11-02', '2000'),
(9, 3, '2023-11-23', '2000'),
(10, 1, '2023-11-02', '2000'),
(11, 2, '2023-11-02', '2000'),
(12, 3, '2023-11-23', '2000'),
(13, 1, '2023-10-27', '1000'),
(14, 2, '2023-11-04', '1000'),
(15, 1, '2023-10-26', '1000'),
(16, 2, '2023-11-04', '1000'),
(17, 1, '2023-10-25', '1000'),
(18, 2, '2023-10-28', '1000'),
(19, 1, '2023-10-25', '1000'),
(20, 2, '2023-11-10', '1000'),
(21, 1, '2023-10-19', '1000'),
(22, 2, '2023-10-27', '1000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuota_factura`
--

CREATE TABLE `cuota_factura` (
  `id` int(11) NOT NULL,
  `numero_cuota` int(11) NOT NULL,
  `monto_cuota` int(11) NOT NULL,
  `fecha_vencimiento` date NOT NULL,
  `monto_neto` int(11) NOT NULL,
  `obs` text NOT NULL,
  `total_cuota` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cuota_factura`
--

INSERT INTO `cuota_factura` (`id`, `numero_cuota`, `monto_cuota`, `fecha_vencimiento`, `monto_neto`, `obs`, `total_cuota`) VALUES
(1, 1, 234, '0000-00-00', 34, 'NOSE QUE PONERRRRRRRRRRR', 0),
(2, 2, 234, '0000-00-00', 34, 'NOSE QUE PONERRRRRRRRRRR', 0),
(3, 3, 234, '0000-00-00', 34, 'NOSE QUE PONERRRRRRRRRRR', 0),
(4, 1, 1000, '2023-12-19', 2000, 'jhjachkjhajkcd', 2),
(5, 2, 1000, '2023-12-19', 2000, 'jhjachkjhajkcd', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detraccion_factura`
--

CREATE TABLE `detraccion_factura` (
  `id` int(11) NOT NULL,
  `tipo_op` text NOT NULL,
  `cod` text NOT NULL,
  `cta` int(11) NOT NULL,
  `medio` int(11) NOT NULL,
  `porcentaje` int(11) NOT NULL,
  `monto_detraccion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detraccion_factura`
--

INSERT INTO `detraccion_factura` (`id`, `tipo_op`, `cod`, `cta`, `medio`, `porcentaje`, `monto_detraccion`) VALUES
(1, 'GUIAT', '019', 2147483647, 13, 12321214, 2147483647),
(2, 'DOCI', '008', 2147483647, 13, 2, 3344);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `id` int(11) NOT NULL,
  `tipo_trans` tinyint(1) NOT NULL,
  `detr` tinyint(1) NOT NULL,
  `exp` tinyint(1) NOT NULL,
  `RUC` varchar(11) NOT NULL,
  `ant` tinyint(1) NOT NULL,
  `itn` tinyint(1) NOT NULL,
  `est` tinyint(1) NOT NULL,
  `dir` tinyint(1) NOT NULL,
  `com` tinyint(1) NOT NULL,
  `tipo_mon` text NOT NULL,
  `desc_ant` tinyint(1) NOT NULL,
  `isc` tinyint(1) NOT NULL,
  `opg` tinyint(1) NOT NULL,
  `cyt` tinyint(1) NOT NULL,
  `fecha_emision` date NOT NULL,
  `total` float NOT NULL,
  `total_igv` float NOT NULL,
  `total_isc` float NOT NULL,
  `total_icbper` float NOT NULL,
  `sub_total` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`id`, `tipo_trans`, `detr`, `exp`, `RUC`, `ant`, `itn`, `est`, `dir`, `com`, `tipo_mon`, `desc_ant`, `isc`, `opg`, `cyt`, `fecha_emision`, `total`, `total_igv`, `total_isc`, `total_icbper`, `sub_total`) VALUES
(1, 0, 1, 0, '0', 1, 0, 0, 0, 0, '0', 0, 0, 0, 0, '2023-12-19', 0, 0, 0, 0, 0),
(2, 0, 1, 0, '0', 1, 0, 1, 0, 1, '0', 1, 0, 1, 0, '2023-12-13', 0, 0, 0, 0, 0),
(3, 0, 1, 0, '0', 1, 0, 1, 0, 1, '0', 1, 0, 0, 0, '2023-12-18', 0, 0, 0, 0, 0),
(4, 0, 1, 0, '0', 1, 0, 1, 0, 1, '0', 1, 0, 1, 0, '2023-12-22', 0, 0, 0, 0, 0),
(5, 1, 1, 0, '0', 1, 1, 1, 1, 1, '0', 1, 0, 1, 1, '2023-12-28', 0, 0, 0, 0, 0),
(6, 1, 1, 0, '0', 1, 1, 1, 1, 1, '0', 1, 0, 1, 1, '2023-12-21', 0, 0, 0, 0, 0),
(7, 1, 1, 0, '2147483647', 1, 1, 1, 1, 1, '0', 1, 0, 1, 1, '2023-12-12', 1953, 1899.8, 44, 9.2, 0),
(8, 1, 1, 0, '20147796634', 1, 1, 1, 1, 1, '0', 1, 0, 1, 1, '2023-12-21', 85.92, 75.52, 8, 2.4, 64),
(9, 1, 1, 0, '20147796634', 1, 1, 1, 1, 1, 'SOLES', 1, 0, 1, 1, '2023-12-19', 36.12, 28.32, 6, 1.8, 24),
(10, 1, 1, 0, '20147796634', 1, 1, 1, 1, 1, 'SOLES', 1, 0, 1, 1, '2023-12-27', 2389.12, 1736.96, 632.96, 19.2, 1472),
(11, 1, 1, 0, '20147796634', 1, 1, 1, 1, 1, 'SOLES', 1, 0, 1, 1, '2023-12-20', 188946, 188866, 80, 0, 160056),
(12, 1, 1, 0, '20147796634', 1, 1, 1, 1, 1, 'SOLES', 1, 0, 1, 1, '2023-12-21', 2624.8, 2567.68, 43.52, 13.6, 2176);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `info_credito`
--

CREATE TABLE `info_credito` (
  `id` int(11) NOT NULL,
  `id_recibo` int(11) NOT NULL,
  `fecha_vencimiento` date NOT NULL,
  `monto_cuota` varchar(10) NOT NULL,
  `numero` int(20) NOT NULL,
  `obs` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `ruc` varchar(11) NOT NULL,
  `dni` varchar(8) NOT NULL,
  `usuario` varchar(25) NOT NULL,
  `clave` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `login`
--

INSERT INTO `login` (`id`, `ruc`, `dni`, `usuario`, `clave`) VALUES
(1, '10714602107', '71460210', 'alvaro', '123456'),
(2, '10714602108', '72463863', 'luis', '123456'),
(3, '10714602109', '70818114', 'sebastian', '123456'),
(4, '10714602110', '71664717', 'cesar', '123456'),
(8, '3213213', '71460210', '3123213', '312321'),
(9, '20147796634', '70457606', 'alexis', '123456'),
(19, '10714602999', '72463863', 'cristian', '3321321'),
(31, '20147796634', '70818112', 'unjbg', '123456'),
(33, '10410317651', '41031765', 'pablo', '123456');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medio_pago`
--

CREATE TABLE `medio_pago` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `medio_pago`
--

INSERT INTO `medio_pago` (`id`, `descripcion`) VALUES
(1, 'Depósito de Cuenta'),
(2, 'Giro'),
(3, 'Transferencia de Fondos'),
(4, 'Orden de Pago'),
(5, 'Tarjeta de Débito'),
(6, 'Tarjeta de Crédito emitida en el país por una empresa del Sistema Financiero'),
(7, 'Cheques con Claúsula: No negociables - Intransferibles - No a la orden o similar'),
(8, 'Efectivo - Por operaciones donde no existe obligación de utilizar Medios de Pago'),
(9, 'Efectivo - en los demás casos'),
(10, 'Medios de Pago Usados en Comercio Exterior'),
(11, 'Documentos de EDPYMES y Cooperativas de Ahorro y Crédito'),
(12, 'Tarjeta de Crédito emitida o no en el país por entes ajenos al Sistema F.'),
(13, 'Tarjetas de Crédito emitidas en el exterior por bancos o F. no domiciliadas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prod_bol`
--

CREATE TABLE `prod_bol` (
  `id` int(11) NOT NULL,
  `bos` tinyint(1) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `medida` text NOT NULL,
  `codigo` int(11) NOT NULL,
  `descripcion` text NOT NULL,
  `bolsas` tinyint(1) NOT NULL,
  `valor` int(11) NOT NULL,
  `descuento` int(11) NOT NULL,
  `ISC` int(11) NOT NULL,
  `ICBPER` int(11) NOT NULL,
  `IGV` int(11) NOT NULL,
  `Importe_total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prod_fact`
--

CREATE TABLE `prod_fact` (
  `id` int(11) NOT NULL,
  `bos` tinyint(1) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `medida` text NOT NULL,
  `codigo` int(11) NOT NULL,
  `descripcion` text NOT NULL,
  `bolsas` tinyint(1) NOT NULL,
  `valor` int(11) NOT NULL,
  `descuento` int(11) NOT NULL,
  `ISC` int(11) NOT NULL,
  `ICBPER` int(11) NOT NULL,
  `IGV` int(11) NOT NULL,
  `Importe_total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `prod_fact`
--

INSERT INTO `prod_fact` (`id`, `bos`, `cantidad`, `medida`, `codigo`, `descripcion`, `bolsas`, `valor`, `descuento`, `ISC`, `ICBPER`, `IGV`, `Importe_total`) VALUES
(1, 0, 32, 'DOTADOLARES', 323, 'fasfasf', 0, 3219, 0, 3329219, 10, 18541, 3450778),
(2, 0, 32, 'DOTADOLARES', 323, 'fasfasf', 0, 3219, 0, 3329219, 10, 18541, 3450778),
(3, 0, 23, 'DOTADOLARES', 323, 'fdafds', 0, 23, 0, 101, 9, 95, 734),
(4, 0, 23, 'DOTADOLARES', 323, 'fdafds', 0, 23, 0, 101, 9, 95, 734),
(5, 0, 23, 'DOTADOLARES', 323, 'fdafds', 0, 23, 0, 101, 9, 95, 734),
(6, 0, 23, 'ffdsf', 3232, '323', 0, 35, 0, 22, 5, 145, 977),
(7, 0, 23, 'ffdsf', 3232, '323', 0, 35, 0, 22, 5, 145, 977),
(8, 0, 4, 'DOTADOLARES', 322, 'n,mmnbmn', 0, 8, 0, 4, 1, 6, 43),
(9, 0, 4, 'DOTADOLARES', 322, 'n,mmnbmn', 0, 8, 0, 4, 1, 6, 43),
(10, 0, 3, 'dfdf', 322, 'eqweqweq', 0, 4, 0, 3, 1, 2, 18),
(11, 0, 3, 'dfdf', 322, 'eqweqweq', 0, 4, 0, 3, 1, 2, 18),
(12, 0, 32, 'dfdf', 4343, 'dsdsadsa', 0, 23, 0, 316, 10, 132, 1195),
(13, 0, 32, 'dfdf', 4343, 'dsdsadsa', 0, 23, 0, 316, 10, 132, 1195),
(14, 0, 234, 'ffdsf', 6654, 'fsafsa', 0, 342, 0, 40, 0, 14405, 94473),
(15, 0, 234, 'ffdsf', 6654, 'fsafsa', 0, 342, 0, 40, 0, 14405, 94473),
(16, 0, 34, 'DOTADOLARES', 533, 'hkjjkb', 0, 32, 0, 22, 7, 196, 1312),
(17, 0, 34, 'DOTADOLARES', 533, 'hkjjkb', 0, 32, 0, 22, 7, 196, 1312);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recibohonorario`
--

CREATE TABLE `recibohonorario` (
  `id` int(11) NOT NULL,
  `tipo_servicio` tinyint(1) NOT NULL,
  `tipo_doc_destinatario` int(11) NOT NULL,
  `nrodoc_destinatario` varchar(15) NOT NULL,
  `serv_prestado` tinyint(1) NOT NULL,
  `descripcion_rxh` varchar(250) NOT NULL,
  `obs_rxh` varchar(250) DEFAULT NULL,
  `fecha_emision` date NOT NULL,
  `fecha_vencimiento` date DEFAULT NULL,
  `inciso_cat` tinyint(1) NOT NULL,
  `retencion_ir` tinyint(1) NOT NULL,
  `pago_efectuado` tinyint(1) NOT NULL,
  `tipo_moneda` varchar(60) NOT NULL,
  `monto_total` varchar(80) NOT NULL,
  `retencion_monto` varchar(80) NOT NULL,
  `total_neto` varchar(80) NOT NULL,
  `id_medio_pago` int(11) NOT NULL,
  `id_login` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `recibohonorario`
--

INSERT INTO `recibohonorario` (`id`, `tipo_servicio`, `tipo_doc_destinatario`, `nrodoc_destinatario`, `serv_prestado`, `descripcion_rxh`, `obs_rxh`, `fecha_emision`, `fecha_vencimiento`, `inciso_cat`, `retencion_ir`, `pago_efectuado`, `tipo_moneda`, `monto_total`, `retencion_monto`, `total_neto`, `id_medio_pago`, `id_login`) VALUES
(1, 1, 4, '20147796634', 0, 'TEST 1', 'SIN OBS', '2023-09-09', '2023-09-09', 1, 1, 1, '2', '1500', '9.84', '113.16', 2, 2),
(2, 1, 4, '20147796634', 0, 'TEST 1', 'SIN OBS', '2023-09-09', '2023-09-09', 1, 0, 1, '2', '1500', '9.84', '113.16', 2, 2),
(11, 1, 4, '20147796634', 0, 'TEST 1', 'SIN OBS', '2023-09-09', '2023-09-09', 1, 1, 1, '2', '1500', '91299.36', '1049942.64', 2, 1),
(12, 1, 4, '10714602107', 0, 'TEST 1', 'SIN OBS', '2023-09-09', '2023-09-09', 1, 1, 1, '2', '1500', '17057.04', '196155.96', 2, 31),
(13, 1, 4, '10714602107', 0, 'TEST 1', 'SIN OBS', '2023-09-09', '2023-09-09', 1, 1, 1, '2', '1500', '9857057.04', '113356155.96000001', 2, 31),
(14, 1, 4, '10714602107', 0, 'VENTA DE BLANCOS', 'PAGO EN EFECTIVO', '2023-01-12', '2023-02-14', 1, 1, 1, '1', 'undefined', '160.00', '1840', 2, 31),
(15, 1, 4, '20147796634', 0, 'ENSEÑAR A LOS PEREJILES', 'PAGO EN EFECTIVO', '2023-03-12', '2023-09-08', 1, 1, 1, '1', 'undefined', '160.00', '1840', 1, 33),
(16, 1, 4, '10714602107', 0, 'VENTA DE BLANCOS', 'PAGO EN EFECTIVO', '2023-09-12', '2023-10-07', 1, 1, 1, '1', 'undefined', '800.00', '9200', 2, 33),
(29, 0, 4, '20147796634', 0, 'VENTA DE BLANCOS', 'PAGO EN EFECTIVO', '2023-09-20', '0000-00-00', 1, 1, 1, '1', '2000', '160.00', '1840', 7, 33),
(30, 0, 4, '20147796634', 0, 'PROBANDO CREDITO', 'XDDD', '2023-09-14', '0000-00-00', 0, 1, 1, '1', '3500', '280.00', '3220', 10, 33),
(31, 0, 4, '20147796634', 0, 'PROBANDO CREDITO', 'XDDD', '2023-09-21', '0000-00-00', 0, 1, 1, '1', '2000', '160.00', '1840', 5, 33),
(32, 0, 4, '20147796634', 0, 'VENTA DE BLANCOS', 'PAGO EN EFECTIVO', '2023-10-19', '0000-00-00', 1, 1, 1, '1', '2000', '160.00', '1840', 1, 33),
(33, 0, 4, '20147796634', 0, 'VENTA DE BLANCOS', 'PAGO EN EFECTIVO', '2023-10-27', '0000-00-00', 0, 1, 1, '1', '2000', '160.00', '1840', 1, 33),
(34, 0, 4, '20147796634', 0, 'VENTA DE BLANCOS', 'XDDD', '2023-10-26', '0000-00-00', 1, 1, 1, '1', '2000', '160.00', '1840', 1, 33),
(35, 0, 4, '20147796634', 0, 'VENTA DE BLANCOS', 'PAGO EN EFECTIVO', '2023-10-27', '0000-00-00', 0, 1, 1, '1', '2000', '160.00', '1840', 1, 33),
(36, 0, 4, '20147796634', 0, 'VENTA DE BLANCOS', 'PAGO EN EFECTIVO', '2023-10-19', '0000-00-00', 1, 1, 1, '1', '20000', '1600.00', '18400', 1, 33);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_doc`
--

CREATE TABLE `tipo_doc` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(145) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_doc`
--

INSERT INTO `tipo_doc` (`id`, `descripcion`) VALUES
(1, 'SIN DOCUMENTO'),
(2, 'DNI'),
(3, 'CARNET DE EXTRANJERIA'),
(4, 'RUC'),
(5, 'PASAPORTE'),
(6, 'CED DIPLOMATICA DE IDENTIDAD');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `boleta`
--
ALTER TABLE `boleta`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cuota`
--
ALTER TABLE `cuota`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cuota_factura`
--
ALTER TABLE `cuota_factura`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detraccion_factura`
--
ALTER TABLE `detraccion_factura`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `info_credito`
--
ALTER TABLE `info_credito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_recibo` (`id_recibo`);

--
-- Indices de la tabla `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medio_pago`
--
ALTER TABLE `medio_pago`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `prod_bol`
--
ALTER TABLE `prod_bol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `prod_fact`
--
ALTER TABLE `prod_fact`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `recibohonorario`
--
ALTER TABLE `recibohonorario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_medio_pago` (`id_medio_pago`),
  ADD KEY `id_login` (`id_login`),
  ADD KEY `tipo_doc_destinatario` (`tipo_doc_destinatario`);

--
-- Indices de la tabla `tipo_doc`
--
ALTER TABLE `tipo_doc`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `boleta`
--
ALTER TABLE `boleta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `cuota`
--
ALTER TABLE `cuota`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `cuota_factura`
--
ALTER TABLE `cuota_factura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `detraccion_factura`
--
ALTER TABLE `detraccion_factura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `info_credito`
--
ALTER TABLE `info_credito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `medio_pago`
--
ALTER TABLE `medio_pago`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `prod_bol`
--
ALTER TABLE `prod_bol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `prod_fact`
--
ALTER TABLE `prod_fact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `recibohonorario`
--
ALTER TABLE `recibohonorario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `tipo_doc`
--
ALTER TABLE `tipo_doc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `info_credito`
--
ALTER TABLE `info_credito`
  ADD CONSTRAINT `info_credito_ibfk_1` FOREIGN KEY (`id_recibo`) REFERENCES `recibohonorario` (`id`);

--
-- Filtros para la tabla `recibohonorario`
--
ALTER TABLE `recibohonorario`
  ADD CONSTRAINT `recibohonorario_ibfk_1` FOREIGN KEY (`id_medio_pago`) REFERENCES `medio_pago` (`id`),
  ADD CONSTRAINT `recibohonorario_ibfk_2` FOREIGN KEY (`id_login`) REFERENCES `login` (`id`),
  ADD CONSTRAINT `recibohonorario_ibfk_3` FOREIGN KEY (`tipo_doc_destinatario`) REFERENCES `tipo_doc` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
