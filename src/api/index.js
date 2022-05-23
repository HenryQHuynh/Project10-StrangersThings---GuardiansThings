const BASE_URL = 'https://strangers-things.herokuapp.com';
// const COHORT = 'WaywardGuardian'
const COHORT = '2202-FTB-PT-WEB-PT';

// POST FUNCTIONS //
export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/${COHORT}/posts`);
    const result = await response.json();

    return result.data.posts;
  } catch (error) {
    console.error(error);
  }
};

export const createPost = async (
  token,
  title,
  description,
  price,
  location,
  willDeliver
) => {
  try {
    const response = await fetch(`${BASE_URL}/api/${COHORT}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          location,
          willDeliver,
        },
      }),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = async (token, postId) => {
  try {
    const response = await fetch(`${BASE_URL}/api/${COHORT}/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};

// As previously mentioned, certain aspects of the code within this program utilize the funtion structure of older code from previous projects.
// export const updatePost = async (
//   token,
//   postId,
//   title,
//   description,
//   price,
//   location,
//   willDeliver
// ) => {
//   try {
//     const response = await fetch(`${BASE_URL}/api/${COHORT}/posts/${postId}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         post: {
//           title,
//           description,
//           price,
//           location,
//           willDeliver,
//         },
//       }),
//     });
//     const result = await response.json();

//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };


//  USER FUNCTIONS //
export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/api/${COHORT}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/api/${COHORT}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const fetchProfile = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/api/${COHORT}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};

//  MESSAGES FUNCTIONS //
export const fetchMessages = async (token, postId, content) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/${COHORT}/posts/${postId}/messages`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: {
            content,
          },
        }),
      }
    );
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};
