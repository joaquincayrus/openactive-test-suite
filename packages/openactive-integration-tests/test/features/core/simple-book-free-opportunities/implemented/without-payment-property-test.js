/* eslint-disable no-unused-vars */
const chakram = require('chakram');
const { RequestState } = require('../../../../helpers/request-state');
const { FlowHelper } = require('../../../../helpers/flow-helper');
const { FeatureHelper } = require('../../../../helpers/feature-helper');
const sharedValidationTests = require('../../../../shared-behaviours/validation');
const { GetMatch, C1, C2, B } = require('../../../../shared-behaviours');

const { expect } = chakram;
/* eslint-enable no-unused-vars */

FeatureHelper.describeFeature(module, {
  testCategory: 'core',
  testFeature: 'simple-book-free-opportunities',
  testFeatureImplemented: true,
  testIdentifier: 'without-payment-property',
  testName: 'Successful booking without payment property',
  testDescription: 'A successful end to end booking without the `payment` property included.',
  // The primary opportunity criteria to use for the primary OrderItem under test
  testOpportunityCriteria: 'TestOpportunityBookableFree',
  // This must also be TestOpportunityBookableFree as the payment property is only disallowed if ALL items are free.
  controlOpportunityCriteria: 'TestOpportunityBookableFree',
},
function (configuration, orderItemCriteria, featureIsImplemented, logger) {
  const state = new RequestState(logger, {
    // the `standardFree` B request template has no `payment` property
    bReqTemplateRef: 'standardFree',
  });
  const flow = new FlowHelper(state);

  beforeAll(async function () {
    await state.fetchOpportunities(orderItemCriteria);

    return chakram.wait();
  });

  describe('Get Opportunity Feed Items', function () {
    (new GetMatch({
      state, flow, logger, orderItemCriteria,
    }))
      .beforeSetup()
      .successChecks()
      .validationTests();
  });

  describe('C1', function () {
    (new C1({
      state, flow, logger,
    }))
      .beforeSetup()
      .successChecks()
      .validationTests();
  });

  describe('C2', function () {
    (new C2({
      state, flow, logger,
    }))
      .beforeSetup()
      .successChecks()
      .validationTests();
  });

  describe('B', function () {
    (new B({
      state, flow, logger,
    }))
      .beforeSetup()
      .successChecks()
      .validationTests();
  });
});
