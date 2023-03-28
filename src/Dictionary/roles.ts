// const ROLES = {
//   1: {
//     slug: 'administrator',
//     name: 'Администратор',
//   },
//   2: {
//     slug: 'moderator',
//     name: 'Модератор',
//   },
//   3: {
//     slug: 'worker',
//     name: 'Специалист',
//   },
//   4: {
//     slug: 'user',
//     name: 'Клиент',
//   },
// };

import ROUTES from './routes';

export const ROLES = {
  ADMIN: 1,
  MODERATOR: 2,
  WORKER: 3,
  USER: 4,
};

export const PERMISSIONS = {
  CAN_ACCESS_SETTINGS: 1000,
  CAN_ACCESS_USERS: 1001,
  CAN_ACCESS_SCHEDULE: 1002,
  CAN_ACCESS_APPOINTMENTS: 1003,
  CAN_ACCESS_SPECIAL_SCHEDULE: 1004,
  CAN_ADD_WORKER: 1005,
  CAN_ADD_MODERATOR: 1006,
  CAN_ADD_USER: 1007,
};

export const NAMES = {
  [ROLES.ADMIN]: 'Администратор',
  [ROLES.MODERATOR]: 'Модератор',
  [ROLES.WORKER]: 'Специалист',
  [ROLES.USER]: 'Клиент',
};

export const SLUGS = {
  [ROLES.ADMIN]: 'administrator',
  [ROLES.MODERATOR]: 'moderator',
  [ROLES.WORKER]: 'worker',
  [ROLES.USER]: 'user',
};

export interface ILinks {
  USER: object;
  WORKER: object;
  ADMIN: object;
  MODERATOR: object;
}

export const LINKS = {
  USER: {
    [`${ROUTES.home()}`]: 'Запись на приём',
    [`${ROUTES.appointments()}`]: 'Приёмная',
    [`${ROUTES.settings()}`]: 'Настройки',
  },
  WORKER: {
    [`${ROUTES.specialistSchedule()}`]: 'Расписание',
    [`${ROUTES.planning()}`]: 'Планирование',
    [`${ROUTES.settings()}`]: 'Настройки',
  },
  ADMIN: {
    [`${ROUTES.users()}`]: 'Пользователи',
    [`${ROUTES.settings()}`]: 'Настройки',
  },
  MODERATOR: {
    [`${ROUTES.users()}`]: 'Пользователи',
    [`${ROUTES.settings()}`]: 'Настройки',
  },
};

export const getPermissions = {
  [ROLES.ADMIN]: [
    PERMISSIONS.CAN_ACCESS_USERS,
    PERMISSIONS.CAN_ACCESS_SETTINGS,
    PERMISSIONS.CAN_ADD_MODERATOR,
    PERMISSIONS.CAN_ADD_WORKER,
    PERMISSIONS.CAN_ADD_USER,
  ],
  [ROLES.MODERATOR]: [
    PERMISSIONS.CAN_ACCESS_USERS,
    PERMISSIONS.CAN_ACCESS_SETTINGS,
    PERMISSIONS.CAN_ADD_WORKER,
    PERMISSIONS.CAN_ADD_USER,
  ],
  [ROLES.WORKER]: [
    PERMISSIONS.CAN_ACCESS_SETTINGS,
    PERMISSIONS.CAN_ACCESS_SPECIAL_SCHEDULE,
    PERMISSIONS.CAN_ACCESS_SCHEDULE,
    PERMISSIONS.CAN_ACCESS_APPOINTMENTS,
  ],
  [ROLES.USER]: [
    PERMISSIONS.CAN_ACCESS_SETTINGS,
    PERMISSIONS.CAN_ACCESS_SCHEDULE,
    PERMISSIONS.CAN_ACCESS_APPOINTMENTS,
  ],
};
