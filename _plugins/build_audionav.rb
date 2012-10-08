module Jekyll

  class SiteNavigation < Jekyll::Generator
    safe true
    priority :lowest

    def generate(site)

        # First remove all invisible items (default: nil = show in nav)
        sorted = []
        place = []

        site.pages.each do |page|
          url = page.permalink.to_s.split("/index.html");
          place = ["/music/#{url[0]}", page.data["title"] ]
          sorted << place if page.data["layout"] == "audio"
        end

        # Then sort em according to weight
        #sorted = sorted.sort{ |a,b| a.data["type"] <=> b.data["type"] } 

        # Debug info.
        puts "Sorted audio navigation:"
        sorted.each do |p|
           puts p.inspect 
        end

        # Access this in Liquid using: site.navigation
        site.config["audiofiles"] = sorted
    end
  end
end

#USAGE:
#
# {% for p in site.active_beers %}
# <li><a  {% if p.url == page.url %}class="active"{% endif %} href="{{ p.url }}">{{ p.active_beers.title }}</a></li>
# {% endfor %}