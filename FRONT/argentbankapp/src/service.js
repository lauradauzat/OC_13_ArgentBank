// /**
// A service class that handles the retrieval of the API data from http://localhost:3001/api/v1/user/profile".
// @class Service
// */



const loginUrl = 'http://localhost:3001/api/v1/user/login';
const profileUrl = 'http://localhost:3001/api/v1/user/profile';

const Service = {

   retrieveToken : async (body) => {

    try {
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.status === 404) {
        console.error('User not found');
        return null;
      }

      const data = await response.json();

      return data.body.token;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

   getProfile : async (token) => {
    try {
      const response = await fetch(profileUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 404) {
        console.error('User not found');
        return null;
      }

      const data = await response.json();
      console.log(data)
      return {
        firstName: data.body.firstName,
        lastName: data.body.lastName,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  updateProfile : async (token, body) => {
    try {
      const response = await fetch(profileUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (response.status === 404) {
        console.error('User not found');
        return null;
      }

      const data = await response.json();

      return {
        firstName: data.body.firstName,
        lastName: data.body.lastName,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }
      
};

export default Service;