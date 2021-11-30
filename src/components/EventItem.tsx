import { InterfaceEvent } from '../types/data';

interface InterfaceEventItem extends InterfaceEvent {
    removeEvent: (id: number) => void;
    toggleEvent: (id: number) => void;
}

const EventItem: React.FC<InterfaceEventItem> = (props) => {
    const { id, title, complete, removeEvent, toggleEvent } = props;

    return <div>
        <input type="checkbox" checked={complete} onChange={() => toggleEvent(id)} />
        <span className="title">
            {title}
        </span>
        <button className="removeBtn"
            onClick={() => removeEvent(id)
            }>x</button>
    </div>
}

export { EventItem }