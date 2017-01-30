.PHONY: build clean

build:
	mkdir -p build
	zip build/$(shell git rev-parse --short HEAD).zip icons/ main.js manifest.json

clean:
	rm -rf build/
