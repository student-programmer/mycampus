import * as Yup from 'yup';

const REQUIRED_MSG = 'field is required!';
const EMAIL_MSG = 'incorrect e-mail!';

export const SignInSchema = Yup.object({
    email: Yup.string()
        .email(EMAIL_MSG)
        .required(REQUIRED_MSG),
    password: Yup.string().required(REQUIRED_MSG),
});


export const BusinessSchema = Yup.object({
    companyName: Yup.string().required(REQUIRED_MSG),
    email: Yup.string()
        .email(EMAIL_MSG)
        .required(REQUIRED_MSG),
    password: Yup.string().required(REQUIRED_MSG),
});

export const SignUpSchema = Yup.object({
    fullName: Yup.string().required(REQUIRED_MSG),
    university: Yup.string().required(REQUIRED_MSG),
    age: Yup.string().required(REQUIRED_MSG),
    sex: Yup.string().required(REQUIRED_MSG),
    languages: Yup.array().required(REQUIRED_MSG),
    interests: Yup.string().required(REQUIRED_MSG),
    photo: Yup.string().required(REQUIRED_MSG),
    location: Yup.string().required(REQUIRED_MSG)
});