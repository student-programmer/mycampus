import * as Yup from 'yup';

const TYPEERROR_MSG = 'Number should be integer value';
const REQUIRED_MSG = 'This field is required';

const INVALID_MSG = 'Passwords must match!';

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

export const EditProfile = Yup.object({
    firstName: Yup.string().required(REQUIRED_MSG),
    lastName: Yup.string().required(REQUIRED_MSG),
    description: Yup.string().required(REQUIRED_MSG),
    birthDate: Yup.date().required(REQUIRED_MSG),
    sex: Yup.string().required(REQUIRED_MSG),
    languages: Yup.array().test('checkEmptyLanguages', REQUIRED_MSG, (value) => {
        return value?.length !== 0;
    }),
    interests: Yup.array().test('checkEmptyInterests', REQUIRED_MSG, (value) => {
        return value?.length !== 0;
    }),
    location: Yup.string().nullable(),
    countryId: Yup.number().required(REQUIRED_MSG),
    university: Yup.string().required(REQUIRED_MSG),
    studyDirection: Yup.string().required(REQUIRED_MSG),
    photo: Yup.string().nullable(),
    email: Yup.string().email().required(REQUIRED_MSG),
    password: Yup.string().required(REQUIRED_MSG),
    passwordRepeat: Yup.string()
        .required(REQUIRED_MSG)
        .test('comparePass', INVALID_MSG, (value, context) => {
            return value === context.parent?.password;
        }),
});