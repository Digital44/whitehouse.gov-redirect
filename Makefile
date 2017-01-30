.PHONY: build

build:
	rm -rf build/
	mkdir -p build
	zip build/$(shell git rev-parse --short HEAD).zip icons/* main.js manifest.json
