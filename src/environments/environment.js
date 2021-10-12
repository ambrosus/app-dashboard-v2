let core = 'https://vitalii427-hermes.ambrosus-test.io';
let test = false;
let prod = false;
let dev = false;
let ambrosus = false;

try {
  core = window.location.hostname.split('.');

  if (core.length === 3) {
    core = [core[0].split('-')[1], ...core.slice(1)];
  } else {
    core.shift();
  }

  if (
    ['ambrosus', 'ambrosus-dev', 'ambrosus-test'].indexOf(
      core[core.length - 2],
    ) > -1
  ) {
    ambrosus = true;
  }

  core = core.join('.');
  core = `https://${core}`;

  if (core.indexOf('-dev') > -1) {
    dev = true;
    prod = false;
  }
  if (core.indexOf('-test') > -1) {
    test = true;
    prod = false;
  }
} catch (error) {
  core = '';
  test = false;
  prod = false;
  dev = false;
  ambrosus = false;
  throw new Error('Invalid network');
} finally {
  core = window.location.hostname.split('.');

  if (core.length === 3) {
    core = [core[0].split('-')[1], ...core.slice(1)];
  } else {
    core.shift();
  }

  if (
    ['ambrosus', 'ambrosus-dev', 'ambrosus-test'].indexOf(
      core[core.length - 2],
    ) > -1
  ) {
    ambrosus = true;
  }

  core = core.join('.');
  core = `https://${core}`;

  if (core.indexOf('-dev') > -1) {
    dev = true;
    prod = false;
  }
  if (core.indexOf('-test') > -1) {
    test = true;
    prod = false;
  }
}

if (window.location.hostname === 'localhost') {
  core = 'https://vitalii427-hermes.ambrosus-test.io';
  dev = true;
  prod = false;
  ambrosus = true;
}

export const environment = {
  production: false,
  api: {
    core,
    extended: `${core}`,
  },
  test,
  prod,
  dev,
  ambrosus,
};
