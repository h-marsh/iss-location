'use strict';
const btn = document.querySelector('#button');
const mapContainer = document.querySelector('#map');

const loadMap = async function () {
	const mapZoomLevel = 3;
	const response = await fetch(
		'https://api.wheretheiss.at/v1/satellites/25544'
	);
	const { latitude, longitude } = await response.json();

	const coords = [latitude, longitude];

	const map = L.map('map').setView(coords, mapZoomLevel);

	L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
		attribution:
			'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	}).addTo(map);

	L.marker(coords).addTo(map);
};

loadMap();

// const reloadMap = async function () {
// 	map.remove();
// 	const map11 = L.map('map').setView(coords, mapZoomLevel);
// 	const map1 = create('reloadMap', '', mapContainer);
// 	loadMap();
// };

// btn.addEventListener('click', reloadMap);
