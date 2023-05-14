import { Component } from 'react';
import './Form.css';

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
      lastProject: ''
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
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
      lastProject: ''
    });
  }

  render() {
    return (
      <form action="" className="form">
        <h2 className="form-title">Создание анкеты</h2>

        {/* имя */}

        <div className="form-group">
          <label htmlFor="firstName">Имя:</label>
          <input type="text" id='firstName' name='firstName' value={this.state.firstName} onChange={this.onChange} placeholder='Введите имя'/>
        </div>

        {/* фамилия */}

        <div className="form-group">
          <label htmlFor="lastName">Фамилия:</label>
          <input type="text" id='lastName' name='lastName' value={this.state.lastName} onChange={this.onChange} placeholder='Введите фамилию'/>
        </div>

        {/* др */}

        <div className="form-group">
          <label htmlFor="birthDate">Дата рождения:</label>
          <input type="date" id='birthDate' name='birthDate' value={this.state.birthDate} onChange={this.onChange} placeholder='' />
        </div>

        {/* телефон */}

        <div className="form-group">
          <label htmlFor="phone">Номер телефона:</label>
          <input type="tel" id='phone' name='phone' value={this.state.phone} onChange={this.onChange} placeholder='Введите номер телефона' />
        </div>

        {/* сайт */}

        <div className="form-group">
          <label htmlFor="website">Сайт:</label>
          <input type="url" id='website' name='website' value={this.state.website} onChange={this.onChange} placeholder='Введите сайт' />
        </div>

        {/* о себе */}

        <div className="form-group">
          <label htmlFor="about">О себе:</label>
          <textarea name="about" id="about" rows="7" value={this.state.about} onChange={this.onChange} placeholder='Расскажите о себе'></textarea>
        </div>

        {/* стек технологий */}

        <div className="form-group">
          <label htmlFor="stack">Стек технологий:</label>
          <textarea name="stack" id="stack" rows="7" value={this.state.stack} onChange={this.onChange} placeholder='Перечислите используемые технологии'></textarea>
        </div>

        {/* описание последнего проекта */}

        <div className="form-group">
          <label htmlFor="lastProject">Описание последнего проекта:</label>
          <textarea name="lastProject" id="lastProject" rows="7" value={this.state.lastProject} onChange={this.onChange} placeholder='Опишите последний проект'></textarea>
        </div>

        {/* кнопки */}

        <div className="buttons">
          <button type='button' className='cancel-button' onClick={this.handleCancel}>Отмена</button>
          <button type='submit' className='submit-button' >Сохранить</button>
        </div>
      </form>
    )
  }
}
export default Form;
