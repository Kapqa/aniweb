-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 29 2023 г., 21:54
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `anime`
--

-- --------------------------------------------------------

--
-- Структура таблицы `characters`
--

CREATE TABLE `characters` (
  `series_id` int NOT NULL,
  `character_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `character_description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `characters`
--

INSERT INTO `characters` (`series_id`, `character_name`, `character_description`) VALUES
(2, 'Ичиго Куросаки', 'человек, гемишт квинси с силами синигами и пустого. Сын Ишшина и Масаки Куросаки, старший брат Карин и Юзу. Муж Орихиме и отец Казуи.'),
(1, 'Наруто', 'Узума́ки Нару́то — шиноби Конохагакуре из клана Узумаки. Он стал Джинчурики Кьюби в день своего рождения, в результате чего, из-за нелёгкой судьбы, другие жители деревни сторонились его в течение детства мальчика. Присоединившись к команде 7, Наруто начал упорно трудиться, чтобы добиться признания в Конохе и, тем самым, воплотить свою мечту стать Хокаге.'),
(2, 'Рукия Кучики', 'капитан тринадцатого отряда Готея 13 и жена Ренджи Абарая. Ранее она служила лейтенантом в тринадцатом отряде, под командованием Джуширо Укитаке. Рукия — подруга Ичиго Куросаки. Также она сестра Хисаны Кучики; впоследствии Бьякуя Кучики сделал её своей приёмной сестрой. У Рукии есть дочь Ичика.'),
(1, 'Саске', 'Один из последних выживших членов клана Учиха из Конохагакуре. После того, как его старший брат Итачи уничтожил весь их клан, Саске поставил перед собой жизненную цель отомстить за клан и семью, убив Итачи.');

-- --------------------------------------------------------

--
-- Структура таблицы `episodes`
--

CREATE TABLE `episodes` (
  `series_id` int NOT NULL,
  `episode_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `episodes`
--

INSERT INTO `episodes` (`series_id`, `episode_id`) VALUES
(1, 1),
(2, 1),
(3, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `series`
--

CREATE TABLE `series` (
  `series_id` int NOT NULL,
  `series_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `series_count` int NOT NULL,
  `series_description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `series_average_score` int NOT NULL,
  `series_views` int NOT NULL,
  `series_country` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `series_year` int NOT NULL,
  `series_preview` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `series_link` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `series`
--

INSERT INTO `series` (`series_id`, `series_name`, `series_count`, `series_description`, `series_average_score`, `series_views`, `series_country`, `series_year`, `series_preview`, `series_link`) VALUES
(1, 'naruto', 720, '«Наруто» (яп. NARUTO - ナルト -) — сёнэн-манга Масаси Кисимото, рассказывающая о жизни шумного и непоседливого ниндзя-подростка Наруто Удзумаки, мечтающего достичь всеобщего признания и стать Хокагэ — главой своего селения и сильнейшим ниндзя. Чтобы добиться уважения окружающих, ему предстоит пройти через тысячи препятствий: экзамены ниндзя, различные миссии и сражения.', 8, 0, 'japan', 2002, 'naruto.jpg', 'https://www.youtube.com/watch?v=g4Fcn5SZN28'),
(2, 'bleach', 387, 'Пятнадцатилетний школьник Ичиго Куросаки, случайно получивший сверхъестественные силы синигами — богов смерти. Ичиго вынужден сражаться со злыми духами, защищать людей и отправлять души умерших в загробный мир.', 8, 0, 'japan', 2004, 'bleach.jpg', 'https://www.youtube.com/watch?v=LjBfmmghHPQ');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `login` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `token` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `name`, `token`) VALUES
(1, 'qwerty', 'qwerty', 'qwerty', '14f742da7120e6f3b51f6931d7d7815e');

-- --------------------------------------------------------

--
-- Структура таблицы `wiki`
--

CREATE TABLE `wiki` (
  `series_id` int NOT NULL,
  `wiki_description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `wiki_history` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `wiki_authors` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `wiki`
--

INSERT INTO `wiki` (`series_id`, `wiki_description`, `wiki_history`, `wiki_authors`) VALUES
(1, 'История повествует о юном ниндзя из Конохагакуре но Сато, Узумаки Наруто, шумном и непоседливом ребенке, жаждущем признания односельчан. Его заветной мечтой является становление Хокаге, главным шиноби этой деревни. На пути к своей мечте ему приходится преодолевать различные трудности, сражаться плечом к плечу со своими напарниками, Учиха Саске и Харуно Сакурой под руководством опытного Джонина Хатаке Какаши, ученика самого Йондайме Хокаге, отца Наруто.', 'В 1995 году Кисимото получил «Hop Step Award», премию журнала Shonen Jump для молодых авторов, но в течение нескольких последующих лет его идеи для будущих работ отклонялись редакцией журнала. В конце концов он решил нарисовать историю о своём любимом блюде — рамэне. «Первоначальная версия манги была целиком посвящена секретным ингредиентам лапши, но после „небольшой“ редакции она превратилась в „Наруто“», — рассказал Кисимото', 'Кишимото Масаши, Кодачи Укьё, Хигашияма Акира, Кенджи Тайра'),
(2, 'Действие происходит в современной Японии. Однажды в спальне Ичиго Куросаки, который с детства был способен видеть духов и призраков, неожиданно появляется девушка-«проводник душ» («Cинигами») Рукия Кучики. Заговорив с Ичиго Рукия удивилась, что Ичиго может не только её видеть, но и дотрагиваться. Однако разговор прерывается появлением «пустого», сильного злого духа. В битве Рукия, защищавшая Ичиго, получает серьёзное ранение и понимает, что дальше сражаться не в состоянии. Она решает передать Ичиго половину своих сверхъестественных сил, чтобы он смог за себя постоять, но тот внезапно поглощает всю её энергию и одолевает «пустого» с лёгкостью. В результате Ичиго сам становится проводником душ, а Рукия остаётся практически беспомощной. Лишившись сил, она не может исполнять работу проводника душ, то есть сражаться с «пустыми» и отправлять души умерших в загробный мир («Сообщество душ»), поэтому уговаривает Ичиго помочь ей', 'В интервью автор «Блич» Тайто Кубо рассказывал, что идея манги зародилась у него тогда, когда возникло желание нарисовать синигами в кимоно. В частности, это послужило основой для дизайна проводника душ Рукии Кучики. Идея была предложена редакторам журнала Shonen Jump вскоре после прекращения выпуска Zombie Powder, предыдущей манги Тайто Кубо. Манга «Блич», как и неоконченная Zombie Powder, повествует о жизни и смерти. Кубо планировал опубликовать «Блич» максимум за пять лет. В планах автора не было сложной иерархической структуры Сообщества душ, но некоторые персонажи и задумки впоследствии вошли в сюжетную арку с арранкарами — такие, например, как родство Ичиго Куросаки с проводниками душ.', 'Тайто Кубо');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`character_name`);

--
-- Индексы таблицы `episodes`
--
ALTER TABLE `episodes`
  ADD PRIMARY KEY (`series_id`,`episode_id`);

--
-- Индексы таблицы `series`
--
ALTER TABLE `series`
  ADD PRIMARY KEY (`series_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `wiki`
--
ALTER TABLE `wiki`
  ADD PRIMARY KEY (`series_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `series`
--
ALTER TABLE `series`
  MODIFY `series_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
