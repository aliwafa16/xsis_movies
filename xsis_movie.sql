-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 14 Feb 2023 pada 16.16
-- Versi server: 10.4.8-MariaDB
-- Versi PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `xsis_movie`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `movies`
--

INSERT INTO `movies` (`id`, `title`, `description`, `rating`, `image`, `created_at`, `updated_at`) VALUES
(16, 'Pengabdi Setan 2 Communion', 'dalah sebuah film horor Indonesia tahun 2022 yang disutradarai dan ditulis oleh Joko Anwar sebagai sekuel dari film tahun 2017, Pengabdi Setan.', 7, '', '2023-02-14 14:27:33', '2023-02-14 14:27:33'),
(17, 'Pengabdi Setan', 'Film horor karya joko anwar yang liris pada tahun 2017', 8, '', '2023-02-14 14:29:24', '2023-02-14 14:29:24'),
(18, 'Transformer 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere pretium leo, eu lacinia massa vehicula vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer id mi tincidunt mi porta convallis. Duis eu arcu aliquam, commodo lectus a, mollis dui. Ut fermentum, tellus non auctor dictum, dui quam mattis orci, id fermentum urna urna at sem. Aliquam suscipit et arcu vitae congue. Donec molestie vestibulum neque gravida rutrum. Nulla aliquam ex vitae faucibus commodo. Ut ut elit nec orci bibendum dignissim. In placerat volutpat justo, id placerat quam imperdiet pellentesque. Nam malesuada lectus eu volutpat feugiat.', 3, '', '2023-02-14 14:32:24', '2023-02-14 15:11:05');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
