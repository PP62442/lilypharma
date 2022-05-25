window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    const name = sessionStorage.getItem('NAME');
    const surname = sessionStorage.getItem('SURNAME');
    const email = sessionStorage.getItem('EMAIL');
    // const pass = sessionStorage.getItem('PASSWORD');
    const tel = sessionStorage.getItem('TELEPHONE');
    // const home = sessionStorage.getItem('ADDRESS');       text area
    // const age = sessionStorage.getItem('AGE');
    // const edu = sessionStorage.getItem('EDUCATION');
    
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-surname').innerHTML = surname;  
    document.getElementById('result-email').innerHTML = email;
    // document.getElementById('result-pass').innerHTML = pass;
    document.getElementById('result-tel').innerHTML = tel;
    // document.getElementById('result-home').innerHTML = home;       text area
    // document.getElementById('result-age').innerHTML = age;
    // document.getElementById('result-edu').innerHTML = edu;
})