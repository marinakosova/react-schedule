import { EventItem } from './EventItem';
import { InterfaceEvent } from '../types/data';

interface InterfaceListProps {
    items: InterfaceEvent[];
    removeEvent: (id: number) => void;
    toggleEvent: (id: number) => void;
}

const EventList: React.FC<InterfaceListProps> = (props) => {
    const { items, toggleEvent, removeEvent } = props;

    return <div>
        {
            items.map(event => (
                <EventItem
                    key={event.id}
                    toggleEvent={toggleEvent}
                    removeEvent={removeEvent}
                    {...event}
                />
            ))
        }
    </div>
}

export {
    EventList
}