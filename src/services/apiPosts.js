import * as httpRequest from '~/utils/httpRequest';

export const getPosts = async (q, userId) => {
  try {
    const res = await httpRequest.get(`posts`, {
      params: {
        q,
        userId: userId,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
