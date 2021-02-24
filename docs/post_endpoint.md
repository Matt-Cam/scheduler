# Show Current User

Schedule an appointment for a user

**URL** : `/appointment`

**Method** : `POST`

**Request Body constraints**

```json
{
  "userId": "[any integer]",
  "date": "[date in the form of YYYY-MM-DD]",
  "time": "[time in the form of HH:MM]"
}
```

**Request Body example**

```json
{
  "userId": "4",
  "date": "2020-12-05",
  "time": "11:10"
}
```

## Success Response

**Code** : `201 Created`

**Content examples**

For a User with ID 3 on the local database where that User has no other appointments scheduled on the requested day, the response would be something like:

```json
{
  "message": "user appointment scheduled successfully",
  "data": {
    "userId": "3",
    "date": "2020-12-05T11:00:00.000Z"
  }
}
```

## Failure Response

**Code** : `400 Bad Request`

**Content examples**

For a user with ID 3 on the local database where that user has a conflicting appointment (appointment on same day as requested appointment)

```json
{
  "message": "user 3 already has an appointment on this day 12/5/2020"
}
```

For a requested appointment time that does not land on the half hour or hour

```json
{
  "message": "apppointments can only be made on 30 minute intervals on the hour or half-hour"
}
```

## Notes

- An appointment cannot be made for the same user on the same day
- Multiple appointments can be made at the same time for different users
- Appointments can only be made on hour/half-hour intervals
- All date/time request bodies are expected to be in UTC.
