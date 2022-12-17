# Setup
## 1. Prequesites
- Node 16.x
- Docker
- Docker Compose
- Tested on Node v16.13.0, npm 8.1.0

## 2. Install dependences
- `npm install`

## 3. Create file .env
- Follow the instructions in .env.example
- Enter username, password, host, port, databasename in "[ ]" marks

## 4. Init database
- Start PostgreSQL database (make sure the Docker engine is running)
```
docker-compose up -d pg
```
Please check the database: username, password, host, port, databasename from `docker-compose.yml` is same step 3
- Init schema: `npm run prisma:migrate` (Please read the development section part 2 below before running this command)
- Use database management tool (DBeaver) and verify if the database was created correctly

# Development
## 1. VScode
- Open "Run and Debug", select the "Dev private-sale" the click on the start debugging button or press F5

## 2. Create file .env.development
- Add field NODE_ENV and PORT run on BE

## 3. Add a new migration
- Run `npm run prisma:addMigration [file_name]`, ex: `npm run prisma:addMigration AddCategoryTable`
- After adding migration file, run `npm run prisma:migrate` to execute the migration file
- And run `npm run prisma:seed` to initialize available data

## 4. Test API
- Open `user.http` file, modify the parameters then click on the "Send request" button
