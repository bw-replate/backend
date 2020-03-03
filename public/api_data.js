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
    "name": "GetUserName",
    "group": "Users",
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
    "version": "0.0.0",
    "filename": "./auth/auth-router.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/:username",
    "title": "Update User",
    "name": "PutUsers",
    "group": "Users",
    "version": "0.0.0",
    "filename": "./users/users-router.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register a new User",
    "name": "Register",
    "group": "Users",
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
    "version": "0.0.0",
    "filename": "./volunteer/volunteer-router.js",
    "groupTitle": "Volunteer"
  },
  {
    "type": "put",
    "url": "/volunteer/:username",
    "title": "Update Volunteer profiles for username",
    "name": "UpdateVolunteers",
    "group": "Volunteer",
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
