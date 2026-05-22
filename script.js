// Resize iframe to fit content
function resizeIframe() {
    const iframe = document.getElementById('atabook-iframe');
    if (iframe) {
        try {
            // Try to get content height
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            const height = iframeDoc.documentElement.scrollHeight || iframeDoc.body.scrollHeight;
            iframe.style.height = height + 'px';
        } catch (e) {
            // Cross-origin restriction, set a reasonable height
            console.log('Cross-origin restriction, using fallback height');
            iframe.style.height = '800px';
        }
    }
}

// Resize on load and periodically check for content changes
window.addEventListener('load', function() {
    const iframe = document.getElementById('atabook-iframe');
    if (iframe) {
        iframe.addEventListener('load', resizeIframe);
        // Also check periodically in case content loads dynamically
        setInterval(resizeIframe, 1000);
    }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}