var INFO_TITLE = 'US REAL ESTATE PRICES AVERAGED OVER ALL HOMES PER COUNTY';
var INFO_LOAD = '';

var opts = {
    lines: 9, // The number of lines to draw
    length: 25, // The length of each line
    width: 8, // The line thickness
    radius: 34, // The radius of the inner circle
    color: '#ffffff', // #rgb or #rrggbb or array of colors
    speed: 1.9, // Rounds per second
    trail: 40, // Afterglow percentage
    className: 'spinner', // The CSS class to assign to the spinner
};

var target = document.getElementById('container');
var info = document.getElementById('info');

var spinner = new Spinner(opts).spin(target);
info.innerHTML = INFO_LOAD;