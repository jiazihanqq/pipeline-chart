export const toHMS = (date: number) => {
  const hours = parseInt(
    String((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = parseInt(String((date % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = parseInt(String(date % (1000 * 60) / 1000));
  return `${hours < 10 ? "0" + hours : hours}:
    ${minutes < 10 ? "0" + minutes : minutes}:
    ${seconds < 10 ? "0" + seconds : seconds}`;
};
