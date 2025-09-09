dev/css:
	npx @tailwindcss/cli -i ./tailwind.config.css -o ./static/css/styles.css --minify --watch

dev/server:
	zola serve

dev:
	make -j2 dev/css dev/server
