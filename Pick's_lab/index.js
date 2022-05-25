function handleSubmit () {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    // const pass = document.getElementById('password').value;
    // const home = document.getElementById('address').value; //       text area
    // const age = document.getElementById('age').value;
    // const edu = document.getElementById('edu').value;

    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("SURNAME", surname);
    sessionStorage.setItem("EMAIL", email);
    sessionStorage.setItem("TELEPHONE", tel);
    // sessionStorage.setItem("PASSWORD", pass);
    // sessionStorage.setItem("ADDRESS", home); //       text area
    // sessionStorage.setItem("AGE", age);
    // sessionStorage.setItem("EDUCATION", edu);

    return;
}