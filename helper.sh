# Generate core file
src/console/preons stylesheet > dist/preons-core.css

# Generate theme
cat dist/reset.css dist/preons-core.css > dist/preons.css

# Generate scss
src/console/preons stylesheet --scss > dist/preons.scss

# Generate config minified
src/console/preons config -m > dist/preons-config.min.json

# Generate config
src/console/preons config > dist/preons-config.json

# Generate reference html cheatsheet
src/console/preons docs -d > dist/reference.html