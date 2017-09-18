var myCanvas, input, button, greeting,r,g,b,tmin,tmax,trotate;

function setup() {

  // create canvas
  myCanvas = updateCanvas();
  myCanvas.parent('Content');

  //parentElement = createElement('div','');

  //input = createInput();
  //input.position(20, 65);

  //button = createButton('submit');
  //button.position(input.x + input.width, 65);
  //button.mousePressed(greet);

  //greeting = createElement('h2', 'what is your name?');
  //greeting.position(20, 5);

  //greeting.parent(parentElement);
  //input.parent(parentElement);
  //button.parent(parentElement);

  //parentElement.parent('Controls');

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  //var name = input.value();
  //greeting.html('hello '+name+'!');
  //input.value('');

  updateControls();

  for (var i=0; i<200; i++) {
    push();
    fill(r, g, b);
    translate(random(width), random(height));
    rotate(random(trotate));
    text('Dan', 0, 0);
    pop();
  }
}

function updateCanvas() {
    var winwidth = $(window).width();
    var winheight = $('#Content').height();
    return createCanvas(winwidth,winheight);
}

function updateControls() {
  // fill
  r = $('#fill_r').val();
  g = $('#fill_g').val();
  b = $('#fill_b').val();
  // translate
  tmin = $('#tmin').val();
  tmax = $('#tmax').val();
  // rotate
  trotate = $('#rotate').val();

  return r,g,b,tmin,tmax,trotate;

}
