# Mid Term Project GIGIH Fullstack Engineer (Backend Only)

## Table Of Content

* [Database Structure](#database-structure)
	* [Videos Collection](#videos-collection)
	* [Comment Collection](#comment-collection)
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
GET   /products?videoId={:id}
GET   /comments?videoId={:id}
POST   /videos
POST   /products
POST   /comments
PUT   /videos
DELETE   /videos
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
  OR  
  * **Code:** 400 
  **Content:** `{status: 'failed', error : 'error missing params' }`

### GET /products/?videoId={:id}

----
Return all product that assosiated with video ID.
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
  OR  
  * **Code:** 400 
  **Content:** `{status: 'failed', error : 'error missing query' }`

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
  OR
  * **Code:** 400  
  **Content:** `{ status: 'failed', error : 'error missing body' }` 
  OR
  * **Code:** 500  
  **Content:** `{ status: 'failed', error : 'error while adding video' }` 

### PUT /videos

----
update a video and return the new video.
* **URL Params**  
  None
* **Query Params**
  None
* **Data Params**  
```
{
  videoId: String,
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
  OR
  * **Code:** 400  
  **Content:** `{ status: 'failed', error : 'error missing body' }` 
  OR
  * **Code:** 500  
  **Content:** `{ status: 'failed', error : 'error while adding video' }` 

### DELETE /videos

----
update a video and return the new video.
* **URL Params**  
  None
* **Query Params**
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 204  
  **Content:**  
```
{
  status: success
}
```
* **Error Response:**  
  * **Code:** 400  
  **Content:** `{ status: 'failed', error : 'error missing params' }`  
  OR
  * **Code:** 404 
  **Content:** `{ status: 'failed', error : 'error video not found' }` 
  OR
  * **Code:** 500  
  **Content:** `{ status: 'failed', error : 'error while deleting video' }` 


### GET /comments/?videoId={:id}

----
Return all comments that assosiated with video ID.
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
  OR  
  * **Code:** 400 
  **Content:** `{status: 'failed', error : 'error missing query' }`


### GET /tokplay

----
Return all videos from databases.
* **URL Params**  
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
  result : [
    {
      video_id,
      thumbnail,
      shop_name,
      video_title,
      product : [
        {
          nama_produk,
          harga_produk,
          thumbnail_produk,
          link_produk
        }
      ]
    }
  ]
}
```


### GET /tokplay/:id

----
Return videos associated with the specified id.
* **URL Params**  
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
  result : [
    {
      video_id,
      thumbnail,
      shop_name,
      video_title,
      product : [
        {
     	  nama_produk,
          harga_produk,
          thumbnail_produk,
          link_produk
        }
      ]
    }
  ]
}
```


### GET /tokplay/product

----
Return all product from databases.
* **URL Params**  
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
  result : [
    [
      {
          nama_produk,
          harga_produk,
          thumbnail_produk,
          link_produk
      }
    ]
  ]
}
```


### GET /tokplay/comment

----
Return all comment from databases.
* **URL Params**  
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
  result : [
    {
      videoId,
      username,
      comment
    }
  ]
}
```


### POST /tokplay/comment/post

----
Creates a new Comment and returns the new object.
* **URL Params**  
  None
* **Data Params**  
  ```
  {
    videoId :  string
    username :  string
    comment :  string
  }
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  message: "Comment added successfully",
  data : {
    username,
    comment
  }
}
```

## How To Run In Local

### Installation

This project use Node version 18.16

Make sure to install the dependencies:
```
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install

```

### Development Server
Start the development server on http://localhost:3000

```
# yarn
yarn start

# npm
npm start

# pnpm
pnpm start
```