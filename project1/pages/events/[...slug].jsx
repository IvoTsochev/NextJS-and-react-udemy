import { useRouter } from "next/router";
import { Fragment } from 'react'
import { getFilteredEvents } from "../../dummy-data";
import EventList from '../../components/events/event-list'
import ResultsTitle from '../../components/events/results-title'

const FilteredEventsPage = () => {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <div className="center">Loading</div>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;


  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return <p>Invalid filter. Plase adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for this filter</p>;
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={ date } />
      <EventList items={ filteredEvents } />
    </Fragment>
  );
};

export default FilteredEventsPage;
