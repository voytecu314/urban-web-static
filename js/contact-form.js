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

    fetch('https://urban-web.cyclic.app/urban-web/email/contact',fetchOpt)
        .then(res=>res.json())

        .then(ans=>{
            console.log("TEST",ans);
            const lng = displayLanguage === 'preferred' ? navigator.language.toUpperCase() : displayLanguage.toUpperCase();
            console.log("lng",lng);
            runInfoModal(info[lng].contact.title, info[lng].contact.msg);
            console.log('title',info[lng].contact.title);
        })

        .catch(console.log);
});