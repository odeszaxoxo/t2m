import React from 'react';
import { useFormContext } from 'react-hook-form';
import MaleIcon from 'Icons/MaleIcon';
import FemaleIcon from 'Icons/FemaleIcon';

export default function Avatar() {
  const { register } = useFormContext();
  return (
    <div className="avatar">
      <span>Аватар</span>
      <div className="avatar__holder">
        <input
          id="male"
          hidden
          type="radio"
          value="1"
          {...register('gender')}
        />
        <label className="avatar__label" htmlFor="male">
          <MaleIcon width={50} height={50} />
        </label>
        <input
          id="female"
          hidden
          type="radio"
          value="2"
          {...register('gender')}
        />
        <label className="avatar__label" htmlFor="female">
          <FemaleIcon width={50} height={50} />
        </label>
      </div>
    </div>
  );
}
