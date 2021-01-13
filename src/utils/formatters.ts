/**
 * Capitalizes first letters of words in string.
 * @param {string} str String to be modified
 * @param {boolean=false} lower Whether all other letters should be lowercased
 * @return {string}
 * @usage
 *   capitalize('fix this string');     // -> 'Fix This String'
 *   capitalize('javaSCrIPT');          // -> 'JavaSCrIPT'
 *   capitalize('javaSCrIPT', true);    // -> 'Javascript'
 */
export const capitalize = (
  input = '',
  { noLowerCase } = { noLowerCase: false }
) => {
  const cInput = noLowerCase ? input : input.toLowerCase();
  const firstLettersRegex = /^(\w)|\W(\w)/g;
  const replacedInput = cInput.replace(firstLettersRegex, (m) =>
    m.toUpperCase()
  );
  return replacedInput;
};
