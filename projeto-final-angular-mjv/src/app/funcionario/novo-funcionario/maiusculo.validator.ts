import { AbstractControl} from "@angular/forms";

export function maiusculoValidator(control : AbstractControl){

  const valor= control.value as string;

  if (valor!==valor.toUpperCase()) {
    return {maiusculo: true};
  } else {
    return null;
  }
}
