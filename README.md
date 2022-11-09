# Kitchen Recipe Management-Backend

> Deployed URL : https://kitchen-recipe-management-be.herokuapp.com

> Frontend Source code : https://github.com/SaiPraneethPegada/Kitchen-Recipe-Management-Frontend.git

----

## API End-Points:

| Method | End point | Description |
| ---- | ---- | ---- |
| POST | /signup | signup requirements -> username, email(unregistered) and password(Min 8 characters length) |
| POST | /signin | login credential requirements -> email and password |
| POST | /forgot_password | user submit their registered email ID -> Receives email -> on click on the link recieved in mail will redirect to reset password page  |
| POST | /reset_password | requirements password and confirm password. Handles -> password and confirm password should match, New password and old password should be different |
| GET | /profile | this request will get the user details stored in mongodb |
| PUT | /updateProfile | user can update their username |

> After succesful logged in:

| Method | End point | Description |
| ---- | ---- | ---- |
| POST | /users/addRecipe | posting a recipe with recipeName, description, ingredients, instructions, recipe image |
| GET | /users/allRecipes | get all the users posted recipes |
| GET | /users/recipe/:id | get a respective recipe by the recipe ID provided in params |
| PUT | /users/updateRecipe/:id | user who posted that recipe will have authorization to update the recipe. respective recipe ID is provided in params |
| DELETE | /users/removeRecipe/:id | user who posted that recipe will have authorization to delete the recipe. respective recipe ID is provided in params |
| PATCH | /users/favRecipe | user can add posted recipe to favorites |
| GET | /users/favRecipes | fetches recipes of logged user who added recipes to favorites |
| PATCH | /users/addComment/:id | adds comment to a particular posted recipe |


