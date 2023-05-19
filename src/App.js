import { Component } from 'react';
import './App.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  onChange = (event) => {
    const { name, value } = event.target;
    const { characterCount } = this.state;
    const updatedCharacterCount = { ...characterCount, [name]: value.length };
    this.setState({ [name]: value, characterCount: updatedCharacterCount });
  }

  handleCancel = () => {
    this.setState({
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
    });
  }

  // input mask
  handlePhoneChange = (event) => {
    const {value} = event.target;
    const formattedValue = value
                          .replace(/\D/g, '')
                          .replace(/(\d)(\d{4})(\d{2})(\d{2})/, '$1-$2-$3-$4');
    this.setState({
      phone: formattedValue,
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
      characterCount
    } = this.state;

    const errors = {};
    const nameRegex = /^[A-ZА-ЯЁ].*$/;

    if (!firstName.trim()) {
      errors.firstName = 'Поле пустое. Заполните, пожалуйста';
    } else if (!nameRegex.test(firstName)) {
      errors.firstName = 'Первая буква должна быть заглавной';
    }

    if (!lastName.trim()) {
      errors.lastName = 'Поле пустое. Заполните, пожалуйста';
    } else if (!nameRegex.test(lastName)) {
      errors.lastName = 'Первая буква должна быть заглавной';
    }

    if (!birthDate.trim()) {
      errors.birthDate = 'Поле пустое. Заполните, пожалуйста';
    }


    if (!phone.trim()) {
      errors.phone = 'Поле пустое. Заполните, пожалуйста';
    }
     else if (phone.length !== 12) {
      errors.phone = 'Неверный формат номера телефона';
    }

    const websiteRegex = /^https:\/\/.+/;

    if (!website.trim()) {
      errors.website = 'Поле пустое. Заполните, пожалуйста.';
    } else if (!websiteRegex.test(website)) {
      errors.website = 'Неверный формат сайта'
    }

    if (!about.trim()) {
      errors.about = 'Поле пустое. Заполните, пожалуйста';
    } else if (characterCount.about > 600) {
      errors.about = 'Превышен лимит символов в поле'
    }

    if (!stack.trim()) {
      errors.stack = 'Поле пустое. Заполните, пожалуйста';
    } else if (characterCount.stack > 600) {
      errors.stack = 'Превышен лимит символов в поле'
    }

    if (!lastProject.trim()) {
      errors.lastProject = 'Поле пустое. Заполните, пожалуйста';
    } else if (characterCount.lastProject > 600) {
      errors.lastProject = 'Превышен лимит символов в поле'
    }

    this.setState({errors});

    // Проверка наличия ошибок валидации
    const hasErrors = Object.keys(errors).length > 0;
    if (!hasErrors) {
      this.setState({ isSubmited: true});
    }
  }

  handleSubmit = (event) => {
    const {isSubmited} = this.state;
    event.preventDefault();
    if (!isSubmited) {
      const formData = this.validateForm();
      if (formData) {
        this.setState({ isSubmited: true, ...formData });
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

    if(isSubmited) {
      //анкета после сохранения
      return (
        <div className='info'>
          <h2 className='info-title'>{firstName} {lastName}</h2>
          
          <div className='info-wrapper-short'>
            <p className='info-field-title-short'>Дата рождения:</p>
            <p className='info-field-short'>{birthDate}</p>
          </div>

          <div className='info-wrapper-short'>
            <p className='info-field-title-short'>Номер телефона: </p>
            <a className='info-field-short' href={`tel:${phone}`}>{phone}</a>
          </div>

          <div className='info-wrapper-short'>
            <p className='info-field-title-short'>Сайт:</p>
            <a className='info-field-short' href={website}>{website}</a>
          </div>

          <div className='info-wrapper'>
            <p className='info-field-title'>О себе:</p>
            <p className='info-field'>{about}</p>
          </div>
          
          <div className='info-wrapper'>
            <p className='info-field-title'>Стек технологий:</p>
            <p className='info-field'>{stack}</p>
          </div>
          
          <div className='info-wrapper'>
            <p className='info-field-title'>Описание последнего проекта:</p>
            <p className='info-field'>{lastProject}</p>
          </div>
        </div>
      );
    } else {
      //форма заполнения
      return (

        <form action="" className="form" onSubmit={this.handleSubmit
        }>
          <h2 className="form-title">Создание анкеты</h2>

          {/* имя */}

          <div className={`form-group ${errors.firstName ? 'error' : ''}`}>
            <label htmlFor="firstName">Имя:</label>
            <input type="text" id='firstName' name='firstName' value={firstName} onChange={this.onChange} placeholder='Введите имя'/>
            {errors.firstName && <span className='error-message'>{errors.firstName}</span>}
          </div>

          {/* фамилия */}

          <div className={`form-group ${errors.lastName ? 'error' : ''}`}>
            <label htmlFor="lastName">Фамилия:</label>
            <input type="text" id='lastName' name='lastName' value={lastName} onChange={this.onChange} placeholder='Введите фамилию'/>
            {errors.lastName && <span className='error-message'>{errors.lastName}</span>}
          </div>

          {/* др */}

          <div className={`form-group ${errors.birthDate ? 'error' : ''}`}>
            <label htmlFor="birthDate">Дата рождения:</label>
            <input type="date" id='birthDate' name='birthDate' value={birthDate} onChange={this.onChange} placeholder='' />
            {errors.birthDate && <span className='error-message'>{errors.birthDate}</span>}
          </div>

          {/* телефон */}

          <div className={`form-group ${errors.phone ? 'error' : ''}`}>
            <label htmlFor="phone">Номер телефона:</label>
            <input type="text" id='phone' name='phone' value={phone} onChange={this.handlePhoneChange} placeholder='Введите номер телефона' />
            {errors.phone && <span className='error-message'>{errors.phone}</span>}
          </div>

          {/* сайт */}

          <div className={`form-group ${errors.website ? 'error' : ''}`}>
            <label htmlFor="website">Сайт:</label>
            <input type="url" id='website' name='website' value={website} onChange={this.onChange} placeholder='Введите сайт' />
            {errors.website && <span className='error-message'>{errors.website}</span>}
          </div>

          {/* о себе */}

          <div className={`form-group ${errors.about ? 'error' : ''}`}>
            <label htmlFor="about">О себе:</label>
            <textarea name="about" id="about" rows="7" value={about} onChange={this.onChange} placeholder='Расскажите о себе'></textarea>
            <div className='under-textarea-wrapper'>
              {errors.about && <span className='error-message'>{errors.about}</span>}
              <span className='character-count'>
                {characterCount.about}/600 символов
              </span>
            </div>
          </div>

          {/* стек технологий */}

          <div className={`form-group ${errors.stack ? 'error' : ''}`}>
            <label htmlFor="stack">Стек технологий:</label>
            <textarea name="stack" id="stack" rows="7" value={stack} onChange={this.onChange} placeholder='Перечислите используемые технологии'></textarea>
            <div className='under-textarea-wrapper'>
              {errors.stack && <span className='error-message'>{errors.stack}</span>}
              <span className='character-count'>
                {characterCount.stack}/600 символов
              </span>
            </div>
          </div>

          {/* описание последнего проекта */}

          <div className={`form-group ${errors.lastProject ? 'error' : ''}`}>
            <label htmlFor="lastProject">Описание последнего проекта:</label>
            <textarea name="lastProject" id="lastProject" rows="7" value={lastProject} onChange={this.onChange} placeholder='Опишите последний проект'></textarea>
            <div className='under-textarea-wrapper'>
            {errors.lastProject && <span className='error-message'>{errors.lastProject}</span>}
              <span className='character-count'>
                {characterCount.lastProject}/600 символов
              </span>
            </div>
          </div>

          {/* кнопки */}

          <div className="buttons">
            <button type='button' className='cancel-button' onClick={this.handleCancel}>Отмена</button>
            <button type='button' className='submit-button' onClick={this.handleSubmit}>Сохранить</button>
          </div>
        </form>
      )
    }
  }
}
export default Form;
