/**
A service class that handles the retrieval of the API data from http://localhost:3001/api/v1/user/profile".
@class Service
*/

const url = 'http://localhost:3001/api/v1/user/profile';

export const fetchData = async () => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
    });

    if (response.status === 404) {
      console.error('User not found');
      return null;
    }

    const data = await response.json();

    return {
      data: data,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default class Service {
  constructor() {
    this.dataAPI = null;
  }

  async fetchData() {
    const response = await fetchData();
    this.dataAPI = response?.data;
  }

  get firstName() {
    return this.dataAPI?.body?.firstName ?? '';
  }

  get lastName() {
    return this.dataAPI?.body?.lastName ?? '';
  }
}
