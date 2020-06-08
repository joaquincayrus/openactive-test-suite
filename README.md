# OpenActive Test Suite

The general aim of this project is to allow end to end testing of the various flows and failure states of the Open Booking API.

This repository hosts two different projects:
* [Broker mircoservice](./packages/openactive-broker-microservice/): this sits in between the test suite and the target site. This allows the test suite to watch for changes, and throws them back to it.
* [Integration tests](./packages/openactive-integration-tests): this performs automated tests against the API

# Usage

## Configuration
Before running, configure the test suite:
 - `packages/openactive-broker-microservice/config/default.json`
   - [More information](./packages/openactive-broker-microservice/README.md#configuration)
 - `packages/openactive-integration-tests/config/test.json`
   - [More information](./packages/openactive-integration-tests/README.md#configuration)

## Installation
 - `npm install`
 
This will install the dependencies needed for both packages.

## Running

The broker is a pre-requisite to running the test suite.

### Broker
```bash
cd packages/openactive-broker-microservice
npm run start
```

### Tests
```bash
cd packages/openactive-integration-tests
npm run test
```

For more info, read the individual README.md within the package dirs.

## Continuous Integration

When `waitForHarvestCompletion` is set to `true` in `default.json`, the `openactive-integration-tests` will wait for the `openactive-broker-microservice` to be ready before it begins the test run.

This is useful for running both packages within a continuous integration environment, as shown below:

```bash
# Install dependencies
npm install --prefix packages/openactive-broker-microservice
npm install --prefix packages/openactive-integration-tests

# Start broker microservice in the background
npm start --prefix packages/openactive-broker-microservice &
pid=$!

# Run tests
npm test --prefix packages/openactive-integration-tests

# Kill broker microservice
kill $pid
```