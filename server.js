const express = require('express');
const Database = require('./db');
const utils = require('./utils');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = new Database();
app.get('/', (req, res) => {
  res.send(
    'Success, the API is up and running! <br> Try hitting the appointment endpoints outlined in the README file'
  );
});
/**
 * GET appoinemnts/:userId. Returns list of appointment times for a user
 */
app.get('/appointments/:userId', (req, res) => {
  const userId = req.params.userId;
  try {
    const appointments = db.getAppointmentsForUser({ userId });
    res.status(200).json({
      appointments,
    });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});

/**
 * POST appointment. Used to add an appointment for a user
 * body = {userId, date, time}
 */
app.post('/appointment', (req, res) => {
  const { userId, date, time } = req.body;
  let addedAppointment;
  // assert request payload has required params
  if (!userId || !date || !time) {
    let errors = [];
    !userId && errors.push('userId');
    !date && errors.push('date');
    !time && errors.push('time');
    return res.status(400).json({
      success: 'false',
      message: `missing required parameters: ${errors.join(', ')}`,
    });
  }
  try {
    const [year, month, day] = date.split('-'); // 2020-12-30 -> year=2020, month=12, day=30
    const [hours, minutes] = time.split(':'); // 09:00 -> hours=9, minutes=0
    const properDate = utils.createDate({ year, month, day, hours, minutes });
    addedAppointment = db.addAppointment({
      userId,
      date: properDate,
    });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
  return res.status(201).json({
    message: 'user appointment scheduled successfully',
    data: addedAppointment,
  });
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000');
});
