import { getValues, isArray, isPlainObject } from 'lodash';

const isNotEmpty = value => {
  if (isPlainObject(value)) {
    const values = getValues(value);
    return values.length > 0 && values.some(item => !!item);
  } else if (isArray(value)) {
    return value.length > 0;
  } else if (typeof value === 'number') {
    return !isNaN(value);
  } else {
    return !(value === undefined || value === null || value === '' || value.length === 0);
  }
};

export default isNotEmpty;
