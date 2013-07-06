
task :default => :run

desc "Run the Jekyll server, picking up changes as they happen"
task :run do
  sh "bundle exec jekyll serve --watch"
end

desc "Generate the site"
task :generate do
  sh "bundle exec jekyll build"
end

desc "Build and deploy the site"
task :release do
  # year-month-day-hourminute
  timestamp = Time.now.strftime('%Y-%m-%d-%H%M')
  sh "git tag '#{timestamp}' && git push --tag"
  sh "bundle exec jekyll build && rsync -avz --delete _site/ patrickbyrne.net:/var/www/presentations.patrickbyrne.net/public"
end

desc "Peform a health check on site source"
task :checkup do
  sh "bundle exec jekyll doctor"
end

desc "Create a new project page"
task :new do
  raise NotImplementedError, "Must implement a new `new` task for this site"

  puts "What is the project's name?"
  name = STDIN.gets.chomp
  # convert any alphanumeric character to dashes
  filename = name.downcase.gsub(/[^a-zA-Z0-9]+/, '-')
  path = "_posts/#{Time.now.strftime('%Y-%m-%d')}-#{filename}.markdown"
  FileUtils.touch(path)

  open(path, 'a') do |f|
    f.puts "---"
    f.puts "excerpt:"
    f.puts "layout: project"
    f.puts "projurl:"
    f.puts "published: false"
    f.puts "techs: []"
    f.puts "title: \"#{name}\""
    f.puts "---"
    f.puts ""
    f.puts "## Why Did I Make This?"
    f.puts ""
    f.puts "## What Did I Learn?"
    f.puts ""
  end
end

