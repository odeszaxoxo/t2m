const ROUTES = {
  home: () => '/',
  signin: () => '/signin',
  schedule: () => '/schedule',
  settings: () => '/settings',
  appointments: () => '/appointments',
  specialistSchedule: () => '/specialist',
  users: () => '/users',
  planning: () => '/planning',
  video: (link = ':roomLink') => `/video/${link}`,
};

export default ROUTES;
