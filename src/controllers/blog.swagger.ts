/**
 * @swagger
 *  components :
 *      schemas :
 *          CreateBlog :
 *              type : object
 *              required :
 *                  -   title
 *                  -   text
 *                  -   author
 *              properties :
 *                  title :
 *                      type : string
 *                      description : title of blog
 *                  text :
 *                      type : string
 *                      description : the text of blog
 *                  author :
 *                      type : string
 *                      description : the author of blog
 */

/**
 * @swagger
 *  /blog/add :
 *      post :
 *          tags : [Blog]
 *          summary : create blog
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : "#/components/schemas/CreateBlog"
 *                  application/json :
 *                      schema :
 *                          $ref : "#/components/schemas/CreateBlog"
 *          responses :
 *              201 :
 *                  description : success - created
 */
/**
 * @swagger
 *  /blog/list :
 *      get :
 *          tags : [Blog]
 *          summary : list of blogs
 *          responses :
 *              200 :
 *                  description : success
 */
/**
 * @swagger
 *  /blog/find/{id} :
 *      get :
 *          tags : [Blog]
 *          summary : find on blog with id
 *          parameters :
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success
 */
/**
 * @swagger
 *  /blog/delete/{id} :
 *      delete :
 *          tags : [Blog]
 *          summary : remove one blog with id
 *          parameters :
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success
 */
