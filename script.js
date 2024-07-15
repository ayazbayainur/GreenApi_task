async function getIdInstance() {
  try {
    var form1 = document.getElementById("form1");
    var idInstance = document.getElementById(form1[0].id).value;
    var ApiTokenInstance = form1.elements[1].value;
    var url = `https://7103.api.greenapi.com/waInstance${idInstance}/getSettings/${ApiTokenInstance}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    document.getElementById("answerText").textContent = JSON.stringify(json, null, 3);
  } catch (error) {
    console.error(error.message);
  }

}


async function getStateInstance() {
  try {
    var form1 = document.getElementById("form1");
    var idInstance = document.getElementById(form1[0].id).value;
    var ApiTokenInstance = form1.elements[1].value;
    var url = `https://7103.api.greenapi.com/waInstance${idInstance}/getStateInstance/${ApiTokenInstance}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    document.getElementById("answerText").textContent = JSON.stringify(json, null, 3);
  } catch (error) {
    console.error(error.message);
  }
}


async function sendMessage() {
  try {
    var form2 = document.getElementById("form2");
    var telephoneNumb = form2.elements[0].value + "@c.us";
    var message = form2.elements[1].value;
    var form1 = document.getElementById("form1");
    var idInstance = document.getElementById(form1[0].id).value;
    var ApiTokenInstance = form1.elements[1].value;
    var url = `https://7103.api.greenapi.com/waInstance${idInstance}/sendMessage/${ApiTokenInstance}`;
    fetch(url,
      {
        method: "POST",
        body: JSON
          .stringify
          ({
            chatId: telephoneNumb,
            message: message,
          }),
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((json) => document.getElementById("answerText").textContent = JSON.stringify(json, null, 3));
  } catch (error) {
    console.error(error.message);
  }
}

async function sendFileByUrl() {
  try {
    var form3 = document.getElementById("form3");
    var telephoneNumb = form3.elements[0].value + "@c.us";
    var fileName = form3.elements[1].value;
    var fileUrl = form3.elements[2].value;
    var form1 = document.getElementById("form1");
    var idInstance = document.getElementById(form1[0].id).value;
    var ApiTokenInstance = form1.elements[1].value;
    var url = `https://7103.api.greenapi.com/waInstance${idInstance}/sendFileByUrl/${ApiTokenInstance}`;

    const response = await fetch(url,
      {
        method: "POST",
        body: JSON
          .stringify
          ({
            chatId: telephoneNumb,
            urlFile: fileUrl,
            fileName: fileName,
          }),
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((json) => document.getElementById("answerText").textContent = JSON.stringify(json, null, 3))
  } catch (error) {
    console.error(error.message);
  }
}



form1[2].addEventListener("click", (event) => {
  event.preventDefault();
  getIdInstance();
});

form1[3].addEventListener("click", (event) => {
  event.preventDefault();
  getStateInstance();
});

form2[2].addEventListener("click", (event) => {
  event.preventDefault();
  sendMessage();
});

form3[3].addEventListener("click", (event) => {
  event.preventDefault();
  sendFileByUrl();
});