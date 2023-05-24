import React, { useState } from "react";
import { formatPhoneNumber } from "../../helpers/phoneInputMask";
import {
   validateFirstName,
   validateLastName,
   validateBirthDate,
   validatePhone,
   validateWebsite,
   validateAbout, 
   validateStack,
   validateLastProject,
  } from "../../helpers/validators";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import './form.css'


const InitialState = {
  firstName: '',
  lastName: '',
  birthDate: '',
  phone: '',
  website: '',
  about: '',
  stack: '',
  lastProject: '',
  characterCount: {
    about: 0,
    stack: 0,
    lastProject: 0
  },
  errors: {
    firstName: '',
    lastName: '',
    birthDate: '',
    phone: '',
    website: '',
    about: '',
    stack: '',
    lastProject: ''
  },
  isSubmited: false,
};

const Form = () => {
  const [state, setState] = useState({...InitialState});

  const handleChange = (event) => {
    const { name, value } = event.target;
    const { characterCount } = state;
    const updatedCharacterCount = { ...characterCount, [name]: value.length };
    setState(prevState => ({
      ...prevState,
      [name]: value,
      characterCount: updatedCharacterCount
    }));
  };

  const handleCancel = () => {
    setState({ ...InitialState });
  };

  const handlePhoneChange = (event) => {
    const { value } = event.target;
    const formattedValue = formatPhoneNumber(value);

    const maxLength = 12;
    const slicedValue = formattedValue.slice(0, maxLength);

    setState(prevState => ({
      ...prevState,
      phone: slicedValue
    }));
  };

  const validateForm = () => {
    const {
      firstName,
      lastName,
      birthDate,
      phone,
      website,
      about,
      stack,
      lastProject,
      characterCount,
    } = state;

    const errors = { ...InitialState.errors };

    Object.assign(errors, validateFirstName(firstName));
    Object.assign(errors, validateLastName(lastName));
    Object.assign(errors, validateBirthDate(birthDate));
    Object.assign(errors, validatePhone(phone));
    Object.assign(errors, validateWebsite(website));
    Object.assign(errors, validateAbout(about, characterCount));
    Object.assign(errors, validateStack(stack, characterCount));
    Object.assign(errors, validateLastProject(lastProject, characterCount));

    setState(prevState => ({
      ...prevState,
      errors
    }));

    const hasErrors = Object.keys(errors).length > 0;
    if (!hasErrors) {
      setState(prevState => ({
        ...prevState,
        isSubmited: true
      }));

      return {
        firstName,
        lastName,
        birthDate,
        phone,
        website,
        about,
        stack,
        lastProject,
      };
    } else {
      return {};
    }
  };

  const handleSubmit = (event) => {
    const { isSubmited } = state;
    event.preventDefault();
    if (!isSubmited) {
      const formData = validateForm();
      if (formData) {
        setState(prevState => ({
          ...prevState,
          isSubmited: true,
          ...formData
        }));
      }
    }  
  };

  const {
    firstName,
    lastName,
    birthDate,
    phone,
    website,
    about,
    stack,
    lastProject,
    characterCount,
    errors,
    isSubmited
  } = state;

  if (isSubmited) {
    return (
      <div>
        <ProfileInfo
          firstName={firstName}
          lastName={lastName}
          birthDate={birthDate}
          phone={phone}
          website={website}
          about={about}
          stack={stack}
          lastProject={lastProject}
        />
      </div>
    );
  } else {
    return (
      <form action="" className="form" onSubmit={handleSubmit}>
        <h2 className="form-title">Создание анкеты</h2>

        <Input
          name="firstName"
          value={firstName}
          onChange={handleChange}
          labelText="Имя"
          type="text"
          placeholder="Введите имя"
          errors={errors.firstName || ""}
        />

        <Input
          name="lastName"
          value={lastName}
          onChange={handleChange}
          labelText="Фамилия"
          type="text"
          placeholder="Введите фамилию"
          errors={errors.lastName || ""}
        />

        <Input
          name="birthDate"
          value={birthDate}
          onChange={handleChange}
          labelText="Дата рождения"
          type="date"
          placeholder=""
          errors={errors.birthDate || ""}
        />

        <Input
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
          labelText="Номер телефона"
          type="text"
          placeholder="Введите номер телефона"
          errors={errors.phone || ""}
        />

        <Input
          name="website"
          value={website}
          onChange={handleChange}
          labelText="Сайт"
          type="text"
          placeholder="Введите сайт"
          errors={errors.website || ""}
        />

        <TextArea
          name="about"
          labelText="О себе"
          value={about}
          onChange={handleChange}
          placeholder="Введите информацию о себе"
          errors={errors.about || ""}
          characterCount={characterCount}
        />

        <TextArea
          name="stack"
          labelText="Стек технологий"
          value={stack}
          onChange={handleChange}
          placeholder="Введите стек технологий"
          errors={errors.stack || ""}
          characterCount={characterCount}
        />

        <TextArea
          name="lastProject"
          labelText="Последний проект"
          value={lastProject}
          onChange={handleChange}
          placeholder="Введите информацию о последнем проекте"
          errors={errors.lastProject || ""}
          characterCount={characterCount}
        />

        <div className="buttons">
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Отмена
          </button>
          <button type="submit" className="submit-button">
            Сохранить
          </button>
        </div>

      </form>
    );
  }

};

export default Form;