This simple captcha plugin eliminates spam messages from submit forms. The plugin hides and disables the submit button, and instead generates a slider input element. 

To use in your project, wrap the protected button inside a div and use the ID and Class of "myCaptcha" for the div. The plugin will prompt the user to move the slider to a randomly chosen position of left or right and answer a random math challenge. The actual submit button will remain disabled and hidden until the slider and math challenge have been answered correctly. The mail-frm.js script uses localStorage to pass the mail script name/path to the sendContact() function, ensuring that no spam bots can send messages before the challenge is answered correctly. 

To protect multiple buttons on the same page, duplicate the mycaptcha.js and rename and update the "myCaptcha" ID to another name. This plugin can be used with any mail script or with the mail-frm.js script provided in this package and is a free to use solution that can be modified to work with existing mail/submit functions. 

Attached is a sample index.php file to test the plugin on a form and a mailer.php file to test the mail-frm.js script.
