export const validate = (formData, characterCount) => {
  const nameRegex = /^[A-ZА-ЯЁ].*$/;
  const websiteRegex = /^https:\/\/.+/;

  const errors = {};

  if (!formData.firstName.trim()) {
    errors.firstName = 'Поле пустое. Заполните, пожалуйста';
  } else if (!nameRegex.test(formData.firstName)) {
    errors.firstName = 'Первая буква должна быть заглавной';
  }

  if (!formData.lastName.trim()) {
    errors.lastName = 'Поле пустое. Заполните, пожалуйста';
  } else if (!nameRegex.test(formData.lastName)) {
    errors.lastName = 'Первая буква должна быть заглавной';
  }

  if (!formData.birthDate.trim()) {
    errors.birthDate = 'Поле пустое. Заполните, пожалуйста';
  }

  if (!formData.phone.trim()) {
    errors.phone = 'Поле пустое. Заполните, пожалуйста';
  } else if (formData.phone.length !== 12) {
    errors.phone = 'Неверный формат номера телефона';
  }

  if (!formData.website.trim()) {
    errors.website = 'Поле пустое. Заполните, пожалуйста.';
  } else if (!websiteRegex.test(formData.website)) {
    errors.website = 'Неверный формат сайта';
  }

  if (!formData.about.trim()) {
    errors.about = 'Поле пустое. Заполните, пожалуйста';
  } else if (characterCount.about > 600) {
    errors.about = 'Превышен лимит символов в поле';
  }

  if (!formData.stack.trim()) {
    errors.stack = 'Поле пустое. Заполните, пожалуйста';
  } else if (characterCount.stack > 600) {
    errors.stack = 'Превышен лимит символов в поле';
  }

  if (!formData.lastProject.trim()) {
    errors.lastProject = 'Поле пустое. Заполните, пожалуйста';
  } else if (characterCount.lastProject > 600) {
    errors.lastProject = 'Превышен лимит символов в поле';
  }

  return errors;
};
