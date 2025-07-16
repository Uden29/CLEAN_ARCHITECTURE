start_db:
	docker compose up

stop_db:
	docker compose down

migrate:
	 db-migrate up -e dev

migrate-down:
	db-migrate down

create_migration:
	 db-migrate create $(n) --sql-file

server:
	yarn run dev

.PHONY: start_db stop_db server migrate migrate-down create_migration