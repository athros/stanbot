// tslint:disable-next-line:no-var-requires
const TSConsoleReporter = require("jasmine-ts-console-reporter");

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new TSConsoleReporter());
