const USERNAME_LENGTH_MIN = 4;
const USERNAME_LENGTH_MAX = 25;
const VALID_START_REGEX = /^[a-zA-Z]/;
const VALID_CHARACTERS_REGEX = /^[a-zA-Z0-9_]+$/;

function CodelandUsernameValidation(username: string): boolean {
  return (
    hasValidLength(username) &&
    startWithLetter(username) &&
    containsValidCharacters(username) &&
    doesNotEndWithUnderscore(username)
  );
}

function hasValidLength(username: string): boolean {
  return (
    username.length >= USERNAME_LENGTH_MIN &&
    username.length <= USERNAME_LENGTH_MAX
  );
}

function startWithLetter(username: string): boolean {
  return VALID_START_REGEX.test(username);
}

function containsValidCharacters(username: string): boolean {
  return VALID_CHARACTERS_REGEX.test(username);
}

function doesNotEndWithUnderscore(username: string): boolean {
  return username[username.length - 1] !== '_';
}

// Examples:
console.log(CodelandUsernameValidation('aa_')); // false
console.log(CodelandUsernameValidation('u__hello_world123')); // true
