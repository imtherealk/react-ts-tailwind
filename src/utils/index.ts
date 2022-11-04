class Utils {
  static isNumber(str: string): boolean {
    if (str.trim() == "") return true;
    if (typeof str !== "string") {
      return false;
    }
    return !Number.isNaN(Number(str));
  }
}
export default Utils;
