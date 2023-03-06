import fromReactToWebComponentProps, { validateEmail, validatePassword } from './ds-utils';

describe('fromReactToWebComponentProps', () => {
  it('should convert to web component props', () => {
    const props = fromReactToWebComponentProps({ hidePasswordText: '1' })

    expect(props).toEqual({ 'hide-password-text': '1' })
  })

  it('should not convert to web component props if the value is a fuction', () => {
    const props = fromReactToWebComponentProps({
      onChange: () => { }
    })

    expect(props).toEqual({})
  })
})

describe('validateEmail', () => {
  it('should validate an email value', () => {
    const validEmail = 'test@email.com';
    const invalidEmail = 'test.email.com';

    expect(validateEmail(validEmail)).toBe(true);
    expect(validateEmail(invalidEmail)).toBe(false);
  })
})


describe('validatePassword', () => {
  it('should validate an email value', () => {
    const validPassword = 'qPwer12$qwe';
    const invalidPassword = 'qpwer12$qwe';
    const invalidPassword2 = 'qPwer12qwe';
    const invalidPassword3 = 'qPwer1$';
    const invalidPassword4 = 'qPwerqwe';

    // Valid password
    expect(validatePassword(validPassword)).toBe(true);

    // Invalid password without uppercase letters
    expect(validatePassword(invalidPassword)).toBe(false);

    // Invalid password without special characters
    expect(validatePassword(invalidPassword2)).toBe(false);

    // Invalid password with less than 8 characters
    expect(validatePassword(invalidPassword3)).toBe(false);

    // Invalid password without numeric characters
    expect(validatePassword(invalidPassword4)).toBe(false);
  })
})
