document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  const sideMenu = document.getElementById('side-menu');
  const overlay = document.getElementById('overlay'); 

  menuIcon?.addEventListener('click', () => {
    sideMenu?.classList.toggle('open');
    overlay?.classList.toggle('active');  
  });

  overlay?.addEventListener('click', () => {
    sideMenu?.classList.remove('open');
    overlay?.classList.remove('active'); 
  });

  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const dropdown = toggle.nextElementSibling;
      dropdown?.classList.toggle('show');

      const icon = toggle.querySelector('i.fa-chevron-down');
      if (icon) {
        icon.classList.toggle('rotated');
      }
    });
  });

  //slide part**************//
  let current = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('dotactive'));
    slides[index]?.classList.add('active');
    dots[index]?.classList.add('dotactive');
    current = index;
  }

  function moveSlide(step) {
    current = (current + step + slides.length) % slides.length;
    showSlide(current);
  }

  function currentSlide(index) {
    showSlide(index);
  }

  leftArrow?.addEventListener('click', () => {
    moveSlide(-1);
  });

  rightArrow?.addEventListener('click', () => {
    moveSlide(1);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide(index);
    });
  });

  showSlide(0);
});

///offer part*****
const offerSlider = document.getElementById("offer-slider");
const arrowLeft = document.querySelector(".arrowl");
const arrowRight = document.querySelector(".arrowr");

arrowLeft.addEventListener("click", () => {
  offerSlider.scrollBy({ left: -300, behavior: "smooth" });
});

arrowRight.addEventListener("click", () => {
  offerSlider.scrollBy({ left: 300, behavior: "smooth" });
});

/**********for place cards  */
const placeSlider = document.getElementById("place-slider");
const placeArrowL = document.querySelector(".place-arrowl");
const placeArrowR = document.querySelector(".place-arrowr");

placeArrowL.addEventListener("click", () => {
  placeSlider.scrollBy({ left: -300, behavior: "smooth" });
});

placeArrowR.addEventListener("click", () => {
  placeSlider.scrollBy({ left: 300, behavior: "smooth" });
});

/*****FAQ***** */
document.querySelectorAll('.faqdropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;
    content?.classList.toggle('show');

    const icon = toggle.querySelector('i.fa-chevron-down');
    if (icon) {
      icon.classList.toggle('rotated');
    }
  });
});

/****Read more* */
function toggleReadMore() {
  var moreText = document.getElementById("more-text");
  var toggleBtn = document.getElementById("toggle-button");
  var shortText = document.getElementById("short-text");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    shortText.style.display = "none";
    toggleBtn.innerText = "Read Less";
  } else {
    moreText.style.display = "none";
    shortText.style.display = "inline";
    toggleBtn.innerText = "Read More";
  }
}

//slide that checkbox
const radioButtons = document.querySelectorAll('input[name="formMode"]');
const forms = {
  book: document.getElementById('form-book'),
  pnr: document.getElementById('form-pnr'),
  running: document.getElementById('form-running')
};

radioButtons.forEach(rb => {
  rb.addEventListener('change', () => {
    Object.values(forms).forEach(f => f.classList.add('hidden'));
    forms[rb.value].classList.remove('hidden');
  });
});

const cancelCheckbox = document.getElementById('cancel-check');
const cancelLabelMain = document.getElementById('cancel-label-main');

cancelCheckbox.addEventListener('change', () => {
  cancelLabelMain.textContent = cancelCheckbox.checked
    ? 'Get full refund on Cancellation'
    : 'Free Cancellation included';
});


if (window.innerWidth <= 768) {

  document.querySelectorAll('.footer-column h4').forEach(h4 => {
    const ul = h4.nextElementSibling;
    if (ul && ul.tagName === 'UL') {
      const icon = document.createElement('i');
      icon.className = 'fa fa-chevron-down';
      h4.appendChild(icon);
      h4.addEventListener('click', () => {
        ul.classList.toggle('open');
        icon.classList.toggle('rotated');
      });
    }
  });

  document.querySelectorAll('.footer-inner > h4').forEach(h4 => {
    const p = h4.nextElementSibling;
    if (p && p.tagName === 'P') {
      const icon = document.createElement('i');
      icon.className = 'fa fa-chevron-down';
      h4.appendChild(icon);
      p.style.display = 'none'; // start hidden
      h4.addEventListener('click', () => {
        const isVisible = p.style.display === 'block';
        p.style.display = isVisible ? 'none' : 'block';
        icon.classList.toggle('rotated');
      });
    }
  });
}


