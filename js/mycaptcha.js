// myCaptcha by S. Tymoshenko Dec 2022

// This plugin will hide and disable the submit button and generate a slider input element in its place.
// to use in your project wrap your button to protect inside a div and use ID and Class of "myCaptcha" for the div
// The plugin will prompt a user to move the slider to a randomly chosen position of left or right to receive a random math challenge
// the actual submit button will remain disabled and hidden until the slider and the math challenge has been answered correctly
// the mail-frm.js script will use the localStorage created on this page to pass the mail script name/path to the sendContact() function
// because this will not happen before the challenge is answered correctly we can eliminate spam bots from sending messages

// protecting multiple buttons on the same page is possible possible by duplicating this mycaptcha.js and renaming and updating the
// "myCaptcha" id to another name can be used with any mail script or used with the mail-frm.js script provided in this package.
// attached is a sample html file to test the plugin on a form, and a mailer.php file to test the mail-frm.js script

// Your mail script file name/path goes here:

var mailerScript = "mailer.php";

$(document).ready(function () {
  $("#submit").hide();
  renderSlider();
  document.getElementById("submit").setAttribute("disabled", "");
  localStorage.setItem("mailerScript", "");
});

function doneTyping() {
  var captchaAnswer = document.getElementById("mycaptcha_response").value;
  var myChallenge = localStorage.getItem("captchaChallenge");

  if (document.getElementById("mycaptcha_response").value.length == 0) {
    $("#error").text("You must answer the challenge to send a msg.");
  } else if (captchaAnswer != myChallenge) {
    $("#error").text("You answered incorrect, try again.");
  } else if (captchaAnswer == myChallenge) {
    $("#error").hide();
    document.getElementById("submit").removeAttribute("disabled", "");
    document.getElementById("mycaptcha_response").setAttribute("disabled", "");
    $("#submit").fadeIn("1000");
    $("#captcha_label").remove();
    $("#mycaptcha_response").remove();

    // if success give mail script var to localStorage
    localStorage.setItem("mailerScript", mailerScript);
  }
}

function myCaptcha() {
  var challenge = document.getElementById("captcha_label");
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 4) + 1;
  var myChallenge = "";

  var myOperator = "";
  var multiplier = Math.floor(Math.random() * 3) + 1;

  switch (multiplier) {
    case 1:
      multiplier == 1;
      var myOperator = " multiplied by ";
      myChallenge = num1 * num2;
      localStorage.setItem("captchaChallenge", myChallenge);
      break;
    case 2:
      multiplier == 2;
      myOperator = " plus ";
      myChallenge = num1 + num2;
      localStorage.setItem("captchaChallenge", myChallenge);
      break;
    case 3:
      multiplier == 3;
      myOperator = " minus ";
      myChallenge = num1 - num2;
      localStorage.setItem("captchaChallenge", myChallenge);
      break;
  }
  challenge.innerHTML = "What is " + num1 + myOperator + num2 + "?";

  //setup before functions
  var typingTimer; //timer identifier
  var doneTypingInterval = 1000; //time in ms, 5 seconds for example
  var $input = $("#mycaptcha_response");

  //on keyup, start the countdown
  $input.on("keyup", function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  });

  //on keydown, clear the countdown
  $input.on("keydown", function () {
    clearTimeout(typingTimer);
  });
}

function checkAnswer() {
  var $input = $("#mycaptcha_response");
}

function renderSlider() {
  // make the arrow random
  var slider_direction = Math.floor(Math.random() * 10) + 1;
  if (slider_direction > 5) {
    var direction_toslide =
      '<span style="font-size:2em; font-weight:700";>&#8592;</span>';
    var slide_value = 0;
  } else {
    var direction_toslide =
      '<span style="font-size:2em; font-weight:700";>&#8594;</span>';
    var slide_value = 100;
  }

  var html =
    '<style>input[type=range]{-webkit-appearance:none}input[type=range]::-webkit-slider-runnable-track{width:100%;height:5px;background:#2479e7;border:none;border-radius:3px; z-index:999;}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;border:none;height:16px;width:16px;border-radius:50%;background:#ffd700;margin-top:-4px}input[type=range]:focus{outline:0}input[type=range]:focus::-webkit-slider-runnable-track{background:#ccc}</style><div id="sliderCaptcha" style="text-align:center; margin-left:-3%; margin-top:20px;"><input id="rangeChallenge" aria-label="human test slider" type="range" class="captcha_slider"/><p style="margin-left:20px; margin-top:-50px; background-color:#fff; padding: 10px;"><style>.value{opacity:0!important;} #sliderCaptcha .active{background:rgba(0,0,0,0)!important;}</style>MyCaptcha by S. Tymoshenko<br> <span style="font-size:1em ;font-weight:700;"><span style="color:#2479e7; font-weight:700;">&#9432;</span> Move above slider to the <span style="color:#2479e7;">' +
    direction_toslide +
    "</span> to reveal the submit button</span></p></div>";
  $(".myCaptcha").append(html);

  var p = document.getElementById("rangeChallenge");
  p.addEventListener(
    "change",
    function () {
      if (p.value == slide_value) {
        $("#sliderCaptcha").hide();
        $("#captcha_label").fadeIn();
        $("#mycaptcha_response").fadeIn();

        var html =
          '<br><div class="block" style="text-align:center; margin-top:20px;"><label id="captcha_label" style="display:inline-block;text-align:right; float:left; margin-top:1.5%; margin-right:18px; font-weight:700"></label><input type="text" id="mycaptcha_response" class="form-control" value="" style="width:26%; border:1px solid grey";"><span style="background:#fff; color:red!important; font-weight:500;" id="error"></span></div>';
        $(html).appendTo(".myCaptcha").hide().show("2000");
        $("#sliderCaptcha").remove();
        myCaptcha();
      }
    },
    false
  );
}
