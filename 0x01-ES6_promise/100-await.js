import { uploadPhoto, createUser } from "./utils";

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    const [photoResponse, userResponse] = await Promise.all([photo, user]);

    return { photo: photoResponse, user: userResponse };
  } catch (error) {
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;

// const posts = [
//     {title: 'Post One', body: 'This is post one'},
//     {title: 'Post Two', body: 'This is post two'}
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);

//             const error = false;

//             if (!error) {
//                 resolve();
//             } else {
//                 reject(new Error('Something went wrong'));
//             }
//         }, 2000)
//     })

// }

// createPost({title: 'Post Three', body: 'This is post three'})
//     .then(getPost)
//     .catch(err => console.log(err));
