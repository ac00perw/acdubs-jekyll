module Jekyll
  class SortedCategoriesBuilder < Generator
  
    safe true
    priority :high
 
    def generate(site)

      site.config['sorted_categories'] = site.categories.map { |cat, posts|
        [ cat, posts.size, posts ] }.sort { |a,b| b[1] <=> a[1] }
        
      site.config['headers'] = Dir.glob('./images/headers/*.jpg').to_a

    end
 
  end
end