import { InterfaceEvent } from '../types/data';

interface InterfaceEventItem extends InterfaceEvent { }

const EventItem: React.FC<InterfaceEventItem> = (props) => {
    const { id, title, complete } = props;

    return <div>
        <input type="checkbox" checked={complete} />
        {title}
        <button>x</button>
    </div>
}

export { EventItem }