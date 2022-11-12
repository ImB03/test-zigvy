import * as httpRequest from '~/utils/httpRequest';

export const getUsers = async () => {
  try {
    const res = await httpRequest.get(`users`, {
      params: {
        
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
