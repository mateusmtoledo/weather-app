export default class DOMUtils {
  static createElement(element, props, ...children) {
    const node = document.createElement(element);
    if (typeof props === 'object') {
      Object.keys(props).forEach((key) => {
        node.setAttribute(key, props[key]);
      });
    }
    children.forEach((child) => {
      node.append(child);
    });
    return node;
  }
}
