export const isElement = (element: any): element is HTMLElement =>
  element && Reflect.has(element, 'nodeName')