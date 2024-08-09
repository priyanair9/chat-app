import axios from 'axios'
import { censorMessage} from 'chat-censoring'
const baseUrl = 'http://localhost:3000'

/*
 * Description: Log user in
 * @param  {String}  userName: Username of account being logged into
 * @param  {String}  password: Password of account being logged into
 * @return {Object}  Status of API request
 */
const loginUser = (userName, password) => {
    const request = {"username": userName, "password": password}
    return axios.post(baseUrl + "login", request)
      .then(response => response.data)
      .catch(err => console.log(err))
}

/*
 * Description: Filter content data by specific details
 * @param  {Object}  params: MongoDB search parameters, includes "strings", "author", and "category". Values may be undefined
 * @return {Object}  Status of API request and data fitting search paramters.
 */
const searchInPosts = (params) => {
  return axios.get(baseUrl + 'content', {params: params})
    .then(response => response.data)
    .catch(err => console.log(err))
}

/*
 * Description: Get individual post data
 * @param  {String}  postID: ID of the post being retrieved.
 * @return {Object}  Status of API request and post data.
 */
const getPost = (postID) => {
    return axios.get(baseUrl + 'content/' + postID)
      .then(response => response.data)
      .catch(err => console.log(err))
}

/*
 * Description: Get all posts from a specific user.
 * @param  {String}  userID:  User ID of the request.
 * @param  {Number}  limit:   Number of posts to retrieve.
 * @return {Object}  Status of API request
 */
const getUserPostsData = (userID, limit) => {   
    return axios.get(baseUrl + 'user/' + userID + '/' + limit)
      .then(response => response.data)
      .catch(err => console.log(err))
}

/*
 * Description: Get comments on specific post.
 * @param  {String}  postID: ID of the post
 * @return {Object}  Status of API request and comments on the post.
 */
const getCommentsOnPost = (postID) => {
  return axios.get(baseUrl + 'comment/' + postID.toString())
    .then(response => response.data)
    .catch(err => console.log(err))
}

/*
 * Description: add a new comment to a post.
 * @param  {Object}  userInfo:    Info of the user posting a comment
 * @param  {String}  postID:      ID of the post to add the comment to
 * @param  {String}  commentText: Text of the comment being added
 * @return {Object}  Status of API request
 */
const postNewComment = (userInfo, postID, commentText) => {
  const request = {"author": userInfo.username, "text": censorMessage(commentText,'*')}

  return axios.post(baseUrl + 'comment/' + postID.toString(), request, {
    headers: {
      'Authorization': 'basic ' + userInfo.token,
      }
    })
    .then(response => response.data)
    .catch(err => console.log(err))
}

/*
 * Description: Toggle state of like of dislike on post.
 * @param  {String}  userInfo:      Info of the user toggling the like or dislike
 * @param  {String}  reactionType:  Like, dislike, toggleBoth
 * @param  {String}  postID:        ID of the post being reacted to. 
 * @return {Object}  Status of API request
 */
const togglePostReaction = (userInfo, reactionType, postID) => {
  const request = {"username": userInfo.username, "reactionType": reactionType}
  
  return axios.put(baseUrl + 'content/' + postID.toString(), request, {
    headers: {
      'Authorization': 'basic ' + userInfo.token,
      }
    })
    .then(response => response.data)
    .catch(err => console.log(err))
}

/*
 * Description: Delete existing post.
 * @param  {String}  userInfo: Info on the user who is deleting their post
 * @param  {String}  postID:   ID of the post being deleted.
 * @return {Object}  Status of API request
 */
const deletePost = (userInfo, postID) => {
  return axios.delete(baseUrl + 'content/' + postID.toString(), {
    headers: {
      'Authorization': 'basic ' + userInfo.token,
      },
      data: {
      "username": userInfo.username
      }
    })
    .then(response => response.data)
    .catch(err => console.log(err))
}

/*
 * Description: Delete a comment off of a post.
 * @param  {String}  userInfo:  Info of the user deleting the content.
 * @param  {String}  commentID: ID of the comment being deleted.
 * @return {Object}  Status of API request
 */
const deleteComment = (userInfo, commentID) => {
  return axios.delete(baseUrl + 'comment/' + commentID.toString(), {
    headers: {
      'Authorization': 'basic ' + userInfo.token,
      }
    })
    .then(response => response.data)
    .catch(err => console.log(err))
}



const registerNewUser = (newUserName, email, password) => {
    const request = {"username": newUserName, "email": email, "password": password}
    return axios.post(baseUrl + "register", request)
      .then(response => response.data)
      .catch(err => console.log(err))
}


const serverRequests = {
    baseUrl,
    loginUser,

    getPost,
    deletePost,
    togglePostReaction,
    searchInPosts,

    getCommentsOnPost,
    postNewComment,
    deleteComment,

    getUserPostsData,
    registerNewUser
}

export default serverRequests