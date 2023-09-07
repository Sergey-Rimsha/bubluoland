import * as Yup from 'yup';

export const loginFormSchema = Yup.object().shape({
  identifier: Yup.string().required('Поле не может быть пустым'),
  password: Yup.string().required('Поле не может быть пустым'),
});
