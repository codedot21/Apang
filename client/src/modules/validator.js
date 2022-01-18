export const valid = {
  nickname: (nickname) => {
    return nickname.length >= 2;
  },
  email: (email) => {
    var emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    return emailRegExp.test(email);
  },
  password: (password) => {
    return password.length >= 8;
  },
  newPassword: (password) => {
    return password.length >= 8;
  },
  license: (license) => {
    return license.length >= 4 && license.length <= 6;
  },
  name: (name) => {
    return name.length >= 2 && name.length <= 5;
  },
};
