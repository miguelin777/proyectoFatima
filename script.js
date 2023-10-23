const cards = document.querySelectorAll(".card");
console.log("Contact me by email: soporte@ruedatec.com");
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
// let tring = document.getElementsByClassName("show");
// console.log(tring);
// window.addEventListener("click",function() {
  //   if (tring.classList == "offcanvas offcanvas-end w fade show"){
    //     tring2.classList.toggle("fade2", window.addEventListener("click"));
    //   }
    // let tring2 = document.getElementById("offcanvasNavbar");
// })
// window.addEventListener(observer.observe(),function() {
//   let clase = "offcanvas offcanvas-end w fade show"
//   let tring2 = document.getElementById("offcanvasNavbar");
//   let compara = tring2.attributes[0].value;
//   console.log(tring2.attributes[0].value);
//   if (compara == clase){
//     tring2.classList.toggle("fade2")
//   }
// })
// console.log(tring2);
// if (tring.classList == "offcanvas offcanvas-end w fade show"){
//   tring2.classList.toggle("fade2");
// }
// window.addEventListener("scroll", function(){
//   let nav = document.getElementById("toid");
//   let li = document.getElementById("it");
//   nav.classList.toggle("asd", window.scrollY > 40)
//   li.classList.toggle("letras", window.scrollY > 40)
// })
window.addEventListener("scroll", function(){
  let nav = document.getElementById("toid");
  // let li = document.getElementById("it");
  nav.classList.toggle("asd", window.scrollY < 1)
  // li.classList.toggle("letras", window.scrollY > 40)
})
window.addEventListener("scroll", function(){
    submenu = document.getElementById("sub1");
    submenu.classList.toggle("background", window.scrollY < 1);
    this.document.getElementById("1").classList.toggle("background",window.scrollY < 1);
    this.document.getElementById("2").classList.toggle("background",window.scrollY < 1);
    this.document.getElementById("3").classList.toggle("background",window.scrollY < 1);
    this.document.getElementById("4").classList.toggle("background",window.scrollY < 1);
    this.document.getElementById("5").classList.toggle("background",window.scrollY < 1);
    this.document.getElementById("6").classList.toggle("background",window.scrollY < 1);
    this.document.getElementById("7").classList.toggle("background",window.scrollY < 1);
    this.document.getElementById("8").classList.toggle("background",window.scrollY < 1);
    this.document.getElementById("9").classList.toggle("background",window.scrollY < 1);
})
