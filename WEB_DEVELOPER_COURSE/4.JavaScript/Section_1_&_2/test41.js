// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temperature) {
    if (typeof (temperature) === 'number') {
        if (temperature >= 75)
            return true;
        else
            return false;
    }
}