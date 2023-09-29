<?php

class Series
{
	protected $db = null;

	function __construct($db)
	{
		$this->db = $db;
	}

	public function getAnimeBySeriesId($seriesId)
	{
		return $this->db->getAnimeBySeriesId($seriesId);
	}

	public function getCharactersBySeriesId($seriesId)
	{
		return $this->db->getCharactersBySeriesId($seriesId);
	}

	public function getAllSeries() {
		return $this->db->getAllSeries();
	}
}
