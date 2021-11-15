let url = "https://docs.google.com/forms/d/e/1FAIpQLSdatT__vLZA-0s0WHojLkNOoTr1DMojJGU0TZTNDo4h_ivYwQ/formResponse"; //action url
let form = document.querySelector("#form"); //form element

form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent default behaviour

  fetch(url, {
      method: "POST",
      mode: "no-cors",
      header: {
        'Content-Type': 'application/json'
      },
      body: getInputData()
    })
    .then(data => {
      console.log(data);
      alert("Form Submitted. Your message has been sent successfully. Thank you.");
    })
    .catch(err => console.error(err));
});

//populating input data
function getInputData() {
  let dataToPost = new FormData(); //formdata API

  //fill name attributes to corresponding values
  dataToPost.append("entry.860156592", document.querySelector("#inp1").value);
  dataToPost.append("entry.563315148", document.querySelector("#inp2").value);
  dataToPost.append("entry.1264037439", document.querySelector("#inp3").value);
  dataToPost.append("entry.621140106", document.querySelector("#inp4").value);
  dataToPost.append("entry.1031615990", document.querySelector("#inp5").value);
  dataToPost.append("entry.1786562575", document.querySelector("#inp6").value);
  dataToPost.append("entry.1225531449", document.querySelector("#inp7").value);
  dataToPost.append("entry.979198231", document.querySelector("#inp8").value);
  dataToPost.append("entry.1384577334", document.querySelector("#inp9").value);
  dataToPost.append("entry.246740851", document.querySelector("#inp10").value);
  dataToPost.append("entry.1456106296", document.querySelector("#inp11").value);

  return dataToPost;
}


