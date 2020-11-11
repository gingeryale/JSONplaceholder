import jsonPlaceholder from '../api/jsonPlaceholder';



export const fetchPosts = () => async dispatch => {
    const resposne = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: resposne })
}






// export const fetchPosts = () => {
//     return async function (dispatch, getState) {
//         const resposne = await jsonPlaceholder.get('/posts');

//         dispatch({ type: 'FETCH_POSTS', payload: resposne })
//     }
// }

// export const fetchPosts = () => {
//     return function (dispatch, getState) {
//         const promise = jsonPlaceholder.get('/posts');

//         return {
//             type: 'FETCH_POSTS',
//             payload: promise
//         }
//     }
// }


// export const fetchPosts = async () => {
//     const res = await jsonPlaceholder.get('/posts');
//     return {
//         type: 'FETCH_POSTS',
//         payload: res
//     };
// };
