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

/* number spinner */
(function($) {
	$.fn.spinner = function() {
		this.each(function() {
			var el = $(this);
      var timeoutUpA;
      var timeoutUpB;
      var timeoutDownA;
      var timeoutDownB;
      var intervalUpA;
      var intervalUpB;
      var intervalDownA;
      var intervalDownB;

			// add elements
			el.wrap('<span class="spinner"></span>');
			el.before('<span class="sub">-</span>');
			el.after('<span class="add">+</span>');

      // substract mousedown
			el.parent().on('mousedown', '.sub', function () {
        var min = parseInt(el.attr('min'));
        var val = parseInt(el.val());
				if (val > min){
          el.val( function(i, oldval) { return --oldval; });
          timeoutDownA = setTimeout(function(){
            intervalDownA = setInterval(function () {
              if(val >= min){
                el.val(val--);
              }else{
                clearInterval(intervalDownA);
              }
            }, 50);
          },500);
          timeoutDownB = setTimeout(function(){
            clearInterval(intervalDownA);
            intervalDownB = setInterval(function () {
              if(val >= min){
                el.val(val--);
              }else{
                clearInterval(intervalDownB);
              }
            }, 10);
          },4000);
        }
			});

			// increment mousedown
			el.parent().on('mousedown', '.add', function () {
        var max = parseInt(el.attr('max'));
        var val = parseInt(el.val());
				if (val < max){
          el.val( function(i, oldval) { return ++oldval; });
          timeoutUpA = setTimeout(function(){
            intervalUpA = setInterval(function () {
              if(val <= max){
                el.val(val++);
              }else{
                clearInterval(intervalUpA);
              }
            }, 50);
          },500);
          timeoutUpB = setTimeout(function(){
            clearInterval(intervalUpA);
            intervalUpB = setInterval(function () {
              if(val <= max){
                el.val(val++);
              }else{
                clearInterval(intervalUpB);
              }
            }, 10);
          },4000);
        }
			});

      el.parent().on('mouseup','.add',function(){
        clearTimeout(timeoutUpA);
        clearTimeout(timeoutUpB);
        clearInterval(intervalUpA);
        clearInterval(intervalUpB);
      });

      el.parent().on('mouseup','.sub',function () {
        clearTimeout(timeoutDownA);
        clearTimeout(timeoutDownB);
        clearInterval(intervalDownA);
        clearInterval(intervalDownB);
      });

    });
	};
})(jQuery);

$('input[type=number]').spinner();
