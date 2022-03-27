

function submitData() {
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    if(name == '' ){
        return alert("Nama wajib diisi")
    } else if(email == '' ){
        return alert("email wajib diisi")
    } else if(phone == '' ){
        return alert("phone wajib diisi")
    } else if(subject == '' ){
        return alert("subject wajib diisi")
    }else if(message == '' ){
        return alert("message wajib diisi")
    }

    let emailReciever = 'faizmubarok@gmail.com'

    let a = document.createElement ('a')

    a.href = `mailto:${emailReciever}?subject=${subject}&body=Halo nama saya ${name}, ${message} please contact me ${phone}`

    a.click()

    let dataObject ={
        namaLengkap: name,
        email: email,
        phoneNumber: phone,
        subject: subject,
        message: message,
    }

    console.log(dataObject);
}