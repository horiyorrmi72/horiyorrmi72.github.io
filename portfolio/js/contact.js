document
  .querySelector(".form form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const senderName = document.querySelector('.form [name="name"]').value;
    const subject = document.querySelector('.form [name="subject"]').value;
    const email = document.querySelector('.form [name="email"]').value;
    const message = document.querySelector('.form [name="message"]').value;

    const formData = {
      name: senderName,
      email: email,
      subject: subject,
      message: message,
    };

    fetch(" https://sore-teal-snapper-fez.cyclic.app/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        document.querySelector('.form [name="name"]').value = "";
        document.querySelector('.form [name="subject"]').value = "";
        document.querySelector('.form [name="email"]').value = "";
        document.querySelector('.form [name="message"]').value = "";
      })
      .catch((err) => {
        console.log('Error:',err);
      });
  });
