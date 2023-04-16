const cards = document.querySelectorAll(".card");
const catalogo = document.getElementById("catalogo");

let observer; // Declarar el objeto 'observer' aquí

function animateCards() {
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("fade-in");
    }, 170 * index);
  });
}

function handleIntersection(entries) {
  if (entries[0].isIntersecting) {
    animateCards();
    observer.disconnect();
  }
}

if (cards.length > 0 && catalogo) {
  const options = {
    rootMargin: "0px",
    threshold: 0.1,
  };

  observer = new IntersectionObserver(handleIntersection, options); // Asignar el objeto 'observer' aquí
  observer.observe(catalogo);
}
