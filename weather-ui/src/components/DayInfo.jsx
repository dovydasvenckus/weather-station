import React from "react"
import PropTypes from "prop-types";
import dateFnsFormat from 'date-fns/format';
import { DATE_TIME_FORMAT } from "../constants/DateConstants";
import { parseISO } from "date-fns";

const DayInfo = ({weatherEntries}) => {
  const latestEntry = getLatestEntry(weatherEntries);

  return (
    <div id="day-info">
      <p>Latest entry date: {parseDate(latestEntry.date)}</p>
      <p>Temperature: {latestEntry.temperature}</p>
      <p>Humidity: {latestEntry.humidity}</p>
    </div>
  )
}

const parseDate = (dateString) => {
  return dateFnsFormat(parseISO(dateString), DATE_TIME_FORMAT);
}
const getLatestEntry = (entries) => {
  entries.sort((a, b) => new Date(a.date) - new Date(b.date))
  return entries[entries.length - 1]
}
DayInfo.propTypes = {
  weatherEntries: PropTypes.array.isRequired
}

export default DayInfo;