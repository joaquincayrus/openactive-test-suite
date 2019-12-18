const RequestHelper = require("../../helpers/request-helper");

const chakram = require("chakram");
const expect = chakram.expect;

describe("Create test event", function() {
  const testHelper = new RequestHelper(null);
  var apiResponse;

  var testEvent = {
    "@context": "https://openactive.io/",
    "@type": "ScheduledSession",
    superEvent: {
      "@type": "SessionSeries",
      name: "Testevent2",
      offers: [
        {
          "@type": "Offer",
          price: 14.95
        }
      ]
    },
    startDate: "2019-11-20T17:26:16.0731663+00:00",
    endDate: "2019-11-20T19:12:16.0731663+00:00",
    maximumAttendeeCapacity: 5
  };

  beforeAll(async function() {
    let prom = testHelper.getMatch("Testevent2");

    testHelper
      .delay(500)
      .then(x => testHelper.createScheduledSession(testEvent, {}));

    ({ apiResponse } = await prom);
  });

  afterAll(async function() {
    var name = testEvent.superEvent.name;
    let { respObj } = await testHelper.deleteScheduledSession(name);
  });

  it("should return 200 on success", function() {
    expect(apiResponse).to.have.status(200);
  });

  it("should return newly created event", function() {
    expect(apiResponse).to.have.json("data.@type", "ScheduledSession");
    expect(apiResponse).to.have.json("data.superEvent.name", "Testevent2");
  });

  it("should have one offer", function() {
    expect(apiResponse).to.have.schema("data.superEvent.offers", {
      minItems: 1,
      maxItems: 1
    });
  });

  it("offer should have price of 14.95", function() {
    expect(apiResponse).to.have.json("data.superEvent.offers[0].price", 14.95);
  });
});