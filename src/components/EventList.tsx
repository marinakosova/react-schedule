import { EventItem } from './EventItem';
import { InterfaceEvent } from '../types/data';

interface InterfaceListProps {
    items: InterfaceEvent[];
}

const EventList: React.FC<InterfaceListProps> = (props) => {
    return <div>
        {
            props.items.map(event => <EventItem key={event.id} {...event} />)
        }
    </div>
}

export {
    EventList
}