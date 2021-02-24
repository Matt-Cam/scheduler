const utils = require('./utils');
class Database {
  constructor() {
    // userAppointments will be a dictionary with userId keys which hold appointment array properties
    this.usersAppointments = {};
  }

  /**
   * Get a list of appointment dates for a user
   * @param {number} userId - A userId
   */
  getAppointmentsForUser({ userId }) {
    if (userId in this.usersAppointments) {
      return this.usersAppointments[userId].appointments;
    } else {
      throw new Error(`user with id ${userId} does not exist`);
    }
  }

  /**
   *
   * @param {number} userId A userId
   * @param {Date} date A javascript date
   */
  addAppointment({ userId, date }) {
    // all appointments must start and end on the hour and half-hour
    if (date.getMinutes() !== 0 && date.getMinutes() !== 30) {
      throw new Error(
        'apppointments can only be made on 30 minute intervals on the hour or half-hour'
      );
    }
    if (this.userHasAppointmentOnDay({ userId, date })) {
      throw new Error(
        `user ${userId} already has an appointment on this day ${
          date.getMonth() + 1
        }/${date.getDate()}/${date.getFullYear()}`
      );
    }

    if (!(userId in this.usersAppointments)) {
      this.usersAppointments[userId] = { appointments: [] };
    }
    this.usersAppointments[userId].appointments.push(date);
    return {
      userId,
      date,
    };
  }

  /**
   * Returns whether there is already a scheduled appointment for this user on a certain date
   * @param {number} userId A userId
   * @param {Date} date A javascript date
   */
  userHasAppointmentOnDay({ userId, date }) {
    let sameDayAppointmentExists = false;
    if (!(userId in this.usersAppointments)) {
      return false;
    }

    this.usersAppointments[userId].appointments.forEach((appointment) => {
      if (utils.datesAreOnSameDay(appointment, date)) {
        sameDayAppointmentExists = true;
        // break out of loop, we found a date that exists on the passed in date
        return;
      }
    });
    return sameDayAppointmentExists;
  }
}

module.exports = Database;
