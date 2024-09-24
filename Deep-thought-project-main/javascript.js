const toggleSidebarButton1 = document.getElementById('toggleSidebarButton1'); 
const toggleSidebarButton2 = document.getElementById('toggleSidebarButton2'); 
const sidebar1 = document.querySelector('.sidebar'); 
const sidebar2 = document.querySelector('.sidebar2'); 

sidebar1.style.transform = 'translateX(-100%)';
sidebar2.style.transform = 'translateX(0)'; 

toggleSidebarButton1.addEventListener('click', function() {
  sidebar1.style.transform = 'translateX(0)';
  sidebar2.style.transform = 'translateX(-100%)';
});

toggleSidebarButton2.addEventListener('click', function() {
  sidebar1.style.transform = 'translateX(-100%)';
  sidebar2.style.transform = 'translateX(0%)';
});
  
