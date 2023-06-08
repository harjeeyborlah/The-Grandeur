//count down when character counts down
var textarea = document.getElementById("my-textarea");
var charCount = document.getElementById("char-count");

// Set initial character count to 75
charCount.textContent = 75;

textarea.addEventListener("input", function() {
  var remainingChars = 75 - textarea.value.length;
  charCount.textContent = remainingChars;
});




//to insert selcted option in select box
$('#mySelect').on('change', function() {
  var selectedOption = $(this).val();
  $(this).find('option[value="' + selectedOption + '"]').attr('selected', true);
});



//make checked box bold when clicked
var checkbox1 = document.getElementById("gift-wrap");
  var label = document.getElementById("gift-wrap-label");

  checkbox1.addEventListener("change", function() {
    label.classList.toggle("font-bold", checkbox1.checked);
  });

  var sign = document.getElementById("signature");
  var signaturelabel = document.getElementById("signature-label");

  sign.addEventListener("change", function() {
    signaturelabel.classList.toggle("font-bold", sign.checked);
  });

  //Radio Buttons
  const option1Label = document.getElementById('option1');
  const option2Label = document.getElementById('option2');

  const radioButtons = document.querySelectorAll('input[name="radio"]');
  radioButtons.forEach(function(radio) {
    radio.addEventListener('change', function() {
      if (this.checked) {
        if (this === radioButtons[0]) {
          option1Label.style.fontWeight = 'bold';
          option2Label.style.fontWeight = 'normal';
        } else {
          option1Label.style.fontWeight = 'normal';
          option2Label.style.fontWeight = 'bold';
        }
      }
    });
  });



const scrollToTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

var checkbox = document.getElementById("my-checkbox");
var div = document.getElementById("my-div");

checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
});
