# my_captcha
A simple captcha plugin to eliminate spam messages from submit forms

This plugin will hide and disable the submit button and generate a slider input element in its place.
to use in your project wrap your button to protect inside a div and use ID and Class of "myCaptcha" for the div
The plugin will prompt a user to move the slider to a randomly chosen position of left or right to receive a random math challenge
the actual submit button will remain disabled and hidden until the slider and the math challenge has been answered correctly
the mail-frm.js script will use the localStorage created on this page to pass the mail script name/path to the sendContact() function
because this will not happen before the challenge is answered correctly we can eliminate spam bots from sending messages

protecting multiple buttons on the same page is possible by duplicating this mycaptcha.js and renaming and updating the
myCaptcha" id to another name can be used with any mail script or used with the mail-frm.js script provided in this package.  
attached is a sample html file to test the plugin on a form, and a mailer.php file to test the mail-frm.js script
