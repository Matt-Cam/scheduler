/**
 * Are two dates on the same day
 * @param {date1} date1
 * @param {date2} date2
 */
const datesAreOnSameDay = (date1, date2) => {
  const sameYear = date1.getFullYear() === date2.getFullYear();
  const sameMonth = date1.getMonth() === date2.getMonth();
  const sameDay = date1.getDate() === date2.getDate();
  return sameYear && sameMonth && sameDay;
};

/**
 * Creates and returns a UTC date
 * @param {number} year
 * @param {number} month this should be 0 indexed, so January is represented as 0
 * @param {number} day
 * @param {number} hours
 * @param {number} minutes
 */
const createDate = ({ year, month, day, hours, minutes }) => {
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}Z`;

  return new Date(formattedDate);
};

module.exports = { datesAreOnSameDay, createDate };
