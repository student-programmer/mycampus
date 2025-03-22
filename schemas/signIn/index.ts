import * as Yup from 'yup';

const REQUIRED_MSG = 'This field is required';
const EMAIL_MSG = 'Invalid type of email!';
const INVALID_MSG = 'Passwords must match!';

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
    firstName: Yup.string().required(REQUIRED_MSG),
    lastName: Yup.string().required(REQUIRED_MSG),
    description: Yup.string().required(REQUIRED_MSG),
    birthDate: Yup.date().required(REQUIRED_MSG),
    sex: Yup.string().required(REQUIRED_MSG),
    languages: Yup.array().required(REQUIRED_MSG),
    interests: Yup.array().required(REQUIRED_MSG),
    location: Yup.string().required(REQUIRED_MSG),
    university: Yup.string().required(REQUIRED_MSG),
    photo: Yup.string().required(REQUIRED_MSG),
    email: Yup.string().email().required(REQUIRED_MSG),
    password: Yup.string().required(REQUIRED_MSG),
    passwordRepeat: Yup.string()
        .required(REQUIRED_MSG)
        .test('comparePass', INVALID_MSG, (value, context) => {
            return value === context.parent?.password;
        }),
});