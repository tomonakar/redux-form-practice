export const validate = () => {
  let errors = {};
  return errors;
};

const ErrorMessages = {
  required: '入力必須です。',
  email: 'Emailの形式が正しくありません。',
  num: '半角数字で入力してください。',
  password: '英字、数字、記号を組み合わせた8文字以上で入力してください。',
  minNumber: '入力値が少なすぎます。４文字以上で入力してください。',
  maxNumber: '入力値の上限を超えています。',
};

const Regex = {
  email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  num: /^[0-9]+$/,
  password: /^(?=.*?[a-zA-Z])(?=.*?\d)[a-zA-Z\d]{8,}$/,
};

export const required = value => (
  value ? undefined : ErrorMessages.required
);

export const email = value => (
  value && !Regex.email.test(value) ? ErrorMessages.email : undefined
);

export const num = value => (
  value && !Regex.num.test(value) ? ErrorMessages.num : undefined
);

export const password = value => (
  value && !Regex.password.test(value) ? ErrorMessages.password : undefined
);
