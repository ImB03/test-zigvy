import * as httpRequest from '~/utils/httpRequest';

export const getUsers = async (q, type = 'less') => {
  try {
    const res = await httpRequest.get(`users`, {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
