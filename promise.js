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
  
  
   const createPosts = (post) => {
     return new Promise((resolve, reject) => {

        setTimeout(() => {
         blogPosts.push(post)

         const error = false

         if (!error) {
            resolve()
         }
         else {
            reject('Error: something went wrong')
         }
      }, 2000)

     })


  
   }
  
//    createPosts({title: 'Post 3', body: 'This is post 3'})
//    .then(getPosts)
//    .catch(error => console.log(error))

  /*
  Promise 101

   Resolve basically resolves a Promise succesfully and
    when something goes wrong we call reject

    It is good practice in a promise to create an error variable 
    that catches erros so therefore if the error varibale is set to false initially
    then we can say if not error then resolve() whereas if we do have an error then reject() with a nice error message

    Now finally when we want to call our function createPosts we can do so and after that we will use the 
    .then method to call the getPosts function after the post is created

    NOTE:  This takes 3 sec because it adds the total time from the createPosts and the getPosts function

    We must also catch the error variable by using the .catch method ☝️
  */
  
   // ASYNC AWAIT

  async function sync() {
     await createPosts({title: 'Post 3', body: 'This is post 3'})

     getPosts()
   }
   sync()
   /*
   What does await do? => 
   It's a more elegant way to handle promises
   Async Await waits for an asynchornous process to complete
   So we wait for a process to be done by putting await infront of that process / function
   and then we call or put whatever we want after that
   */

/*
 In case you were wondering what the 'new' keyword infront of the promise is, here's an example

 In JavaScript, the new keyword is used to create an instance of an object, and it also changes the way a constructor function is called.

When a constructor function is called with the new keyword, JavaScript creates a new object and sets the this keyword within the constructor function to reference the new object.

Here's an example:

function Person(name) {
  this.name = name;
}

const john = new Person("John");
console.log(john.name); // "John"

In this example, the Person function is a constructor function and when it's called using the new keyword, it creates a new object and sets the name property on that object to the value passed in as an argument.

When the new keyword is not used, it will not create a new object, the this keyword inside the function will refer to the global object, and it will not return the new object.
*/


/* Promise.all */

// const promise1 = Promise.resolve("Hello World")
// const promise2 = 10
// const promise3 = new Promise((resolve) => {
//    setTimeout(resolve, 2000, 'Goodbye World')
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json())

// Promise.all([promise1, promise2, promise3, promise4]).then( values => console.log(values))


/*
So we've created 4 different promises which have to be in an ARRAY and the longest promise is the 3rd one so we can use the promise.all method to call all these promises and 
run them at once and then we console them out using a value property which is being referred to the values of the Promises themselves

The last promise uses the fetch methid to fetch data from an API endpoint that allows us to access the data 
*/
