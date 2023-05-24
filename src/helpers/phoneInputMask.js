export const formatPhoneNumber = (phoneNum) => {
  return phoneNum
    .replace(/\D/g, '')
    .replace(/(\d)(\d{4})(\d{2})(\d{2})/, '$1-$2-$3-$4');
};