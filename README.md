# Instalar database

```bash
    docker run --name emfcars_database -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=emfcars_database -p 5432:5432 -d postgres
```
