// black to white transition
const scrollThreshold = 100; // Set the scroll threshold in pixels (100vh in this case)

window.addEventListener('scroll', () => {
  if (window.scrollY >= scrollThreshold) {
    document.body.style.backgroundColor = '#f9f7f1'; // Change background color to white
    document.body.style.color = 'black';
    document.querySelector('a').style.color = 'white'
  } else {
    document.body.style.backgroundColor = 'black'; // Reset to black if not scrolled enough
    document.body.style.color = 'white';
  }
});
// black to white transition end

// read more
// function toggleReadMore(button) {
//   var article = button.parentElement;
//   var moreContent = article.querySelector('.more');
  
//   if (moreContent.style.display === "none" || moreContent.style.display === "") {
//       moreContent.style.display = "block";
//       button.innerHTML = "Read Less";
//   } else {
//       moreContent.style.display = "none";
//       button.innerHTML = "Read More";
//   }
// }

function createDynamicPage(button) {
  var article = button.closest('.collumn');

  // Create a new window
  var dynamicPage = window.open("", "_blank");
  var head = article.querySelector('.head');
  var intro = article.querySelector('.intro');
  var moreContent = article.querySelector('.more').innerHTML;
  var author = article.querySelector('.author');

  var html = `
    <html>
    <head>
        <link href='https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900,400italic,700italic,900italic|Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="/global/font families.css">
        <link rel="stylesheet" href="/components/style.css">
        <script src="/components/main.js"></script>
        <link rel="shortcut icon" href="/media/pr logo.png" type="image/x-icon">
        <title>${head.textContent}</title>
        <meta name="viewport" content="width=device-width">
    </head>
    <body>
      <nav>
        <h1>Pelican Rapids</h1>
        <div class="sections">
          <a href="/pages/clubs and societies.html" target="_blank" rel="noopener noreferrer">Clubs & Societies</a>
          <a href="/pages/hypercube preptober.html" target="_blank" rel="noopener noreferrer">Hypercube Preptober</a>
          <a href="/pages/sports.html" target="_blank" rel="noopener noreferrer">Sports</a>
          <a href="/pages/establishmentandsc.html" target="_blank" rel="noopener noreferrer">Establishment & Student Council</a>
          <a href="/pages/fiction.html" target="_blank" rel="noopener noreferrer">Fiction</a>
          <a href="/pages/nonfiction.html" target="_blank" rel="noopener noreferrer">Non Fiction</a>
          <a href="/pages/noticeboard.html" target="_blank" rel="noopener noreferrer">Notice Board</a>
        </div>
      </nav>
      <div style="width: 80%; margin: auto">
      <h1 style="font-family: Marcellus SC;">${head.outerHTML}</h1>
      <h3 style="font-weight: normal; text-align: center;">${author.innerHTML}</h3> <br>
        <p>${intro.innerHTML}</p>
        <p class="article">${moreContent}</p>
      </div>
    </body>
    </html>`;

  dynamicPage.document.open();
  dynamicPage.document.write(html);
  dynamicPage.document.close();
}
