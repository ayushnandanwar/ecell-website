function reveal() {
    var reveals = document.querySelectorAll("section");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.outerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 0;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("section_ani");
      } else {
        reveals[i].classList.remove("section_ani");
      }
      // if(elementTop < -330) reveals[i].classList.remove("section_ani");
    }
  }
  
  window.addEventListener("scroll", reveal);
  reveal()