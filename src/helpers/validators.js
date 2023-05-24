export const validateFirstName = (firstName) => {
  const nameRegex = /^[A-ZА-ЯЁ].*$/;
  const errors = {};

  if (!firstName.trim()) {
    errors.firstName = 'Поле пустое. Заполните, пожалуйста';
  } else if (!nameRegex.test(firstName)) {
    errors.firstName = 'Первая буква должна быть заглавной';
  }
  return errors;
};

export const validateLastName = (lastName) => {
  const nameRegex = /^[A-ZА-ЯЁ].*$/;
  const errors = {};

  if (!lastName.trim()) {
    errors.lastName = 'Поле пустое. Заполните, пожалуйста';
  } else if (!nameRegex.test(lastName)) {
    errors.lastName = 'Первая буква должна быть заглавной';
  }

  return errors;
}

export const validateBirthDate = (birthDate) => {
  const errors = {};

  if (!birthDate.trim()) {
    errors.birthDate = 'Поле пустое. Заполните, пожалуйста';
  }

  return errors;
}

export const validatePhone = (phone) => {
  const errors = {};

  if (!phone.trim()) {
    errors.phone = 'Поле пустое. Заполните, пожалуйста';
  }
   else if (phone.length !== 12) {
    errors.phone = 'Неверный формат номера телефона';
  }

  return errors;
}


export const validateWebsite = (website) => {
  const websiteRegex = /^https:\/\/.+/;
  const errors = {};

  if (!website.trim()) {
    errors.website = 'Поле пустое. Заполните, пожалуйста.';
  } else if (!websiteRegex.test(website)) {
    errors.website = 'Неверный формат сайта'
  }

  return errors;
}

export const validateAbout = (about, characterCount) => {
  const errors = {};

  if (!about.trim()) {
    errors.about = 'Поле пустое. Заполните, пожалуйста';
  } else if (characterCount.about > 600) {
    errors.about = 'Превышен лимит символов в поле'
  }

  return errors;
}

export const validateStack = (stack, characterCount) => {
  const errors = {};

  if (!stack.trim()) {
    errors.stack = 'Поле пустое. Заполните, пожалуйста';
  } else if (characterCount.stack > 600) {
    errors.stack = 'Превышен лимит символов в поле'
  }

  return errors;
}

export const validateLastProject = (lastProject, characterCount) => {
  const errors = {};

  if (!lastProject.trim()) {
    errors.lastProject = 'Поле пустое. Заполните, пожалуйста';
  } else if (characterCount.lastProject > 600) {
    errors.lastProject = 'Превышен лимит символов в поле'
  }
  return errors;
}