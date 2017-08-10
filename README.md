# NodeCrudService

### Description:
This code provides a REST API that performs CRUD operations in MongoDB using node.js.

### Author:
Jeffrey Konner Kite

### How to Run:
1. npm install
2. npm run dev

## REST API

### Url Base:
localhost:3000/

### API Resources
  - [GET /foods](#get-foods)
  - [POST /foods](#post-foods)
  - [GET /foods/[id]](#get-foodsid)
  - [PUT /foods/[id]](#put-foodsid)
  - [DELETE /foods/[id]](#delete-foodsid)

### GET /foods
Request Parameters:
  - name (optional)

Examples:
  - GET localhost:3000/foods
  - GET localhost:3000/foods?name=steak

Returns: Returns all Food objects stored in mongoDB. If name request parameter is specified, then it only returns objects
with the specified name.

Sample Response:

    [
      {
        "_id": "596d349146235b5daf2f32b9",
        "name": "steak",
        "restaurant": "Waitr",
        "calories": 700,
        "__v": 0
      },
      {
        "_id": "596d5ce908e7ed0617679f18",
        "name": "enchiladas",
        "restaurant": "Blue Dog Cafe",
        "calories": 1500,
        "__v": 0
      }
    ]

### POST /foods
Posts a Food object into MongoDB corresponding to the given request body.

Returns: A json object that corresponds to the object that was posted into the database.

Sample Request Body:

    {
	    "name": "crawfish enchiladas",
	    "restaurant": "Blue Dog Cafe",
	    "calories": 1700
    }

Sample Response:

    {
      "__v": 0,
      "name": "enchiladas",
      "restaurant": "Blue Dog Cafe",
      "calories": 1500,
      "_id": "596d5ce908e7ed0617679f18"
    }

### GET /foods/[id]
Returns: List of Food Json objects containing one item that corresponds to the object in MongoDB with the given id.

Sample Request: GET localhost:3000/596e79cd4057b71be6e1672c

Sample Response:

    [
      {
        "__v": 0,
        "name": "enchiladas",
        "restaurant": "Blue Dog Cafe",
        "calories": 1500,
        "_id": "596e79cd4057b71be6e1672c"
      }
    ]

### PUT /foods/[id]
Updates the food with the given id with the information given in the request body.

Returns: A json object that corresponds to the updated object

Sample Request: PUT localhost:3000/596e79cd4057b71be6e1672c

Sample Request Body:

    {
	    "name": "crawfish enchiladas",
	    "restaurant": "Blue Dog Cafe",
	    "calories": 1700
    }

Sample Response:

    {
      "name": "crawfish enchiladas",
      "restaurant": "Blue Dog Cafe",
      "calories": 1500,
      "$setOnInsert": {
        "__v": 0
      }
    }

### DELETE /foods/[id]
Deletes the Food with the corresponding id from the MongoDB database.

Sample Request: DELETE localhost:3000/596e79cd4057b71be6e1672c

Sample Response: successfully deleted record 596e79cd4057b71be6e1672c

    {
      "message": "successfully deleted record 596e79cd4057b71be6e1672c"
    }
