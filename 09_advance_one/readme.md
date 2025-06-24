# API Documentation

## Introduction

Welcome to the API documentation for this project. This API allows you to interact with the application's core features programmatically. Below you'll find details on authentication, available endpoints, request/response formats, and error handling.

---

## Base URL

```
https://api.example.com/v1
```

---

## Authentication

All endpoints require authentication using an API key.

- **Header:** `Authorization: Bearer <your_api_key>`

---

## Endpoints

### 1. Get All Items

- **Endpoint:** `GET /items`
- **Description:** Retrieve a list of all items.

#### Request

```http
GET /items HTTP/1.1
Host: api.example.com
Authorization: Bearer <your_api_key>
```

#### Response

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Item 1",
      "description": "Description of item 1"
    },
    // ...more items
  ]
}
```

---

### 2. Get Single Item

- **Endpoint:** `GET /items/{id}`
- **Description:** Retrieve details of a specific item by ID.

#### Request

```http
GET /items/1 HTTP/1.1
Host: api.example.com
Authorization: Bearer <your_api_key>
```

#### Response

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Item 1",
    "description": "Description of item 1"
  }
}
```

---

### 3. Create Item

- **Endpoint:** `POST /items`
- **Description:** Create a new item.

#### Request

```http
POST /items HTTP/1.1
Host: api.example.com
Authorization: Bearer <your_api_key>
Content-Type: application/json

{
  "name": "New Item",
  "description": "Description of new item"
}
```

#### Response

```json
{
  "success": true,
  "data": {
    "id": 2,
    "name": "New Item",
    "description": "Description of new item"
  }
}
```

---

### 4. Update Item

- **Endpoint:** `PUT /items/{id}`
- **Description:** Update an existing item.

#### Request

```http
PUT /items/1 HTTP/1.1
Host: api.example.com
Authorization: Bearer <your_api_key>
Content-Type: application/json

{
  "name": "Updated Item",
  "description": "Updated description"
}
```

#### Response

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Updated Item",
    "description": "Updated description"
  }
}
```

---

### 5. Delete Item

- **Endpoint:** `DELETE /items/{id}`
- **Description:** Delete an item by ID.

#### Request

```http
DELETE /items/1 HTTP/1.1
Host: api.example.com
Authorization: Bearer <your_api_key>
```

#### Response

```json
{
  "success": true,
  "message": "Item deleted successfully"
}
```

---

## Error Handling

All errors return a standard format:

```json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "Error description"
  }
}
```

Common error codes:

- `400` Bad Request
- `401` Unauthorized
- `404` Not Found
- `500` Internal Server Error

---

## Contact

For support or questions, contact [support@example.com](mailto:support@example.com).

---




## Json Formatter is a tool which is used to read and understand API

---

## What is XMLHttpRequest?

**XMLHttpRequest** is a JavaScript object that allows web pages to make HTTP requests to servers asynchronously. It enables data to be fetched or sent to a server without reloading the entire web page, supporting dynamic and interactive web applications.

---

## What is AJAX Programming?

**AJAX** (Asynchronous JavaScript and XML) is a programming technique that uses a combination of:
- JavaScript
- The XMLHttpRequest object
- HTML and CSS

AJAX allows web applications to send and receive data from a server asynchronously, updating parts of a web page without requiring a full page reload. This results in faster, more responsive user experiences.

---

## ApiRequest.html Documentation

### Overview

`ApiRequest.html` demonstrates how to make an HTTP request to a public API using JavaScript's `XMLHttpRequest` object. It fetches user data from the GitHub API and logs specific information to the browser console.

### Concepts Covered

- **XMLHttpRequest States:**  
  The file lists the five ready states of an `XMLHttpRequest`:
  - `0 UNSENT`: Client created, `open()` not called yet.
  - `1 OPENED`: `open()` has been called.
  - `2 HEADERS_RECEIVED`: `send()` called, headers/status available.
  - `3 LOADING`: Downloading, partial data available.
  - `4 DONE`: Operation complete.

- **AJAX Request Flow:**  
  The script creates an `XMLHttpRequest`, opens a connection, listens for state changes, and processes the response when the request is complete.

- **JSON Parsing:**  
  The response from the API is in JSON format. The script parses this JSON and accesses properties like `followers`.

### Code Explanation

```html
<!-- ...HTML structure and ready state descriptions... -->
<script>
    const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState); // Logs the current ready state
        if (xhr.readyState === 4) { // When request is DONE
            const data = JSON.parse(this.responseText) // Parse JSON response
            console.log(typeof data); // Should log 'object'
            console.log(data.followers); // Logs the number of followers
        }
    }
    xhr.send();
</script>
```

- **Step-by-step:**
  1. The script defines the API endpoint (`requestUrl`).
  2. It creates a new `XMLHttpRequest` object.
  3. Opens a GET request to the API endpoint.
  4. Sets up an event handler for `onreadystatechange` to monitor the request's progress.
  5. When the request is complete (`readyState === 4`), it parses the JSON response and logs the number of followers.
  6. Sends the request.

### Usage

Open `ApiRequest.html` in a browser and check the console to see the ready state changes and the fetched data.

---





