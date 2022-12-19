export default class StringUtils {
  static capitalize(str) {
    if (typeof str !== 'string') return str;
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }
}
