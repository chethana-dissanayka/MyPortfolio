function SendMSG(e) {
    e.preventDefault()
      let nam_txt = document.querySelector("#name")
      let email_txt = document.querySelector("#email")
      let subject_txt = document.querySelector("#subject")
      let message_txt = document.querySelector("#message")
      let body = "Name: " + nam_txt.value + "\n" +
             "Email: " + email_txt.value + "\n" +
             "Subject: " + subject_txt.value + "\n" +
             "Message: " + message_txt.value;
      
  let temp = {
    from_name : nam_txt.value,
    to_name : "Chethana Dissanayaka",
    message : body
  }
  
  if(nam_txt.value === "" || email_txt.value === "" || subject_txt.value === "" || message_txt.value === "" || body.value === "" ) {
    return alert("Please Fill Complete Details!!")
  }

  emailjs.send('service_g30c5uf', 'template_ulvfc6v', temp, "fxZSdxCgUJdTYvfkH")
  .then((res) => {
    if(res.status == 200) {
      success()
    }else {
      failure()
    }
  })
  
  
  nam_txt.value = ""
  email_txt.value = ""
  subject_txt.value = ""
  message_txt.value = ""
  
  
  }
  
  function success() {
    let thank = document.querySelector(".msg-pop-up")
    thank.style.display = "block"
    setTimeout(() => {
      thank.style.display = "none"
    },1000)
  }
  
  function failure() {
    let fail = document.querySelector(".failed-msgpop")
    fail.style.display = "block"
    setTimeout(() => {
      fail.style.display = "none"
    },1000)
  }
  
