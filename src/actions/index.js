import jsonPlaceholder from '../api/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => async dispatch => {
    const resposne = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: resposne.data })
}

// export const fetchUser = function (id) {
//     return async function (dispatch) {
//         const resposne = await jsonPlaceholder.get(`/users/${id}`);
//         dispatch({ type: 'FETCH_USER', payload: resposne.data })
//     };
// };


export const fetchUser = id => dispatch => _fetchUser(id, dispatch);


const _fetchUser = _.memoize(async (id, dispatch) => {
    const resposne = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: resposne.data })
});








// posts
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
