function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

    if (pair[0] === variable) {
      return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
    }
  }
}

var searchTerm = getQueryVariable('query');

if (searchTerm) {
  document.getElementById('search-box').setAttribute("value", searchTerm);

  // Initalize lunr with the fields it will be searching on. I've given title
  // a boost of 10 to indicate matches on this field are more important.
  var idx = lunr(function () {
    this.field('id');
    this.field('title', { boost: 10 });
    this.field('category');
    this.field('keywords');
    this.field('content');
  });

  for (var key in window.store) { // Add the data to lunr
    idx.add({
      'id': key,
      'title': window.store[key].title,
      'category': window.store[key].category,
      'keywords': window.store[key].keywords,
      'content': window.store[key].content
    });

    var results = idx.search(searchTerm); // Get lunr to perform a search
    displaySearchResults(results, window.store); // We'll write this in the next section
  }
}

function displaySearchResults(results, store) {
  var searchResults = document.getElementById('search-results');

  if (results.length) { // Are there any results?
    var appendString = '';

    for (var i = 0; i < results.length; i++) {  // Iterate over the results
      var item = store[results[i].ref];
      appendString += '<li class="no-bullet"><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
      appendString += '<p>' + stripScripts(item.content.substring(0, 250) ).replace(/ *\{[^)]*\} */g, ""); + '...</p></li>';
    }

    searchResults.innerHTML = "<ul>"+appendString+"</ul>";
  } else {
    searchResults.innerHTML = '<li>No results found</li>';
  }
}

  function stripScripts(s) {
    var div = document.createElement('div');
    div.innerHTML = s;
    var scripts = div.getElementsByTagName('script');
    var i = scripts.length;
    while (i--) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }
    return div.innerHTML;
  }