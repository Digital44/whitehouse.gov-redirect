.PHONY: build

build:
	rm -rf build/
	mkdir -p build
	zip -r build/$(shell git rev-parse --short HEAD).zip src/
