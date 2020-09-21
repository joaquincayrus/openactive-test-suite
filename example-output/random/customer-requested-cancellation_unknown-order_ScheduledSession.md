[< Return to Summary](summary.md) | File Generated: Mon Sep 21 2020 21:39:11 GMT+0000 (Coordinated Universal Time)

# customer-requested-cancellation >> unknown-order (ScheduledSession)

Feature Implemented: true

Runs Order Cancellation for a non-existent Order (with a fictional UUID), expecting an UnknownOrderError error to be returned

---

✅ 1 passed with 0 failures, 0 warnings and 0 suggestions 

---


## UnknownOrderError for Customer Requested Cancellation

### U Request
PATCH https://localhost:5001/api/openbooking/orders/5aca2833-3862-5791-873b-e9d139ef01b9

---

Response status code: 404 Not Found. Responded in 70.267747ms
```json
{
  "@context": "https://openactive.io/",
  "@type": "UnknownOrderError",
  "name": "The Booking System has no 'Order' matching the one requested.",
  "statusCode": 404,
  "description": "Order not found"
}
```
### Specs
* ✅ should return a(n) UnknownOrderError


