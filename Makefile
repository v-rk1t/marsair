build: docker_build docker_down
test: docker_run docker_down

docker_build:
	docker compose build playwright

docker_run:
	docker compose up playwright

docker_down:
	docker compose down

lint_format:
	npm run format && npm run lint
