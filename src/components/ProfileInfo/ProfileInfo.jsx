import React from 'react';
import './profileInfo.css';

const ProfileInfo = ({ firstName, lastName, birthDate, phone, website, about, stack, lastProject }) => {
  return (
    <div className="info">
      <h2 className="info-title">{firstName} {lastName}</h2>

      <div className="info-wrapper-short">
        <p className="info-field-title-short">Дата рождения:</p>
        <p className="info-field-short">{birthDate}</p>
      </div>

      <div className="info-wrapper-short">
        <p className="info-field-title-short">Номер телефона:</p>
        <a className="info-field-short" href={`tel:${phone}`}>{phone}</a>
      </div>

      <div className="info-wrapper-short">
        <p className="info-field-title-short">Сайт:</p>
        <a className="info-field-short" href={website}>{website}</a>
      </div>

      <div className="info-wrapper">
        <p className="info-field-title">О себе:</p>
        <p className="info-field">{about}</p>
      </div>

      <div className="info-wrapper">
        <p className="info-field-title">Стек технологий:</p>
        <p className="info-field">{stack}</p>
      </div>

      <div className="info-wrapper">
        <p className="info-field-title">Описание последнего проекта:</p>
        <p className="info-field">{lastProject}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
