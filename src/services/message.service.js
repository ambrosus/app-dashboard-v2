/*eslint-disable*/

export const messageServiceError = (
  _error: any,
  reason = '',
  overrideError = false,
) => {
  let message = '';
  const e = _error || {};
  const error = e.error || e;
  if (overrideError) {
    message = reason;
  } else if (error.meta && error.meta.message) {
    message = error.meta.message;
  } else if (error.meta && error.meta.error_message) {
    message = error.meta.error_message;
  } else if (error.reason) {
    message = error.reason;
  } else if (error.message) {
    message = error.message;
  } else if (reason) {
    message = reason;
  } else {
    message = 'Error occured. Try again.';
  }

  alert(message);
};

export const messageServiceSuccess = (
  resultMessage,
  o = null,
  overrideObject = false,
) => {
  let message = '';
  const object = o || {};

  if (overrideObject || resultMessage) {
    message = resultMessage;
  } else if (object.meta && object.meta.message) {
    message = object.meta.message;
  } else {
    message = 'Success';
  }

  alert(message);
};
