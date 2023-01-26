# Solulab-Node.js-Task
A RESTful API that can /create/read/update/delete Product and Category data from a database.

There is only 5 request in this API, 
1. create Request (POST) : Create request is fro save Product Data with there Category in Database, But the Database table is seperate for both product detail and category.
2. read Request (POST) : This request return the particular data of product, you also need to send categoryId with request  for searching particular product in database.
3. readAll Requrest (GET) : This request return all the Data of Products and there Category.
4. update Request (POST) : This request is for update the details of product , you need to send categoryId with request for searching particular product in database.
5. delete Request (POST) : This is for delete a particular product, you need to send categoryId with request for searching particular product in database and delete it.

NOTE : Before the testing the API you need to start the server. Download the code and and run "npm i" commend for install all the dependencies and after when all dependencies is insalled , run "npm start" command to start the server.

Here is link of Postman documentation :- 
https://red-rocket-174114.postman.co/workspace/6ef508ba-fa0b-4cab-af39-479993c6b259/collection/25134167-8fe53a7e-bd8b-4793-af10-b3cdafc9ad46?action=share&creator=25134167

currently, my MongoDB Cluster is connected with this but if you want to change the cluter , then go to config.env file and change "DATABASE= MY_LINK" to "DATABASE= YOUR_LINK". 

