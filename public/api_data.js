define({ "api": [
  {
    "type": "get",
    "url": "/business",
    "title": "Get all business profiles",
    "name": "Business",
    "group": "Business",
    "version": "0.0.0",
    "filename": "./business/business-router.js",
    "groupTitle": "Business"
  },
  {
    "type": "post",
    "url": "/business",
    "title": "Create a new business profile",
    "name": "CreateBusiness",
    "group": "Business",
    "version": "0.0.0",
    "filename": "./business/business-router.js",
    "groupTitle": "Business"
  },
  {
    "type": "delete",
    "url": "/business/:id",
    "title": "Delete a single business profile",
    "name": "DeleteBusiness",
    "group": "Business",
    "version": "0.0.0",
    "filename": "./business/business-router.js",
    "groupTitle": "Business"
  },
  {
    "type": "get",
    "url": "/business/:id",
    "title": "Get a single business profile",
    "name": "GetBusiness",
    "group": "Business",
    "version": "0.0.0",
    "filename": "./business/business-router.js",
    "groupTitle": "Business"
  },
  {
    "type": "put",
    "url": "/business/:id",
    "title": "Update a single business profile",
    "name": "UpdateBusiness",
    "group": "Business",
    "version": "0.0.0",
    "filename": "./business/business-router.js",
    "groupTitle": "Business"
  },
  {
    "type": "delete",
    "url": "/users/:username",
    "title": "Del User",
    "name": "DelUserName",
    "group": "Users",
    "version": "0.0.0",
    "filename": "./users/users-router.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:username",
    "title": "Get User",
    "name": "GetUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200\n{\n   \"username\": \"stacey\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users/users-router.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get Users",
    "name": "GetUsers",
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200\n[\n {\n   \"username\": \"toni\"\n },\n {\n   \"username\": \"fuston05@yahoo.com\"\n },\n {\n   \"username\": \"fuston05\"\n },\n {\n   \"username\": \"stacey\"\n },\n {\n   \"username\": \"bill\"\n },\n {\n   \"username\": \"Lambda\"\n },\n {\n   \"username\": \"asdsd\"\n },\n {\n   \"username\": \"kjbkjb\"\n },\n {\n   \"username\": \"xczczx\"\n },\n {\n   \"username\": \"adam\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users/users-router.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login User",
    "name": "Login",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "{\n   \"username\": \"stacey\",\n   \"password\": \"replate\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201\n{\n  \"message\": \"Welcome stacey\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6InN0YWNleSIsImlhdCI6MTU4MzI3NzU5NCwiZXhwIjoxNTgzMzYzOTk0fQ.sO2rgh6hT8x_FjXBDqImhQB3XmThKklwhFGwUBt1voc\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Login error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth-router.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register a new account",
    "name": "Register",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>choose a unique username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>choose a password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>prefer mobile so you can be reached enroute</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "{\n \"username\": \"stacey\",\n \"password\": \"replate\",\n \"phoneNumber\": \"555-432-1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201\n{\n\"username\": \"stacey2\",\n\"phoneNumber\": \"555-432-1234\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Registration error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth-router.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/volunteer",
    "title": "Create a new Volunteer profile",
    "name": "CreateVolunteer",
    "group": "Volunteer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "access_id",
            "description": "<p>id of relevant access record.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "{\n \"username\": \"stacey22\",\n \"access_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201\n[\n 2\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Registration error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./volunteer/volunteer-router.js",
    "groupTitle": "Volunteer"
  },
  {
    "type": "get",
    "url": "/volunteer/:username",
    "title": "get Volunteer profiles for username",
    "name": "CreateVolunteer",
    "group": "Volunteer",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200\n[\n {\n   \"id\": 4,\n   \"username\": \"stacey\",\n   \"phoneNumber\": \"555-432-1234\",\n   \"role\": \"business\",\n   \"role_description\": \"may create/read/update/delete pickup requests\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./volunteer/volunteer-router.js",
    "groupTitle": "Volunteer"
  },
  {
    "type": "delete",
    "url": "/volunteer/:id",
    "title": "Delete a single Volunteer profile",
    "name": "DeleteVolunteer",
    "group": "Volunteer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of Volunteer to DELETE.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200\n{\n \"removed\": {\n   \"id\": 5,\n   \"user_id\": 2,\n   \"access_id\": 1\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Registration error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./volunteer/volunteer-router.js",
    "groupTitle": "Volunteer"
  },
  {
    "type": "get",
    "url": "/volunteer",
    "title": "Get all Volunteer profiles",
    "name": "GetVolunteers",
    "group": "Volunteer",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200\n[\n {\n   \"id\": 4,\n   \"username\": \"stacey\",\n   \"phoneNumber\": \"555-432-1234\",\n   \"role\": \"business\",\n   \"role_description\": \"may create/read/update/delete pickup requests\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./volunteer/volunteer-router.js",
    "groupTitle": "Volunteer"
  },
  {
    "type": "put",
    "url": "/volunteer/:id",
    "title": "Update a single Volunteer profile",
    "name": "UpdateVolunteerWithId",
    "group": "Volunteer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of Volunteer to Update.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "{\n \"access_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200\n{\n\"access_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Registration error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./volunteer/volunteer-router.js",
    "groupTitle": "Volunteer"
  },
  {
    "type": "put",
    "url": "/volunteer/:username",
    "title": "Update all Volunteer profiles for username",
    "name": "UpdateVolunteers",
    "group": "Volunteer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username associated with Volunteer profile(s).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200\n1",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Registration error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./volunteer/volunteer-router.js",
    "groupTitle": "Volunteer"
  },
  {
    "type": "post",
    "url": "/pickupRequest",
    "title": "create a new Pickup Requests",
    "name": "CreatePickupRequest",
    "group": "pickupRequests",
    "version": "0.0.0",
    "filename": "./pickupRequest/pickupRequest-router.js",
    "groupTitle": "pickupRequests"
  },
  {
    "type": "delete",
    "url": "/pickupRequest/:id",
    "title": "Delete a single Pickup Request",
    "name": "DeletePickupRequest",
    "group": "pickupRequests",
    "version": "0.0.0",
    "filename": "./pickupRequest/pickupRequest-router.js",
    "groupTitle": "pickupRequests"
  },
  {
    "type": "get",
    "url": "/pickupRequest/:id",
    "title": "Get a single Pickup Request",
    "name": "GetPickupRequest",
    "group": "pickupRequests",
    "version": "0.0.0",
    "filename": "./pickupRequest/pickupRequest-router.js",
    "groupTitle": "pickupRequests"
  },
  {
    "type": "get",
    "url": "/pickupRequest",
    "title": "Get a list of Pickup Requests",
    "name": "GetPickupRequests",
    "group": "pickupRequests",
    "version": "0.0.0",
    "filename": "./pickupRequest/pickupRequest-router.js",
    "groupTitle": "pickupRequests"
  },
  {
    "type": "put",
    "url": "/pickupRequest/:id",
    "title": "Update a single Pickup Request",
    "name": "UpdatePickupRequest",
    "group": "pickupRequests",
    "version": "0.0.0",
    "filename": "./pickupRequest/pickupRequest-router.js",
    "groupTitle": "pickupRequests"
  }
] });
