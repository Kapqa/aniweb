<?php

require('converter/Converter.php');

class DataBase
{
	protected $connection = null;
	protected $converter = null;

	function __construct($config)
	{
		$this->converter = new Converter();

		try {
			$this->connection = new PDO(
				$config->driver . ':host=' . $config->host . ';port=' . $config->port . ';dbname=' . $config->name,
				$config->user,
				$config->password
			);
		} catch (Exception $e) {
			print_r($e->getMessage());
			die;
		}
	}

	public function getArray($query)
	{
		$stmt = $this->connection->query($query);

		if ($stmt) {
			$result = array();

			while ($row = $stmt->fetch(PDO::FETCH_OBJ)) {
				$result[] = $row;
			}

			return $result;
		}
	}

	public function updateToken($id, $token)
	{
		return $this->simpleUpdateById('users', 'token', $token, $id);
	}

	public function getUser($login)
	{
		$query = 'SELECT * FROM users WHERE login=?';
		return $this->protectQuery($query, [$login])->fetchObject();
	}


	public function addUser($login, $password, $name)
	{
		$query = 'INSERT INTO users (login, password, name) VALUES (?,?,?)';
		return $this->protectQuery($query, [$login, $password, $name])->fetchObject();
	}

	public function getUserByToken($token)
	{
		$query = 'SELECT id FROM users WHERE token=?';
		return $this->protectQuery($query, [$token])->fetchObject();
	}

	public function getAnimeBySeriesId($seriesId)
	{
		$query = "SELECT * FROM series LEFT JOIN wiki ON series.series_id = wiki.series_id WHERE series.series_id=?";
		$res = $this->protectQuery($query, [$seriesId])->fetchObject();
		$res->series_preview = $this->converter->convertToBase64($res->series_preview);
		return $res;
	}

	public function getCharactersBySeriesId($seriesId)
	{
		$query = "
			SELECT character_name as name, character_description as description
			FROM characters
			WHERE series_id=" . $seriesId;

		return $this->getArray($query);
	}

	public function getAllSeries()
	{
		$query = "SELECT * FROM series";
		$seriesList = $this->getArray($query);

		foreach ($seriesList as $anime) {
			$anime->series_preview = $this->converter->convertToBase64($anime->series_preview);
		}

		return $seriesList;
	}

	private function protectQuery($query, $arr)
	{
		$sth = $this->connection->prepare($query);
		$sth->execute($arr);
		return $sth;
	}

	private function simpleUpdateById($table, $field, $value, $id)
	{
		$query = 'UPDATE ' . $table . ' SET ' . $field . '=? WHERE id=?';
		$sth = $this->connection->prepare($query);
		$sth->execute([$value, $id]);
		return true;
	}
}
