const { API_BASE } = process.env;

const api = {
  quizRegistration: () => `${API_BASE}/lead-iphone`,
  timeSlots: () => `${API_BASE}/lead-iphone/check-free`,
  raffleRegistration: () => `${API_BASE}/lead-sweat`,
  dictionary: () => `${API_BASE}/dictionary`,
};

export default { api };
