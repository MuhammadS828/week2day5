function generatePassword(length, averagy, number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digitsAlph =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const digitsAlphsymbols =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[]^_{|}~";
  let newPassword = "";
  let arrPassword = [];

  for (let i = 0; i < number; i++) {
    for (let y = 0; y < length; y++) {
      if (averagy === 1) {
        const randomSymbol = alphabet.charAt(
          Math.floor(Math.random() * alphabet.length)
        );
        newPassword += randomSymbol;
      }

      if (averagy === 2) {
        const randomSymbol = digitsAlph.charAt(
          Math.floor(Math.random() * digitsAlph.length)
        );
        newPassword += randomSymbol;
      }

      if (averagy === 3) {
        const randomSymbol = digitsAlphsymbols.charAt(
          Math.floor(Math.random() * digitsAlphsymbols.length)
        );
        newPassword += randomSymbol;
      }
    }
    arrPassword.push(newPassword);
    newPassword = "";
  }
  return arrPassword;
}
