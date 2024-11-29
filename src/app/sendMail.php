<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $params = json_decode($json);

    // Log für Debugging
    error_log("Received request: " . print_r($params, true));

    $email = filter_var($params->email, FILTER_SANITIZE_EMAIL);
    $name = htmlspecialchars($params->name);
    $message = htmlspecialchars($params->message);

    $recipient = 'contact@fuad-hussen.com';
    $subject = "Neue Kontaktanfrage von $name";
    $emailBody = "Name: $name\nEmail: $email\n\nNachricht:\n$message";

    $headers = [
        'From: noreply@fuad-hussen.com',
        'Reply-To: ' . $email,
        'X-Mailer: PHP/' . phpversion(),
        'Content-Type: text/plain; charset=UTF-8'
    ];

    $mailSent = mail($recipient, $subject, $emailBody, implode("\r\n", $headers));

    if ($mailSent) {
        echo json_encode(['status' => 'success', 'message' => 'Email sent successfully']);
    } else {
        error_log("Failed to send email");
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Failed to send email']);
    }
}
