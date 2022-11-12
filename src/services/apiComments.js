import * as httpRequest from '~/utils/httpRequest';

export const getComments = async (postId) => {
  try {
    const res = await httpRequest.get(`comments`, {
      params: {
       postId: postId
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
