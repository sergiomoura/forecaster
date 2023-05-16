import { type JsonValidator } from '@/utils/JsonValidator/JsonValidator';
import { type ValidationResult } from '@/utils/JsonValidator/ValidationResult';
import Ajv from 'ajv';

export class AjvSchemaValidator implements JsonValidator {
  
  private readonly dateTimeRegex = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9])$/;
  private readonly ajv: Ajv;

  constructor () {

    this.ajv = new Ajv({
      discriminator: true,
      coerceTypes: true
    });

    this.ajv.addFormat('date-time', {
      validate: (dateTimeString) => this.dateTimeRegex.test(dateTimeString)
    });
  
  }

  validate (schema: Record<string, unknown>, data: any): ValidationResult {

    return {
      isValid: this.ajv.validate(schema, data),
      data: this.ajv.errors
    };
  
  }

}
