function PasswordGenerator(length) {
    // const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let num = "12345";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomNum = Math.floor(Math.random() * num.length);
      password += num[randomNum];
      }
      return password;
}  

console.log(passwordGenerator(5));