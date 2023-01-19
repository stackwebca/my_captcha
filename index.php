<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="Description" content="Simple and free captcha to remove bot submitted messages" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css" />
    <!-- material design for bootstrap  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.20.0/css/mdb.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
    <title> </title>
</head>

<body>
    <div class="container">
        <div class="row">

            <!--Grid column-->
            <div id="mail_container" class="col-lg-6 offset-lg-3 my-4 mb-md-0 pl-4">
                <form id="contactFRM" name="contactFRM" method="" action="" class="form-group" style="color: black; font-weight:700;">
                    <!--Grid row-->
                    <div class="form-row">

                        <!--Grid column-->
                        <div class="col-md-12">

                            <!-- Material outline input -->
                            <div class="md-form md-outline mt-2 mb-0"><span id="fname-label" style="float:right; color:red;"></span>
                                <input name="contact-fname" aria-label="Enter your first name" type="text" id="contact-fname" class="form-control" required>
                                <label for="contact-fname">Name</label>
                            </div>

                        </div>
                        <!--Grid column-->

                        <!--Grid column-->
                        <div class="col-md-6">

                        </div>
                        <!--Grid column-->

                    </div>
                    <!--Grid row-->

                    <!-- Material outline input -->
                    <div class="md-form md-outline my-0"><span id="company-label" style="float:right; color:red;"></span>
                        <input name="contact-company" aria-label="Enter your company name" type="text" id="contact-company" class="form-control required">
                        <label for="contact-company">Company</label>
                    </div>

                    <!-- Material outline input -->
                    <div class="md-form md-outline my-0"><span id="email-label" style="float:right; color:red;"></span>
                        <input name="msgmail" aria-label="Enter your email address" type="email" id="msgmail" class="form-control" required>
                        <label for="msgmail">Email</label>
                    </div>

                    <!-- Material outline input -->
                    <div class="md-form md-outline my-0"><span id="phone-label" style="float:right; color:red;"></span>
                        <input name="mstel" aria-label="Enter your telephone number" type="tel" id="mstel" class="form-control" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                        <label for="mstel">Phone</label>
                    </div>

                    <!--Material textarea-->
                    <div class="md-form md-outline my-0"><span id="message-label" style="float:right; color:red;"></span>
                        <textarea name="contact-message" aria-label="Enter your message" id="contact-message" class="md-textarea form-control required" rows="4"></textarea>
                        <label for="contact-message">Message</label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline ml-auto mr-auto" id="robot" data-animation="fade">
                        <input type="checkbox" aria-label="Request a copy of my resume" class="custom-control-input" id="request_cv" name="request_cv">
                        <label class="custom-control-label" for="request_cv">
                            Request Resume </label>
                    </div>
                    <div id="mail-status"></div>
                </form>

                <div id="myCaptcha" class="myCaptcha">
                    <button id="submit" aria-label="submit your message" name="submit" onclick="sendContact()" class="btn btn-info btn-lg ml-0 mt-5">Submit<i class="far fa-paper-plane ml-2"></i>
                    </button>
                </div>

            </div>
            <div id="frm_anchor"></div>
            <!--Grid column-->

        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.20.0/js/mdb.min.js"></script>
    <script src="./js/mycaptcha.js"></script>
    <script src="./js/mail-frm.js"></script>
</body>

</html>