# Get user appointments

Get list of appointment times for a user

**URL** : `/appointments/:userId`

**Method** : `GET`

## Success Response

**Code** : `200 Okay`

**Content examples**

For a User with ID 3 on the local database with two appointments

```json
{
  "appointments": ["2020-12-05T11:00:00.000Z", "2020-12-05T04:00:00.000Z"]
}
```

## Failure Response

**Code** : `404 Not Found`

**Content examples**

For a user with ID 9 that does not exist in the local database

```json
{
  "message": "user with id 9 does not exist"
}
```

## Notes

- The data is stored in local memory, so data will not be persisted when the app is restarted
- All date/time responses are in UTC.
