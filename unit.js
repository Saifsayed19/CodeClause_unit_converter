lengthFromUnit = document.getElementById('length-from-unit');
lengthFromValue = document.getElementById('length-from-value');
lengthToUnit = document.getElementById('length-to-unit');
lengthToValue = document.getElementById('length-to-value');

weightFromUnit = document.getElementById('weight-from-unit');
weightFromValue = document.getElementById('weight-from-value');
weightToUnit = document.getElementById('weight-to-unit');
weightToValue = document.getElementById('weight-to-value');

temperatureFromUnit = document.getElementById('temperature-from-unit');
temperatureFromValue = document.getElementById('temperature-from-value');
temperatureToUnit = document.getElementById('temperature-to-unit');
temperatureToValue = document.getElementById('temperature-to-value');

speedFromUnit = document.getElementById('speed-from-unit');
speedFromValue = document.getElementById('speed-from-value');
speedToUnit = document.getElementById('speed-to-unit');
speedToValue = document.getElementById('speed-to-value');

function convertLength() {
	if (lengthFromUnit.value == 'mm') {
		if (lengthToUnit.value == 'mm') {
			lengthToValue.value = 'error';
		}
		if (lengthToUnit.value == 'cm') {
			lengthToValue.value = lengthFromValue.value / 10;
		}
		if (lengthToUnit.value == 'inch') {
			lengthToValue.value = lengthFromValue.value / 25.4;
		}
		if (lengthToUnit.value == 'foot') {
			lengthToValue.value = lengthFromValue.value / 305;
		}
		if (lengthToUnit.value == 'meter') {
			lengthToValue.value = lengthFromValue.value / 1000;
		}
		if (lengthToUnit.value == 'km') {
			lengthToValue.value = lengthFromValue.value / 1e+6;
		}
		if (lengthToUnit.value == 'mile') {
			lengthToValue.value = lengthFromValue.value / 1.609e+6;
		}
	}
	if (lengthFromUnit.value == 'cm') {
		if (lengthToUnit.value == 'mm') {
			lengthToValue.value = lengthFromValue.value * 10;
		}
		if (lengthToUnit.value == 'cm') {
			lengthToValue.value = 'error';
		}
		if (lengthToUnit.value == 'inch') {
			lengthToValue.value = lengthFromValue.value / 2.54;
		}
		if (lengthToUnit.value == 'foot') {
			lengthToValue.value = lengthFromValue.value / 30.48;
		}
		if (lengthToUnit.value == 'meter') {
			lengthToValue.value = lengthFromValue.value / 100;
		}
		if (lengthToUnit.value == 'km') {
			lengthToValue.value = lengthFromValue.value / 100000;
		}
		if (lengthToUnit.value == 'mile') {
			lengthToValue.value = lengthFromValue.value / 160934;
		}
	}
	if (lengthFromUnit.value == 'inch') {
		if (lengthToUnit.value == 'mm') {
			lengthToValue.value = lengthFromValue.value * 25.4;
		}
		if (lengthToUnit.value == 'cm') {
			lengthToValue.value = lengthFromValue.value * 2.54;
		}
		if (lengthToUnit.value == 'inch') {
			lengthToValue.value = 'error';
		}
		if (lengthToUnit.value == 'foot') {
			lengthToValue.value = lengthFromValue.value / 12;
		}
		if (lengthToUnit.value == 'meter') {
			lengthToValue.value = lengthFromValue.value / 39.37;
		}
		if (lengthToUnit.value == 'km') {
			lengthToValue.value = lengthFromValue.value / 39370;
		}
		if (lengthToUnit.value == 'mile') {
			lengthToValue.value = lengthFromValue.value / 63360;
		}
	}
	if (lengthFromUnit.value == 'foot') {
		if (lengthToUnit.value == 'mm') {
			lengthToValue.value = lengthFromValue.value * 305;
		}
		if (lengthToUnit.value == 'cm') {
			lengthToValue.value = lengthFromValue.value * 30.48;
		}
		if (lengthToUnit.value == 'inch') {
			lengthToValue.value = lengthFromValue.value * 12;
		}
		if (lengthToUnit.value == 'foot') {
			lengthToValue.value = 'error';
		}
		if (lengthToUnit.value == 'meter') {
			lengthToValue.value = lengthFromValue.value / 3.281;
		}
		if (lengthToUnit.value == 'km') {
			lengthToValue.value = lengthFromValue.value / 3281;
		}
		if (lengthToUnit.value == 'mile') {
			lengthToValue.value = lengthFromValue.value / 5280;
		}
	}
	if (lengthFromUnit.value == 'meter') {
		if (lengthToUnit.value == 'mm') {
			lengthToValue.value = lengthFromValue.value * 1000;
		}
		if (lengthToUnit.value == 'cm') {
			lengthToValue.value = lengthFromValue.value * 100;
		}
		if (lengthToUnit.value == 'inch') {
			lengthToValue.value = lengthFromValue.value * 39.37;
		}
		if (lengthToUnit.value == 'foot') {
			lengthToValue.value = lengthFromValue.value * 3.281;
		}
		if (lengthToUnit.value == 'meter') {
			lengthToValue.value = 'error';
		}
		if (lengthToUnit.value == 'km') {
			lengthToValue.value = lengthFromValue.value / 1000;
		}
		if (lengthToUnit.value == 'mile') {
			lengthToValue.value = lengthFromValue.value / 1609;
		}
	}
	if (lengthFromUnit.value == 'km') {
		if (lengthToUnit.value == 'mm') {
			lengthToValue.value = lengthFromValue.value * 1e+6;
		}
		if (lengthToUnit.value == 'cm') {
			lengthToValue.value = lengthFromValue.value * 100000;
		}
		if (lengthToUnit.value == 'inch') {
			lengthToValue.value = lengthFromValue.value * 39370;
		}
		if (lengthToUnit.value == 'foot') {
			lengthToValue.value = lengthFromValue.value * 3281;
		}
		if (lengthToUnit.value == 'meter') {
			lengthToValue.value = lengthFromValue.value * 1000;
		}
		if (lengthToUnit.value == 'km') {
			lengthToValue.value = 'error';
		}
		if (lengthToUnit.value == 'mile') {
			lengthToValue.value = lengthFromValue.value / 1.609;
		}
	}
}
function convertWeight() {
	if (weightFromUnit.value == 'gram') {
	    if (weightToUnit.value == 'gram') {
			weightToValue.value = 'error';
		}
		if (weightToUnit.value == 'ounce') {
			weightToValue.value = weightFromValue.value / 28.35;
		}
		if (weightToUnit.value == 'pound') {
			weightToValue.value = weightFromValue.value / 454;
		}
		if (weightToUnit.value == 'kg') {
			weightToValue.value = weightFromValue.value / 1000;
		}
	}
	if (weightFromUnit.value == 'ounce') {
		if (weightToUnit.value == 'gram') {
			weightToValue.value = weightFromValue.value * 28.35;
		}
		if (weightToUnit.value == 'ounce') {
			weightToValue.value = 'error';
		}
		if (weightToUnit.value == 'pound') {
			lweightToValue.value = weightFromValue.value / 16;
		}
		if (weightToUnit.value == 'kg') {
			weightToValue.value = weightFromValue.value / 35.274;
		}
	}
	if (weightFromUnit.value == 'pound') {
		if (weightToUnit.value == 'gram') {
			weightToValue.value = weightFromValue.value * 454;
		}
		if (weightToUnit.value == 'ounce') {
			weightToValue.value = weightFromValue.value * 16;
		}
		if (weightToUnit.value == 'pound') {
			weightToValue.value = 'error';
		}
		if (weightToUnit.value == 'kg') {
			weightToValue.value = weightFromValue.value / 2.205;
		}
	}
	if (weightFromUnit.value == 'kg') {
		if (weightToUnit.value == 'gram') {
			weightToValue.value = weightFromValue.value * 1000;
		}
		if (weightToUnit.value == 'ounce') {
			weightToValue.value = weightFromValue.value * 35.274;
		}
		if (weightToUnit.value == 'pound') {
			weightToValue.value = weightFromValue.value * 2.205;
		}
		if (weightToUnit.value == 'kg') {
			weightToValue.value = 'error';
		}
	}
}
function convertTemperature() {
	if (temperatureFromUnit.value == 'centigrade') {
		if (temperatureToUnit.value == 'centigrade') {
			temperatureToValue.value = 'error';
		}
		if (temperatureToUnit.value == 'fahrenheit') {
			temperatureToValue.value = (temperatureFromValue.value * 9/5) + 32;
		}
		if (temperatureToUnit.value == 'kelvin') {
			temperatureToValue.value = temperatureFromValue.value + 273.15;
		}
	}
	if (temperatureFromUnit.value == 'fahrenheit') {
		if (temperatureToUnit.value == 'centigrade') {
			temperatureToValue.value = (temperatureFromValue.value - 32) * 5/9;
		}
		if (temperatureToUnit.value == 'fahrenheit') {
			temperatureToValue.value = 'error';
		}
		if (temperatureToUnit.value == 'kelvin') {
			temperatureToValue.value = (temperatureFromValue.value - 32) * 5/9 + 273.15;
		}
	}
	if (temperatureFromUnit.value == 'kelvin') {
		if (temperatureToUnit.value == 'centigrade') {
			temperatureToValue.value = temperatureFromValue.value - 273.15;
		}
		if (temperatureToUnit.value == 'fahrenheit') {
			temperatureToValue.value = (temperatureFromValue.value - 273.15) * 9/5 + 32;
		}
		if (temperatureToUnit.value == 'kelvin') {
			temperatureToValue.value = 'error';
		}
	}
}
function convertSpeed() {
	if (speedFromUnit.value == 'fts') {
		if (speedToUnit.value == 'fts') {
			speedToValue.value = 'error';
		}
		if (speedToUnit.value == 'ms') {
			speedToValue.value = speedFromValue.value / 3.281;
		}
		if (speedToUnit.value == 'kmh') {
			speedToValue.value = speedFromValue.value / 1.097;
		}
		if (speedToUnit.value == 'mih') {
			speedToValue.value = speedFromValue.value / 1.467;
		}
		if (speedToUnit.value == 'lightspeed') {
			speedToValue.value = speedFromValue.value / 9.836e+8;
		}
	}
	if (speedFromUnit.value == 'ms') {
		if (speedToUnit.value == 'fts') {
			speedToValue.value = speedFromValue.value * 3.281;
		}
		if (speedToUnit.value == 'ms') {
			speedToValue.value = 'error';
		}
		if (speedToUnit.value == 'kmh') {
			speedToValue.value = speedFromValue.value * 3.6;
		}
		if (speedToUnit.value == 'mih') {
			speedToValue.value = speedFromValue.value * 2.237;
		}
		if (speedToUnit.value == 'lightspeed') {
			speedToValue.value = speedFromValue.value / 2.998e+8;
		}
	}
	if (speedFromUnit.value == 'kmh') {
		if (speedToUnit.value == 'fts') {
			speedToValue.value = speedFromValue.value / 1.097;
		}
		if (speedToUnit.value == 'ms') {
			speedToValue.value = speedFromValue.value / 3.6;
		}
		if (speedToUnit.value == 'kmh') {
			speedToValue.value = 'error';
		}
		if (speedToUnit.value == 'mih') {
			speedToValue.value = speedFromValue.value / 1.609;
		}
		if (speedToUnit.value == 'lightspeed') {
			speedToValue.value = speedFromValue.value / 1.079e+9;
		}
	}
	if (speedFromUnit.value == 'mih') {
		if (speedToUnit.value == 'fts') {
			speedToValue.value = speedFromValue.value * 1.467;
		}
		if (speedToUnit.value == 'ms') {
			speedToValue.value = speedFromValue.value / 2.237;
		}
		if (speedToUnit.value == 'kmh') {
			speedToValue.value = speedFromValue.value * 1.609;
		}
		if (speedToUnit.value == 'mih') {
			speedToValue.value = 'error';
		}
		if (speedToUnit.value == 'lightspeed') {
			speedToValue.value = speedFromValue.value / 6.706e+8;
		}
	}
	if (speedFromUnit.value == 'lightspeed') {
		if (speedToUnit.value == 'fts') {
			speedToValue.value = speedFromValue.value * 9.836e+8;
		}
		if (speedToUnit.value == 'ms') {
			speedToValue.value = speedFromValue.value * 2.998e+8;
		}
		if (speedToUnit.value == 'kmh') {
			speedToValue.value = speedFromValue.value * 1.079e+9;
		}
		if (speedToUnit.value == 'mih') {
			speedToValue.value = speedFromValue.value * 6.706e+8;
		}
	    if (speedToUnit.value == 'lightspeed') {
			speedToValue.value = 'error';
		}
	}
}