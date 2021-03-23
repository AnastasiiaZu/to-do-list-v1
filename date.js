// creating my own Date module, instead of using it in the app.get

exports.getDate = function() { //exports === module.exports

  const today = new Date();

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

return today.toLocaleDateString("en-US", options); //options help to format the date string
};

exports.getDay = function() {

  const today = new Date();

  const options = {
    weekday: 'long',
  };

  return today.toLocaleDateString("en-US", options); //options help to format the date string
};
