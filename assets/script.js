window.addEventListener("load", () => {
  emailjs.init({
    publicKey: "gcxIGCyDC6xpN93UL",
  });
});

function sendMail() {
  let name = document.getElementById("nome").value;
  let cognome = document.getElementById("cognome").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let params = {
    from_name: name + " " + cognome,
    reply_to: email,
    message_html: message,
  };
  if (email === "") {
    alert("Compila tutto. Riprova più tardi.");
    console.error("Email non può essere vuota.");
    return false; // Non eseguire l'invio se l'email è vuota
  }
  emailjs.send("service_uwkpzk2", "template_zulapcq", params).then(
    function (response) {
      alert("Email inviata con successo!");
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      alert("Compila tutto. Riprova più tardi.");
      console.log("FAILED...", error);
    }
  );

  return false;
}
