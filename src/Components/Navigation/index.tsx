import { NavLink } from 'react-router-dom';
import { LINKS, ROLES, ILinks } from 'Dictionary/roles';
import React, { useEffect, useState } from 'react';

// const ICONS = {
//   [`${ROUTES.home()}`]: <ScheduleIcon width={25} height={21} />,
//   [`${ROUTES.appointments()}`]: <AppointmentsIcon width={28} height={25} />,
//   [`${ROUTES.settings()}`]: <SettingsIcon width={28} height={28} />,
//   [`${ROUTES.specialistSchedule()}`]: (
//     <SpecialistScheduleIcon width={28} height={28} />
//   ),
//   [`${ROUTES.users()}`]: <UsersIcon width={28} height={28} />,
//   [`${ROUTES.planning()}`]: <ScheduleIcon width={25} height={21} />,
// };

// TODO move to user state
const roles = [1, 2, 3, 4];

export default function Navigation() {
  const [links, setLinks] = useState({});

  function getRoleName(object: object, value: number) {
    return (
      (Object.keys(object) as (keyof typeof object)[]).find(
        (key) => object[key] === value
      ) || 'USER'
    );
  }

  function getNavLinks() {
    const availableLinks = {};
    roles
      .sort((a, b) => {
        return b - a;
      })
      .forEach((role) => {
        Object.assign(
          availableLinks,
          LINKS[getRoleName(ROLES, role) as keyof ILinks]
        );
      });
    return setLinks(availableLinks);
  }

  useEffect(() => {
    getNavLinks();
  }, []);

  return (
    <nav className="navigation">
      {Object.entries(links).map(([key, value]) => (
        <NavLink data-text={value} key={key} to={key}>
          {value as string}
        </NavLink>
      ))}
    </nav>
  );
}
