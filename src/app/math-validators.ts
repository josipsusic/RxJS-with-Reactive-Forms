import { AbstractControl } from '@angular/forms';

export class MathValidators {
  // Static means that we dont have to create an instance of the class
  // to access the method
  // But these functions will not have access to any properties or instance
  // variables of the class, they will only use the arguments to the function
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const firstNumber = form.value[sourceOne];
      const secondNumber = form.value[sourceTwo];

      if (firstNumber + secondNumber === parseInt(sum)) {
        return null;
      }

      return { addition: true };
    };
  }
}
