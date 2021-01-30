export const isValidPhoneNo = (phoneNo) => {
  const phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return phoneNumberPattern.test(phoneNo);
};

export const isValidEmail = (email) => {
  const format = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return format.test(email);
};

export const isValidUserName = (email) => {
  const format = /^[0-9a-zA-Z_]{5,}$/;
  return format.test(email);
};

export const isEmpty = (text) => {
  return text.toString().trim().length > 0 && text.toString().trim() !== '0';
};

export const validatePhoneNumber = (phoneNumber) =>
  /^\d{10}$/.test(phoneNumber);

export const configureUrl = (url) => {
  let authUrl = url;
  if (url && url[url.length - 1] === '/') {
    authUrl = url.substring(0, url.length - 1);
  }
  return authUrl;
};

export const getErrorMessage = (error) => {
  if (error && error.response && error.response.data && error.response.data) {
    if (error.response.data.errors) {
      return error.response.data.errors.join('\n');
    }
    if (error.response.data.message) {
      return error.response.data.message;
    }
  }
  if (error && error.message) {
    return error.message;
  }
  return 'Something went wrong!';
};
