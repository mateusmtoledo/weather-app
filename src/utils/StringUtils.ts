export default class StringUtils {
  static capitalize(str: string) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }
}
