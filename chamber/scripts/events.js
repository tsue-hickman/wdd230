document.getElementById("searchButton").addEventListener("click", function() {
    var query = document.getElementById("searchInput").value.trim();
    
    if (query !== "") {
      var searchURL = "https://www.google.com/search?q=" + encodeURIComponent(query);
      window.location.href = searchURL;
    }
  });
  