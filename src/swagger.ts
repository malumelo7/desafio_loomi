export const swaggerDocument = {
  "openapi": "3.0.1",
  "info": {
    "title": "defaultTitle",
    "description": "defaultDescription",
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
        "description": "Auto generated using Swagger Inspector",
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
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "put": {
        "description": "Auto generated using Swagger Inspector",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/user_body"
              },
              "examples": {
                "0": {
                  "value": "{\n    \"id\": \"1c8130f1-968b-44f0-8ff5-613c8e3b921b\"\n}"
                },
                "1": {
                  "value": "{\n        \"id\": \"1c8130f1-968b-44f0-8ff5-613c8e3b921b\",\n        \"email\": \"malumalu@gmail.com\",\n        \"password\": \"1234\"\n    }"
                },
                "2": {
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
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "post": {
        "description": "Auto generated using Swagger Inspector",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/user_body_1"
              },
              "examples": {
                "0": {
                  "value": "{\n    \"id\": \"1c8130f1-968b-44f0-8ff5-613c8e3b921b\"\n}"
                },
                "1": {
                  "value": "{\n        \"id\": \"1c8130f1-968b-44f0-8ff5-613c8e3b921b\",\n        \"email\": \"malumalu@gmail.com\",\n        \"password\": \"1234\"\n    }"
                },
                "2": {
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
        "servers": [
          {
            "url": "https://loomi-challenge.herokuapp.com"
          }
        ]
      },
      "delete": {
        "description": "Auto generated using Swagger Inspector",
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
    }
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
  "security": [{
    "bearerAuth": [],
  }],
};