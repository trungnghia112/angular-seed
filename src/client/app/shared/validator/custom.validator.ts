import { AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidator {

  public static emailFormat(c: AbstractControl) {
    // tslint:disable-next-line
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    return EMAIL_REGEXP.test(c.value) ? null : {'emailFormat': true};
  }

  public static urlFormat(c: AbstractControl) {
    // tslint:disable-next-line
    let REGEXP = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return REGEXP.test(c.value) ? null : {'url': true};
  }

  public static phoneFormat(c: AbstractControl) {
    // tslint:disable-next-line
    let REGEXP = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
    return REGEXP.test(c.value) ? null : {'phoneFormat': true};
  }

  // refs Minimum 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet and 1 Number:
  public static passwordCheck(c: AbstractControl) {
    let PASS_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i;
    return PASS_REGEXP.test(c.value) ? null : {'passwordCheck': true};
  }

  public static passwordsEqual(firstField: string, secondField: string) {
    return (c: FormGroup) => {
      // tslint:disable-next-line
      return (c.controls && c.controls[firstField].value == c.controls[secondField].value) ? null : {'passwordsEqual': true};
    };
  }

  /**
   (                   # Start of group
   (?=.*\d)        #   must contain at least one digit
   (?=.*[a-z])     #   must contain at least one lowercase character
   (?=.*[A-Z])     #   must contain at least one uppercase character
   (?=.*\W)        #   must contain at least one special symbol
   .            #     match anything with previous condition checking
   {8,8}      #        length at least 8 characters and also maximum of 8
   )                   # End of group
   */
  public static lowercaseUppercase(c: AbstractControl) {
    let REGEXP = /(?=.*[a-z])(?=.*[A-Z])/;
    return REGEXP.test(c.value) ? null : {'lowercaseUppercase': true};
  }

  public static specialSymbol(c: AbstractControl) {
    let REGEXP = /(?=.*\W)/;
    return REGEXP.test(c.value) ? null : {'specialSymbol': true};
  }

  public static number(c: AbstractControl) {
    let REGEXP = /(?=.*\d)/;
    return REGEXP.test(c.value) ? null : {'number': true};
  }

  public static specialSymbolOrNumber(c: AbstractControl) {
    let REGEXP = /(?=.*\d)|(?=.*\W)/;
    return REGEXP.test(c.value) ? null : {'specialSymbolOrNumber': true};
  }

  public static isPresent(obj: any): boolean {
    return obj !== undefined && obj !== null;
  }
}
