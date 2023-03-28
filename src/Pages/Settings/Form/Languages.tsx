import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';

const ALLOWED_LANGUAGES = {
  ua: 'Украинский',
  ru: 'Русский',
  pl: 'Польский',
};

export default function Languages() {
  const { register } = useFormContext();

  return (
    <div className="languages">
      <span> Выберите язык на котором вы хотите говорить:</span>
      <div className="languages__holder">
        {Object.entries(ALLOWED_LANGUAGES).map(([countryName, label]) => (
          <Fragment key={countryName}>
            <input
              id={countryName}
              hidden
              value={countryName}
              type="checkbox"
              {...register('langs')}
            />
            <label className="languages__holder-label" htmlFor={countryName}>
              {label}
            </label>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
