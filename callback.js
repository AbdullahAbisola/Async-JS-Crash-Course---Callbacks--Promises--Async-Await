/* 
 We are going to mimic blogposts on a server and getting them and creating a blog post
 */

// Let's set up an Array of blog posts

const blogPosts = [
  { title: `Post 1`, body: "This is post 1" },
  { title: `Post 2`, body: "This is post 2" },
];

const getPosts = () => {

  setTimeout(() => {
    let output = "";

    blogPosts.forEach((blog, index)=> {
    output += `<li>${blog.title}</li>`;
    })

    document.body.innerHTML = output;
  }, 1000);

};



/* The purpose of this function ☝️ is to get the posts from the array, wait one second
 and then post it on the console or wherever */

/* We'll use the forEach method to iterate over the post array 
    and it takes a call back function with parameters 
    which can be anything you want and we'll use that inside the method to actually grab the key value pairs
*/

/* 
We'll out put it in the body of the HTML by using innerHTML method 
and check if it works by calling the function 👇

*/

 const createPosts = (post, callback) => {

    setTimeout(() => {
       blogPosts.push(post)
       callback()
    }, 2000)

 }

/*
We've created another function that will push a new post to the posts array
and return the title because of the getPosts function

NOTE : This function takes 2 sec and is longer that the getPosts function
       therefore it will happe after the getPosts function and we won't see the new post
*/

createPosts({title: `Post 3`, body: `This is post 3`},getPosts)

/* 
To solve this we can use a callbackfunction that 
will be inputted as the parameters the createPost function and then
after the post is pushed we'll call the callback function which is 
actually the getPosts function

So it will take 2 sec, the createPosts function will run
it will create the post and then after it pushes the post to the array
it will run the callback function which is the getPosts function
which we passed in as an argument and then it will add all the post titles because
that is the purpose of the getPosts function
*/