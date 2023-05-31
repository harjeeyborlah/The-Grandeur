var textarea = document.getElementById("my-textarea");
  var charCount = document.getElementById("char-count");

  textarea.addEventListener("input", function() {
    var remainingChars = 75 - textarea.value.length;
    charCount.textContent = remainingChars;
  });
  
$('#mySelect').on('change', function() {
  var selectedOption = $(this).val();
  $(this).find('option[value="' + selectedOption + '"]').attr('selected', true);
});


var checkbox = document.getElementById("gift-wrap");
  var label = document.getElementById("gift-wrap-label");

  checkbox.addEventListener("change", function() {
    label.classList.toggle("font-bold", checkbox.checked);
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




