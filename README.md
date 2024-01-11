Setup Server:

1. npm install

2. Create db in pgAdmin

3. Create `.env` file and add

`DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"`
`PORT=8000`
`JWT_SECRET=mySecret`

4. npx prisma db push

5. npx prisma db seed

6. npm run start