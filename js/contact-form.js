const contactForm = document.querySelector('#contact-form');
const formInputsCollection = contactForm.querySelectorAll('[placeholder]');

contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const formBody = {};
    formInputsCollection.forEach(({name,value})=>{
        formBody[name]=value;
    });

    const fetchOpt = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formBody)
    };
    fetch('https://urban-web.cyclic.app/urban-web//contact',fetchOpt).then(res=>res.json()).then(console.log).catch(console.log);
});