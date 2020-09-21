# Summary of Test Suite Results for 'OpenActive Reference Implementation'

Mode: **Random**

Multiple
---

  * ✅ Core / Amending the OrderQuote before B (Implemented)
    - ⚠️ [Amend, at C1 and C2, an existing OrderQuote](amending-order-quote_amend-c1-and-c2_Multiple.md): (0 failures, 351 warnings, 138 suggestions, 20 passes)
    - ⚠️ [Amend, at C1, an existing OrderQuote](amending-order-quote_amend-c1_Multiple.md): (0 failures, 314 warnings, 120 suggestions, 25 passes)
    - ⚠️ [Amend, at C2, an existing OrderQuote](amending-order-quote_amend-c2_Multiple.md): (0 failures, 308 warnings, 120 suggestions, 22 passes)
    - ⚠️ [Run C2 with different details from C1](amending-order-quote_c2-with-different-details_Multiple.md): (0 failures, 267 warnings, 102 suggestions, 21 passes)
  * ✅ Core / Availability Checking (Implemented)
    - ⚠️ [Occupancy in C1 and C2 matches feed](availability-check_availability-confirmed_Multiple.md): (0 failures, 149 warnings, 60 suggestions, 14 passes)
    - ⚠️ [OpportunityIsFullError returned for full OrderItems](availability-check_opportunity-full_Multiple.md): (0 failures, 161 warnings, 60 suggestions, 14 passes)
  * ✅ Core / Common error conditions (Implemented)
    - ⚠️ [Expect an IncompleteBrokerDetailsError when broker details are missing name](common-error-conditions_incomplete-broker-details_Multiple.md): (0 failures, 330 warnings, 126 suggestions, 24 passes)
    - ⚠️ [Expect an IncompleteCustomerDetailsError when customer details are incomplete](common-error-conditions_incomplete-customer-details_Multiple.md): (0 failures, 263 warnings, 102 suggestions, 17 passes)
    - ⚠️ [Expect a TotalPaymentDueMismatchError when the totalPaymentDue property does not match](common-error-conditions_payment-mismatch_Multiple.md): (0 failures, 151 warnings, 60 suggestions, 9 passes)
  * ✅ Cancellation / Customer Requested Cancellation (Implemented)
    - ✅ [Expect a UnknownOrderError for an Order that does not exist](customer-requested-cancellation_unknown-order_Multiple.md): (0 failures, 0 warnings, 0 suggestions, 1 passes)
  * ✅ Core / Simple Booking of free opportunities (Implemented)
    - ⚠️ [Fail free bookings which include erroneous payment property](simple-book-free-opportunities_with-erroneous-payment-property_Multiple.md): (0 failures, 156 warnings, 60 suggestions, 10 passes)
    - ⚠️ [Successful booking without payment property](simple-book-free-opportunities_without-payment-property_Multiple.md): (0 failures, 204 warnings, 78 suggestions, 9 passes)
  * ✅ Payment / Simple Booking of paid opportunities (Implemented)
    - ⚠️ [Successful booking with payment property](simple-book-with-payment_with-payment-property_Multiple.md): (0 failures, 198 warnings, 78 suggestions, 9 passes)

ScheduledSession
---

  * ✅ Core / Amending the OrderQuote before B (Implemented)
    - ⚠️ [Amend, at C1 and C2, an existing OrderQuote](amending-order-quote_amend-c1-and-c2_ScheduledSession.md): (0 failures, 131 warnings, 46 suggestions, 10 passes)
    - ⚠️ [Amend, at C1, an existing OrderQuote](amending-order-quote_amend-c1_ScheduledSession.md): (0 failures, 114 warnings, 40 suggestions, 11 passes)
    - ⚠️ [Amend, at C2, an existing OrderQuote](amending-order-quote_amend-c2_ScheduledSession.md): (0 failures, 114 warnings, 40 suggestions, 10 passes)
    - ⚠️ [Run C2 with different details from C1](amending-order-quote_c2-with-different-details_ScheduledSession.md): (0 failures, 95 warnings, 34 suggestions, 9 passes)
  * ✅ Core / Availability Checking (Implemented)
    - ⚠️ [Occupancy in C1 and C2 matches feed](availability-check_availability-confirmed_ScheduledSession.md): (0 failures, 55 warnings, 20 suggestions, 6 passes)
    - ⚠️ [OpportunityIsFullError returned for full OrderItems](availability-check_opportunity-full_ScheduledSession.md): (0 failures, 60 warnings, 20 suggestions, 6 passes)
  * ✅ Core / Common error conditions (Implemented)
    - ⚠️ [Expect an IncompleteBrokerDetailsError when broker details are missing name](common-error-conditions_incomplete-broker-details_ScheduledSession.md): (0 failures, 124 warnings, 42 suggestions, 12 passes)
    - ⚠️ [Expect an IncompleteCustomerDetailsError when customer details are incomplete](common-error-conditions_incomplete-customer-details_ScheduledSession.md): (0 failures, 97 warnings, 34 suggestions, 9 passes)
    - ⚠️ [Expect a TotalPaymentDueMismatchError when the totalPaymentDue property does not match](common-error-conditions_payment-mismatch_ScheduledSession.md): (0 failures, 57 warnings, 20 suggestions, 5 passes)
  * ✅ Cancellation / Customer Requested Cancellation (Implemented)
    - ⚠️ [Successful booking and cancellation.](customer-requested-cancellation_book-and-cancel_ScheduledSession.md): (0 failures, 81 warnings, 26 suggestions, 8 passes)
    - ✅ [Expect a UnknownOrderError for an Order that does not exist](customer-requested-cancellation_unknown-order_ScheduledSession.md): (0 failures, 0 warnings, 0 suggestions, 1 passes)
  * ✅ Core / Multiple Sellers (Implemented)
    - ⚠️ [SellerMismatchError for inconsistent Sellers of OrderItems](multiple-sellers_conflicting-seller_ScheduledSession.md): (0 failures, 44 warnings, 16 suggestions, 10 passes)
  * ✅ Core / Simple Booking of free opportunities (Implemented)
    - ⚠️ [Fail free bookings which include erroneous payment property](simple-book-free-opportunities_with-erroneous-payment-property_ScheduledSession.md): (0 failures, 58 warnings, 20 suggestions, 6 passes)
    - ⚠️ [Successful booking without payment property](simple-book-free-opportunities_without-payment-property_ScheduledSession.md): (0 failures, 76 warnings, 26 suggestions, 5 passes)
  * ✅ Payment / Simple Booking of paid opportunities (Implemented)
    - ⚠️ [Successful booking with payment property](simple-book-with-payment_with-payment-property_ScheduledSession.md): (0 failures, 74 warnings, 26 suggestions, 5 passes)

Generic
---

  * ✅ Core / Dataset Site (Implemented)
    - ✅ [Dataset Site JSON-LD valid](dataset-site_dataset-site-jsonld-valid_dataset-site-jsonld-valid.md): (0 failures, 0 warnings, 0 suggestions, 2 passes)

