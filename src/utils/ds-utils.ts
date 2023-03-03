/* eslint-disable @typescript-eslint/no-explicit-any */
const baseUrl = 'http://localhost:3001/';

export const asyncFetch = async (requestOptions: RequestInit, url = '') => {
  let statusCode = 0;

  const response = await fetch(baseUrl + url, requestOptions);

  statusCode = response.status;
  let responseJson;
  if (requestOptions.method === "DELETE") {
    responseJson = '';
  }
  else {
    responseJson = await response?.json();
  }

  return { responseJson, statusCode };
}


export const camelToDashCase = (str: string) =>
  str.replace(/([A-Z])/g, (m: string) => `-${m[0].toLowerCase()}`)

export default function fromReactToWebComponentProps(cProps: DesignSystemElementAttributes) {
  return Object.keys(cProps).reduce((acc: any, name) => {
    const value = (cProps as any)[name]
    const type = typeof value

    if (['string', 'boolean', 'number'].includes(type)) {
      acc[camelToDashCase(name)] = value
    }

    return acc
  }, {})
}

export const validateRegex = (regExp: RegExp, stringVal: string, fieldName: string): ["normal" | "error", string] => {
  if (stringVal === '') {
    return ["error", `${fieldName} es requerido`]
  }
  else if (!regExp.test(stringVal)) {
    return ["error", `${fieldName} no valido`]
  }
  else {
    return ["normal", ""]
  }
}
