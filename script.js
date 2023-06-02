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
