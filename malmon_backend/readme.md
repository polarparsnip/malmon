# Malmon - Backend

## Setup

To run server locally PostgreSQL needs to be set up.

Then, to run server in development mode you need a .env file with the following information:
DATABASE_URL=postgres://postgres:@localhost/malmon **# path to database**\
PGPASSWORD=password **# where password is the password for the database**\

Then run the following commands:

```bash
npm run install # if node modules havent been installed already
createdb malmon # create database in postgres
npm run setup # sets up the database
npm run dev  # runs development mode
```

Open [http://localhost:3000](http://localhost:3000) in browser to view locally run server.
