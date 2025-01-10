const kurzor = document.querySelector('.kurzor');
const farba = document.querySelectorAll('.zmena-farby');

document.addEventListener('mousemove', (event) => {
  kurzor.style.left = event.clientX - 6 + 'px';
  kurzor.style.top = event.clientY - 6 + 'px';
  kurzor.style.display = "block";
});

document.addEventListener("mouseout", () => {
  kurzor.style.display = "none";
});

farba.forEach (farba => {
  farba.addEventListener("mouseover", () => {
    kurzor.style.backgroundColor = "#464956";
  });
  
  farba.addEventListener("mouseout", () => {
    kurzor.style.backgroundColor = "#D6D2CF";
  });
});

