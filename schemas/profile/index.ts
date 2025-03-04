import * as Yup from 'yup';

const TYPEERROR_MSG = 'Number should be integer value';
const REQUIRED_MSG = 'This field is required';

export const profile = {
    firstName: Yup.string().required(REQUIRED_MSG),
    lastName: Yup.string().required(REQUIRED_MSG),
    university: Yup.string().required(REQUIRED_MSG),
    age: Yup.number().integer(TYPEERROR_MSG).required(REQUIRED_MSG),
    sex: Yup.string().required(REQUIRED_MSG),
    languages: Yup.array().required(REQUIRED_MSG),
    interests: Yup.array().required(REQUIRED_MSG),
    photo: Yup.string().required(REQUIRED_MSG),
    location: Yup.string().required(REQUIRED_MSG)
}