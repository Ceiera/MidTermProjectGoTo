# Mid Term Project GIGIH Fullstack Engineer (Backend Only)

## Table Of Content

* [Database Structure](#database-structure)
	* [Videos Collection](#videos-collection)
  * [Products Collection](#products-collection)
	* [Comments Collection](#comments-collection)
* [API Structure](#api-structure)
* [API Request Response](#api-request-response)
* [How To Run](#how-to-run-in-local)

## Database Structure
This project have 3 collection. They are videos, products, and comments.

### Videos Collection

```
{
  _id: ObjectId(String), //default assignment from mongoose
  videoUrl: String, //required
  videoUrlThumbnail: [String], //required
  countPlaying: Number, //default 0
  createdAt: Date,
  updatedAt: Date,
  softDeleted: Boolean //True = is Deleted & False = not Deleted
}
```

### Products Collection

```
{
  _id: ObjectId(String), //default assignment from mongoose
  videoId: String, //required
  title: String, //required
  price: Number, //required
  discount: Number, //default = 0
  imageUrl: String, //required
  productUrl: String, //required
  countSeen: Number, //default = 0
  createdAt: Date,
  updatedAt: Date,
  softDeleted: Boolean //True = is Deleted & False = not Deleted
}
```
### Comments Collection

```
{
  _id: ObjectId(String), //default assignment from mongoose
  videoId :  String, //required
  username :  String, //required
  comment :  String, //required
  createdAt: Date,
  softDeleted: Boolean //True = is Deleted & False = not Deleted
}
```

## API Structure

Endpoint ready to use

```
GET   /videos
GET   /videos/:id
POST   /videos
GET   /products?videoId={:id}
POST   /products
GET   /comments?videoId={:id}
POST   /comments
```

## API Request Response

### GET /videos

----
Return all videos including thumbnail of videos.
* **URL Params**  
  None
* **Query Params**
Optional: 'limit=integer, default=10' and 'page=integer, default=1'
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  status: success,
  data: [
          _id,
          title,
          videoUrl,
          imageUrl:[String],
          countPlaying,
          softDeleted,
          createdAt,
        ]
}
```
* **Error Response:**  
  * **Code:** 500  
  **Content:** `{ status: 'failed', error : "error while getting videos" }`  

### GET /videos/:id

----
Return specific video using ID.
* **URL Params**  
  required `id: String`
* **Query Params**
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  status: success,
  data: [
          _id,
          title,
          videoUrl,
          imageUrl:[String],
          countPlaying,
          softDeleted,
          createdAt,
        ]
}
```
* **Error Response:**  
  * **Code:** 500  
  **Content:** `{ status: 'failed', error : "error while getting videos" }` 
  * **Code:** 400 
  **Content:** `{status: 'failed', error : 'error missing params' }`
  * **Code:** 404 
  **Content:** `{status: 'failed', error : 'error video not found' }`

### POST /videos

----
Created a new video and return the new video.
* **URL Params**  
  None
* **Query Params**
  None
* **Data Params**  
```
{
  title: String,
  videoUrl: String, //valid url youtube
}
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  status: success,
  data: [
          _id,
          title,
          videoUrl,
          imageUrl:[String],
          countPlaying,
          softDeleted,
          createdAt,
        ]
}
```
* **Error Response:**  
  * **Code:** 400  
  **Content:** `{ status: 'failed', error : 'error invalid type' }`  
  * **Code:** 400  
  **Content:** `{ status: 'failed', error : 'error missing body' }` 
  * **Code:** 500  
  **Content:** `{ status: 'failed', error : 'error while adding video' }` 


### GET /products/?videoId={:id}

----
Return all product that assosiated with video using videoId.
* **URL Params**  
  None
* **Query Params**
  required `videoId: String`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  status: success,
  data: [
          _id,
          videoId,
          title,
          price,
          discount,
          imageUrl,
          productUrl,
          countSeen,
          createdAt,
          softDeleted,
        ]
}
```
* **Error Response:**  
  * **Code:** 500  
  **Content:** `{ status: 'failed', error : 'error while getting products'}`
  * **Code:** 400 
  **Content:** `{status: 'failed', error : 'error missing query' }`

### POST /products

----
Created a new product and return the new product.
* **URL Params**  
  None
* **Query Params**
  None
* **Data Params**  
```
{
  videoId,
  title,
  price,
  discount,
  imageUrl, //valid web url
  productUrl, //valid web url
}
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  status: success,
  data: [
          _id,
          videoId,
          title,
          price,
          discount,
          imageUrl, 
          productUrl, 
          countSeen,
          createdAt,
          softDeleted,
        ]
}
```
* **Error Response:**  
  * **Code:** 500  
  **Content:** `{ status: 'failed', error : 'error while adding products'}`  
  OR  
  * **Code:** 400 
  **Content:** `{status: 'failed', error : 'error missing body' }`
  OR
    * **Code:** 400 
  **Content:** `{status: 'failed', error : 'error invalid type' }`

### GET /comments/?videoId={:id}

----
Return all comments that assosiated with video using videoId.
* **URL Params**  
  None
* **Query Params**
  required `videoId: String`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  status: success,
  data: [
          _id,
          videoId,
          username,
          comment,
          createdAt,
          softDeleted,
        ]
}
```
* **Error Response:**  
  * **Code:** 500  
  **Content:** `{ status: 'failed', error : 'error while getting comments'}` 
  * **Code:** 400 
  **Content:** `{status: 'failed', error : 'error missing query' }`

### POST /comments/?videoId={:id}

----
Created a new comment and return the new comment.
* **URL Params**  
  None
* **Query Params**
  None
* **Data Params**  
```
{
  videoId,
  username,
  comment
}
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  status: success,
  data: [
          _id,
          videoId,
          username,
          comment,
          createdAt,
          softDeleted,
        ]
}
```
* **Error Response:**  
  * **Code:** 500  
  **Content:** `{ status: 'failed', error : 'error while getting comments'}` 
  * **Code:** 400 
  **Content:** `{status: 'failed', error : 'error missing body' }`

## How To Run In Local

### Installation

This project use Node version 18.16

Make sure to install the dependencies:
```
# npm
npm install

```

### Development Server
Start the development server on http://localhost:3000
Make sure you dont have problem while connecting Atlas MongoDB
or You can use your own server and edit the url in .env file

```
# npm
npm start

```