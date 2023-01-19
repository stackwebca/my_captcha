<?php
        // simple text Mail PHP Script                                        

        $emailTo = "yourmail@anyemail.com";

            $company = $_POST['contact-company'];
            $contactName = $_POST['contact-fname'];
            $contactel = $_POST['mstel'];
            $email = $_POST['msgmail'];
            $subject = "mail msg";
            $msg = $_POST['contact-message'];
            $resumeReq = $_POST['request_cv'];
            
            if($resumeReq == "on"){
                $resume = "yes";
            } else {
                $resume = "not requested";
            }

            $message = ' <!doctype html> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"> '
                . 'Name: ' . $contactName . '<br>Company: ' . $company . '<br><br>Phone: ' . $contactel . '<br>Email: ' . $email . '<br>request_cv: ' . $resume . '<br><br>Message:<br><br>' . $msg;

            $headers = "From: info@yourdomain.com" . " \r\n";
            $headers .= "Reply-To: " . $email . "\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

            mail($emailTo, $subject, $message, $headers);