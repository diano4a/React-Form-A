import React, { Component } from "react";
import { formatPhoneNumber } from "../../helpers/phoneInputMask";
import { validate } from "../../helpers/validators";
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

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {...InitialState};
  }

  onChange = (event) => {
    const { name, value } = event.target;
    const { characterCount } = this.state;
    const updatedCharacterCount = { ...characterCount, [name]: value.length };
    this.setState({ [name]: value, characterCount: updatedCharacterCount });
  }

  handleCancel = () => {
    this.setState(InitialState);
  }

  handlePhoneChange = (event) => {
    const { value } = event.target;
    const formattedValue = formatPhoneNumber(value);

    const maxLength = 12;
    const slicedValue = formattedValue.slice(0, maxLength);

    this.setState({
      phone: slicedValue,
    })
  }

  validateForm = () => {
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
    } = this.state;

    const formData = {
      firstName,
      lastName,
      birthDate,
      phone,
      website,
      about,
      stack,
      lastProject,
    }

    const errors = validate(formData, characterCount);

    return errors;
  };

  handleSubmit = (event) => {
    const { isSubmited } = this.state;
    event.preventDefault();
    if (!isSubmited) {
      const errors = this.validateForm();
      if (Object.keys(errors).length === 0) {
        this.setState({ isSubmited: true });
      } else {
        this.setState({ errors });
      }
    }
  };

  render() {
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
    } = this.state;

    
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
        <form action='' className="form" onSubmit={this.handleSubmit}>
          
          <h2 className="form-title">Создание анкеты</h2>

          <Input
            name='firstName'
            value={firstName}
            onChange={this.onChange}
            labelText="Имя"
            type='text'
            placeholder='Введите имя'
            errors={errors.firstName || ''}
          />

          <Input
            name='lastName'
            value={lastName}
            onChange={this.onChange}
            labelText="Фамилия"
            type='text'
            placeholder='Введите фамилию'
            errors={errors.lastName || ''}
          />

          <Input
            name='birthDate'
            value={birthDate}
            onChange={this.onChange}
            labelText="Дата рождения"
            type='date'
            placeholder=''
            errors={errors.birthDate || ''}  
          />

          <Input
            name='phone'
            value={phone}
            onChange={this.handlePhoneChange}
            labelText="Номер телефона"
            type='text'
            placeholder='Введите номер телефона'
            errors={errors.phone || ''} 
          />
          
          <Input
            name='website'
            value={website}
            onChange={this.onChange}
            labelText='Сайт'
            type='text'
            placeholder='Введите сайт'
            errors={errors.website || ''}
          />

          <TextArea
            name='about'
            labelText='О себе'
            value={about}
            onChange={this.onChange}
            placeholder='Введите информацию о себе'
            errors={errors.about || ''}
            characterCount={characterCount}
          />

          <TextArea
            name='stack'
            labelText='Стек технологий'
            value={stack}
            onChange={this.onChange}
            placeholder='Введите стек технологий'
            errors={errors.stack || ''}
            characterCount={characterCount}
          />

          <TextArea
            name='lastProject'
            labelText='Последний проект'
            value={lastProject}
            onChange={this.onChange}
            placeholder='Введите информацию о последнем проекте'
            errors={errors.lastProject || ''}
            characterCount={characterCount}
          />


          <div className="buttons">
            <button type="button" className="cancel-button" onClick={this.handleCancel}>
              Отмена
            </button>
            <button type="submit" className="submit-button">
              Сохранить
            </button>
          </div>
        </form>
      )
    }
    
  }

}

export default Form;