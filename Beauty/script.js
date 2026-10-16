
// Mobile navigation
const menuToggle=document.getElementById('menuToggle');
const navbar=document.getElementById('navbar');
menuToggle.addEventListener('click',()=>{
  navbar.classList.toggle('open');
  menuToggle.textContent=navbar.classList.contains('open')?'✕':'☰';
  menuToggle.setAttribute('aria-label',navbar.classList.contains('open')?'Close menu':'Open menu');
});
navbar.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  navbar.classList.remove('open');menuToggle.textContent='☰';
}));

// Prevent selecting a past appointment date
const dateInput=document.getElementById('date');
const now=new Date();
const today=new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,10);
dateInput.min=today;

// Appointment request demo
const bookingForm=document.getElementById('bookingForm');
const formMessage=document.getElementById('formMessage');
bookingForm.addEventListener('submit',event=>{
  event.preventDefault();
  const name=document.getElementById('name').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const service=document.getElementById('service').value;
  const date=dateInput.value;
  const time=document.getElementById('time').value;
  if(!/^[6-9][0-9]{9}$/.test(phone)){
    formMessage.textContent='Please enter a valid 10-digit mobile number.';
    return;
  }
  formMessage.textContent=`Thank you, ${name}! Your request for ${service} on ${date} at ${time} has been received. We will contact you soon.`;
  bookingForm.reset();
  dateInput.min=today;
});
