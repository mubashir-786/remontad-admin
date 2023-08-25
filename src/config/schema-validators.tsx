import * as yup from 'yup';

const STRING_TYPE = yup.string();
const NUMBER_TYPE = yup.number();
export const CUSTOMER_FORM_SCHEMA = () =>
  yup.object({
    company_name: STRING_TYPE.required('REQUIRED COMPANY NAME'),
    website: STRING_TYPE.required('REQUIRED WEBSITE'),
    email: STRING_TYPE.required('REQUIRED EMAIL').email('ENTER VALID EMAIL'),
    number: NUMBER_TYPE.required('REQUIRED NUMBER'),
    contact_person: NUMBER_TYPE.required('REQUIRED CONTACT'),
    address: STRING_TYPE.required('REQUIRED ADDRESS'),
    country: STRING_TYPE.required('REQUIRED COUNTRY'),
  });
