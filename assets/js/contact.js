function sendMail(contactForm) {
    emailjs.send("service_u3saqym","template_3x7c7eu", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "request_summary": contactForm.requestsummary.value
    })
    .then(
        function(response) {
             alert("Thank you. We look forward to reading your message")
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    $('#contactForm')[0].reset(); 
    return false; 
}