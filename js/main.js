function getRandomInt(min, max) {
  return Math.floor( Math.random() * (max - min + 1) + min);
}

function checkLength(commentary, maxLength)
{
  return commentary.length <= maxLength;
}

getRandomInt(0, 10);
checkLength('abx', 10);
