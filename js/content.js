---
exclude_from_search: true
---
  window.store = {
    {% for post in site.posts %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "category": "{{ post.category | xml_escape }}",
        "keywords": {{ post.keywords | jsonify }},
        "content": {{ post.content | strip | strip_html | strip_newlines | jsonify }},
        "url": "{{ post.url | xml_escape }}"
      },
    {% endfor %}
    {% assign pages = (site.pages | sort: 'date') %}
    {% for post in pages  %}
    {% if post.exclude_from_search != true %}
       "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "category": "{{ post.layout | xml_escape }}",
        "keywords": {{ post.keywords | jsonify }},
        "content": {{ post.exclude_from_search }} {{ post.content | strip | strip_html | strip_newlines | jsonify }},
        "url": "{{ post.url | xml_escape }}"
      }

      {% unless forloop.last %},{% endunless %}
      {% endif %}
  {% endfor %}
  };