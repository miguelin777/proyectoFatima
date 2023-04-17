const cards = document.querySelectorAll(".card");

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      entry.target.classList.remove("card-hidden");
      observer.unobserve(entry.target);
    }
  });
}

if (cards.length > 0) {
  const options = {
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  cards.forEach(card => {
    observer.observe(card);
  });
}
