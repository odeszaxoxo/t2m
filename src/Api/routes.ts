const API_BASE = process.env.REACT_APP_API;

const api = {
  getCode: () => `${API_BASE}/api/auth/getCode`,
  sendCode: () => `${API_BASE}/api/auth/withCode`,
  updateSettings: () => `${API_BASE}/api/auth/update`,
  authJWT: () => `${API_BASE}/api/auth/withJWT`,
  getFreeSlots: () => `${API_BASE}/api/slots/getFree`,
  addSlot: () => `${API_BASE}/api/slots/addSlot`,
  useSlot: () => `${API_BASE}/api/slots/useSlot`,
  removeSlot: () => `${API_BASE}/api/slots/removeSlot`,
  getUsers: () => `${API_BASE}/api/users/getList`,
  addRole: () => `${API_BASE}/api/users/addRole`,
  removeRole: () => `${API_BASE}/api/users/removeRole`,
  me: () => `${API_BASE}/api/auth/getUserData`,
  getSpecialistSlots: () => `${API_BASE}/api/slots/getList`,
};

export default api;
