const preVoucherForm = document.getElementById('pre_voucher_form');
const voucherForm = document.getElementById('voucher_form');

const sendPreVoucherData = (e) => {

    const checksModalBtn = document.getElementById('triggerChecksModal');
    checksModalBtn.setAttribute('data-bs-toggle','modal');
    checksModalBtn.setAttribute('data-bs-target','#checksModal');
    checksModalBtn.click();

    e.preventDefault();
    const fetchOpt = {
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(e.target)
    }

    fetch('https://urban-web.cyclic.app/urban-web/email/pre-voucher', fetchOpt)
        .then(res=>res.json())
        .then(console.log)
        .catch(console.log)
}

const sendVoucherData = (e) => {

    const checksModalBtn = document.getElementById('triggerChecksModal');
    checksModalBtn.removeAttribute('data-bs-toggle');
    checksModalBtn.removeAttribute('data-bs-target');
    
    e.preventDefault();
    const fetchOpt = {
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(e.target)
    }

    fetch('https://urban-web.cyclic.app/urban-web/email/voucher', fetchOpt)
        .then(res=>res.json())
        .then(console.log)
        .catch(console.log)
}


preVoucherForm.addEventListener('submit', sendPreVoucherData);

voucherForm.addEventListener('submit', sendVoucherData);