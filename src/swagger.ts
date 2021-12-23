export const swaggerDocument = {
  "openapi": "3.0.1",
  "info": {
    "title": "Loomi Challenge",
    "description": "API documentation for Loomi Challenge",
    "version": "0.1"
  },
  "servers": [
    {
      "url": "https://loomi-challenge.herokuapp.com"
    }
  ],
  "paths": {
    "/user/": {
      "get": {
        "summary": "Return all users",
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {}
              }
            }
          }
        },
        "tags" : [ "user" ],
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "put": {
        "summary": "Update user data",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/user_body"
              },
              "examples": {
                "0": {
                  "value": "{\n        \"id\": \"1c8130f1-968b-44f0-8ff5-613c8e3b921b\",\n        \"email\": \"malumalu@gmail.com\",\n        \"password\": \"1234\"\n    }"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {}
              }
            }
          }
        },
        "tags" : [ "user" ],
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "post": {
        "summary": "Create a user",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/user_body_1"
              },
              "examples": {
                "0": {
                  "value": "{\n        \"email\": \"malu@gmail.com\",\n        \"password\": \"1234\"\n    }"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {}
              }
            }
          }
        },
        "tags" : [ "user" ],
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "delete": {
        "summary": "Delete a user",
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {
                  "0": {
                    "value": "{\"id\": \"1c8130f1-968b-44f0-8ff5-613c8e3b921b\"}"
                  }
                }
              }
            }
          }
        },
        "tags" : [ "user" ],
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "servers": [
        {
          "url": "https://loomi-challenge.herokuapp.com"
        }
      ]
    },
    "/product/": {
      "get": {
        "summary": "Return all products",
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {}
              }
            }
          }
        },
        "tags" : [ "product" ],
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "put": {
        "summary": "Update product data",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/user_body"
              },
            }
          }
        },
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {
                  "0": {
                    "value": "{\n    \"id\": \"00b36f06-a41b-43f2-b3a5-75ba2f179fc5\",\n    \"name\": \"Laptop Gamer G600\",\n    \"price\": 3600.00,\n    \"description\": \"LAPTOP\"\n}"
                  }
                }
              }
            }
          }
        },
        "tags" : [ "product" ],
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "post": {
        "summary": "Create a product",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/user_body_1"
              },
            }
          }
        },
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {
                  "0": {
                    "value": "{\n    \"name\": \"Laptop Gamer G600\",\n    \"price\": 3600.00,\n    \"description\": \"LAPTOP\"\n}"
                  }
                }
              }
            }
          }
        },
        "tags" : [ "product" ],
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "delete": {
        "summary": "Delete a product",
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {
                  "0": {
                    "value": "{\n    \"id\": \"00b36f06-a41b-43f2-b3a5-75ba2f179fc5\"\n}"
                  }
                }
              }
            }
          }
        },
        "tags" : [ "product" ],
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "servers": [
        {
          "url": "https://loomi-challenge.herokuapp.com"
        }
      ]
    },
    "/client/": {
      "get": {
        "summary": "Return all clients",
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {}
              }
            }
          }
        },
        "tags" : [ "client" ],
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "put": {
        "summary": "Update client data",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/user_body"
              },
            }
          }
        },
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {
                  "0": {
                    "value": "{\n    \"id\": \"91dcebe8-bf57-4491-8629-ef749d4b682e\",\n    \"name\": \"Malu\",\n    \"email\": \"malumvbmelo@gmail.com\",\n    \"phone\": \"12345678\",\n    \"adress\": \"Rua do Sol\"\n}"
                  }
                }
              }
            }
          }
        },
        "tags" : [ "client" ],
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "post": {
        "summary": "Create a client",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/user_body_1"
              },
            }
          }
        },
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {
                  "0": {
                    "value": "{\n    \"name\": \"Malu\",\n    \"email\": \"malumvbmelo@gmail.com\",\n    \"phone\": \"12345678\",\n    \"adress\": \"Rua do Sol\"\n}"
                  }
                }
              }
            }
          }
        },
        "tags" : [ "client" ],
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "delete": {
        "summary": "Delete a client",
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {
                  "0": {
                    "value": "{\n    \"id\": \"91dcebe8-bf57-4491-8629-ef749d4b682e\"\n}"
                  }
                }
              }
            }
          }
        },
        "tags" : [ "client" ],
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "servers": [
        {
          "url": "https://loomi-challenge.herokuapp.com"
        }
      ]
    },
    "/clientRequest/": {
      "get": {
        "summary": "Return all client requests",
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {}
              }
            }
          }
        },
        "tags" : [ "clientRequest" ],
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "put": {
        "summary": "Update client request data",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/user_body"
              },
            }
          }
        },
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {
                  "0": {
                    "value": {
                      "id": "d5ff8466-cbd7-4e92-9d44-80b1f5cf200c",
                      "products": ["4c99ac24-5b22-4bc6-9f1b-e69b65bce210"],
                      "status": "WAITING_PAYMENT"
                  }
                  }
                }
              }
            }
          }
        },
        "tags" : [ "clientRequest" ],
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "post": {
        "summary": "Create a client request",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/user_body_1"
              },
            }
          }
        },
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {
                  "0": {
                    "value": {
                      "clientId": "d5ff8466-cbd7-4e92-9d44-80b1f5cf200c",
                      "products": ["4c99ac24-5b22-4bc6-9f1b-e69b65bce210"],
                      "status": "WAITING_PAYMENT"
                  }
                  }
                }
              }
            }
          }
        },
        "tags" : [ "clientRequest" ],
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "delete": {
        "summary": "Delete a client request",
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {
                  "0": {
                    "value": {
                      "clientId": "d5ff8466-cbd7-4e92-9d44-80b1f5cf200c"
                  }
                  }
                }
              }
            }
          }
        },
        "tags" : [ "clientRequest" ],
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "servers": [
        {
          "url": "https://loomi-challenge.herokuapp.com"
        }
      ]
    },
  },
  "components": {
    "securitySchemes": {
      "bearerAuth": {
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "JWT",
      },
    },
    "schemas": {
      "Error": {

      },
    },
    "responses": {
      "OK": {
        "description": "The request succeeded.",
        "content": {
          "application/json": {

          },
        },
      },
      "BadRequest": {
        "description": "The server couldn't understand the request due to invalid syntax.",
        "content": {
          "application/json": {

          },
        },
      },
      "Unauthorized": {
        "description": "The client must autenticate itself to get the requested response.",
        "content": {
          "application/json": {

          },
        },
      },
      "Conflict": {
        "description": "The request conflicts with the current state of the server.",
        "content": {
          "application/json": {

          },
        },
      },
      "Forbidden": {
        "description": "The client doesn't have acess rights to the content. But the client identity is known to the server.",
        "content": {
          "application/json": {

          },
        },
      },
      "NotFound": {
        "description": "Could not find Id/URL on the server.",
        "content": {
          "application/json": {

          },
        },
      },
      "ServiceUnavailable": {
        "description": "Service Error.",
        "content": {
          "application/json": {

          },
        },
      },
    },
  },
};