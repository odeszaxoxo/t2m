import { nanoid } from 'nanoid';
import React, { useMemo, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import timeZones from 'Dictionary/zones';
import TimezoneTicker from './Ticker';

const TimeZonesOptions = (props: { zones: string[] }) => {
  const { zones } = props;
  return (
    <>
      {zones.map((zone) => (
        <option key={zone} value={zone}>
          {zone}
        </option>
      ))}
    </>
  );
};

export default function Timezone() {
  const id = useRef(nanoid());
  const { register, watch } = useFormContext();
  const timeZoneWatcher = watch('timeZone');

  const TimeZones = useMemo(() => {
    const zones = timeZones;
    return <TimeZonesOptions zones={zones} />;
  }, []);

  return (
    <div className="timezone">
      <span>Часовой пояс</span>
      <label className="timezone__label" htmlFor={id.current}>
        {timeZoneWatcher}
      </label>
      <select id={id.current} {...register('timeZone')}>
        {TimeZones}
      </select>
      <TimezoneTicker currentValue={timeZoneWatcher} />
    </div>
  );
}
