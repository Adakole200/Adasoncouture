function sendToWhatsApp(event) {
    event.preventDefault()

    const name = document.getElementById("name").value;
    const outfit = document.getElementById("outfit").value;
    const details = document.getElementById("details").value;

    const phoneNumber = "2349023741946"

    const message = 'Hello Adason Couture,%OA%OA' +
    'Name: ${name}%OA' +
    'Outfit Type: ${outfit}%OA' +
    'Details: ${details}';

    const whatsappURL = 'https://wa.me/${phonenumber}?text=${message}';
    window.open(whatsappURL, "_blank");
}

function orderlool(lookname) {
    const phoneNumber = "2349023741946";

    const message = "Hello Adason Couture,%OA%OA" +
    "I would like to order:%OA" +lookname;

    const url = "https://wa.me/" + phoneNumber + "?text" + message;
    window.open(url, "_blank");
}