## Back end for track team 31's Foodtruck Trackr project.<br>
Use the link: https://bw-foodtruck-tracker.herokuapp.com/ <br>
With the following table includes all endpoints:

|   	|   	|   	|
|---	|---	|---	|
|**GET** 	|*/api/users* 	|List of all users  	|
|**GET**   	|*/api/user*   	|Shows current user   	|
|**GET**   	|*/api/session*   	|Shows current logged in user from session   	|
|**GET**    	|*/api/diners*   	|Displays a list of all registered diners   	|
|**GET**    	|*/api/trucks*   	|Displays a list of all food trucks   	|
|**GET**    	|*/api/trucks/:id*   	|Shows food truck with specified ID   	|
|**POST**   	|*/api/auth/register*   	|REQUIRES: username, password, role (1 for operator, 2 for diner). OPTIONAL: city|
|**POST**   	|*/api/auth/login*   	|REQUIRES: username and password   	|
|**POST**   	|*/api/trucks*   	|Will create a new food truck under logged in operator (MUST be logged in as an operator: role 1)   	|
|**POST**   	|*/api/trucks/:id/favorite*   	|Will put food truck with specified ID under a diners favorites   	|
|**POST**   	|*/api/trucks/:id/menu*   	|Will add a menu item to specified truck. REQUIRES: truck_id, name, price   	|
|**POST**   	|*/api/trucks/:id/review*   	|Will add a review to specified truck. REQUIRES: truck_id, user_id, rating (integer), review (text)   	|
|**PUT**   	|*/api/users*   	|Same requirements as registration, will edit current logged in user   	|
|**PUT**   	|*/api/trucks/:id*   	|Will edit current logged in operators truck information   	|
|**DEL**   	|*/api/users*   	|Will delete current user logged in   	|
|**DEL**   	|*/api/trucks/:id*   	|Will delete food truck with specified ID   	|
|**DEL**   	|*/api/trucks/:id/favorite*   	|Will delete food truck with specified ID from diners favorites   	|
|**DEL**   	|*/api/trucks/:id/menu/:itemid*   	|Will delete menu item at specified ID   	|
|**DEL**    |*/api/trucks/:id/review/:reviewid*     |Will delete diner review at specified ID
