REPOSITORY_URL := $(shell node -p "require('./package.json').repository.url")

.PHONY: i
i:
	rm -rf node_modules && npm ci

.PHONY: start
start:
	npx vite

.PHONY: build
build:
	npx vite build

.PHONY: preview
preview:
	npx vite preview --port 8080

.PHONY: deploy
deploy: build
	cd dist && \
	git init && \
	git remote -v | grep -w origin || git remote add origin ${REPOSITORY_URL} && \
	git branch -m gh-pages && \
	git add -A && \
	git commit -m "[feat] deploy as gh-pages `date +'%Y-%m-%d %H:%M:%S'`" && \
	git push -u origin gh-pages -f
