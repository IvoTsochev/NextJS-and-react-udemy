import styles from '../styles/Home.module.css';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

export default function Home() {

  const featuredEvents = getFeaturedEvents();

  return (
    <div className={styles.container}>
      <EventList items={featuredEvents} />
    </div>
  )
}
