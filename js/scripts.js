// Creates 20x20 default grid when DOM is ready
$(document).ready(function(){
  for (var i = 0; i < 20; i++) {
    for  (var k = 0; k < 20; k++) {
      $('#grid-container').append('<div class="square"></div>');
    }
  }

  // Creates "drawing effect" when mouse enters the grid using selected color
  $(document).on('mouseover', '.square', function(){
      $(this).addClass('colorize-' + colorSelected);
      if (colorSelected === 'random') {
        $(this).css("background-color", randomColor());   
      }
      if (colorSelected === 'greyscale') {
        var currentOpa = +$(this).css("opacity") + +0.1;
        $(this).css("opacity", currentOpa);   
      }
  });
});

// Selects 'default' as the default color for drawing
var colorSelected = 'default';

// Changes the drawing color to the color selected by the user
function colorize (color) {
    clearGrid();
    colorSelected = color;
}

// Random color function
function randomColor() {
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

//Clears the grid
function clearGrid() {
    $('.square').css('background-color', '');
    $('.square').removeClass('colorize-random');
    $('.square').removeClass('colorize-default');
    $('.square').removeClass('colorize-greyscale');
}

// Creates new grid based on user input
function createGrid() {
    var $gridSize = $('input:text[name=grid-input]').val();

    // Checks if the grid size inputted by user is valid (not empty and it is number)
    if ($gridSize !== "" && isNaN($gridSize) === false) {
      if ($gridSize < 0 || $gridSize > 100) {
          alert('The number you entered is outside the range!');
      }
      else {
        $('.square').remove();
        var $squareSize = (500 / $gridSize) - 2;
        for (var i = 0; i < $gridSize; i++) {
          for  (var k = 0; k < $gridSize; k++) {
            $('#grid-container').append('<div class="square"></div>');
          }
        }
        $('.square').css({"height":$squareSize,"width":$squareSize}); 
      }
    }
}

