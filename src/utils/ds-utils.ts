/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const validateEmail = (email: string) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export const validatePassword = (password: string) => {
  const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return pattern.test(password);
}
