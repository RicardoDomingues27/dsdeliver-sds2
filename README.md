# dsdeliver-sds2

Project of orders in 

React front web, 

React Native front mobile, 

Java Spring Boot API backend

Request Examples API

POST Example:

```
curl -X POST "https://sds2-rd.herokuapp.com/orders" 
     -H  "accept: application/json
     -H  "Content-Type: application/json" 
```
```
json body
 {  
    "address": "Av. Paulista, 123",
    "latitude": -23.56168,
    "longitude": -46.656139,
    "products": [
        {
            "id": 2
        },
        {
            "id": 5
        }
    ]
 }   
```
```
response:
{
    "id": 20,
    "address": "Av. Paulista, 123",
    "latitude": -23.56168,
    "longitude": -46.656139,
    "moment": "2021-01-15T16:23:12.881523Z",
    "status": "PENDING",
    "total": 119.85,
    "products": [
        {
            "id": 2,
            "name": "Pizza Moda da Casa",
            "price": 59.9,
            "description": "Pizza à moda da casa, com molho especial e todos ingredientes básicos, e queijo à sua escolha.",
            "imageUri": "https://linkexample.com/pizza_moda.jpg"
        },
        {
            "id": 5,
            "name": "Risoto Funghi",
            "price": 59.95,
            "description": "Risoto Funghi feito com ingredientes finos e o toque especial do chef.",
            "imageUri": "https://linkexample.com/risoto_funghi.jpg"
        }
    ]
}
```

GET ALL Example:

```
curl -X POST "https://sds2-rd.herokuapp.com/orders" 
     -H  "accept: application/json
     -H  "Content-Type: application/json" 
```
```
response:
[
  {    
      "id": 8,
      "address": "Avenida Paulista, 1500",
      "latitude": -23.56168,
      "longitude": -46.656139,
      "moment": "2021-01-07T16:35:56.816557Z",
      "status": "PENDING",
      "total": 119.85,
      "products": [
          {
              "id": 2,
              "name": "Pizza Moda da Casa",
              "price": 59.9,
              "description": "Pizza à moda da casa, com molho especial e todos ingredientes básicos, e queijo à sua escolha.",
              "imageUri": "https://linkexample.com/pizza_moda.jpg"
          },
          ...
       ]   
  },
  ...
]  
```
