## Assignment 8

### Add a customers table and roles table in DB. Customer table columns - name, website, address. Role columns - name, key (must be from enum), description. Each user can belong to one customer and have one role. Change the DB schema accordingly. Show customer name and role name for each user in UI. Push the code to the repo on github. Generate a PR for review.

Customer needs to have id. I added cust_id as field. 
Performed join on user and customer as 

Made customer table cust_id as foreign key referencing to user table id field.

Also added customer name field in UI. Role was previously displayed too.

Used fetch api to connect frontend and backend.

Made more routes in src/routes.ts as this required join operation.

### Assignment 9

### Add created on and modified on columns to all the tables. These should auto populate. Push the code to the repo on github. Generate a PR for review.

Modified columns in all the table with the help of sql command.
Used Trigger for Updated_Date field. It auto-updates any changes and displays in the table.

### How to run

For backend.. install the dependencies and do npm run dev it will start the server at PORT
For frontend.. I used python server by command python3 -m http.server


