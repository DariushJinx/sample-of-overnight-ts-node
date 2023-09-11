/**
 * @swagger
 *  components :
 *      schemas :
 *          Register :
 *              type : object
 *              required :
 *                  -   username
 *                  -   password
 *                  -   fullname
 *              properties :
 *                  username :
 *                      type : string
 *                      description : username of user
 *                  password :
 *                      type : string
 *                      description : the password of user
 *                  fullname :
 *                      type : string
 *                      description : the fullname of user
 */
/**
 * @swagger
 *  components :
 *      schemas :
 *          Login :
 *              type : object
 *              required :
 *                  -   username
 *                  -   password
 *              properties :
 *                  username :
 *                      type : string
 *                      description : username of user
 *                  password :
 *                      type : string
 *                      description : the password of user
 */

/**
 * @swagger
 *  /auth/register :
 *      post :
 *          tags : [User]
 *          summary : register user
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : "#/components/schemas/Register"
 *                  application/json :
 *                      schema :
 *                          $ref : "#/components/schemas/Register"
 *          responses :
 *              201 :
 *                  description : success - created
 */
/**
 * @swagger
 *  /auth/login :
 *      post :
 *          tags : [User]
 *          summary : login user
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : "#/components/schemas/Login"
 *                  application/json :
 *                      schema :
 *                          $ref : "#/components/schemas/Login"
 *          responses :
 *              201 :
 *                  description : success
 */
