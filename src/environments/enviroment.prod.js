/*eslint-disable*/
let core = '';
let test = false;
let prod = true;
let dev = false;
let ambrosus = false;

try {
  core = location.hostname.split('.');
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
  core = `${location.protocol}//${location.host}`;

  if (core.indexOf('-dev') > -1) {
    dev = true;
    prod = false;
  }
  if (core.indexOf('-test') > -1) {
    test = true;
    prod = false;
  }
} catch (error) {}

if (location.hostname === 'localhost' || location.hostname === 'herokuapp') {
  core = 'https://vitalii427-hermes.ambrosus-test.io';
  dev = true;
  prod = false;
  ambrosus = true;
}

export const environment = {
  production: true,
  api: {
    core,
    extended: `${core}`,
  },
  test,
  prod,
  dev,
  ambrosus,
};
