import React from "react"
import PropTypes from "prop-types";
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const FORMAT = 'yyyy-MM-dd';

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

const DaySelector = (props) => {
  const { value, onChange } = props;
  return <DayPickerInput
    value={value}
    formatDate={formatDate}
    format={FORMAT}
    parseDate={parseDate}
    onDayChange={onChange}
    placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
  />
} 

DaySelector.propTypes = {
  value: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired
}

export default DaySelector;