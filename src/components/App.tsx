import { useState, useEffect, useRef } from 'react';
import { InterfaceEvent } from '../types/data';

const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [events, setEvents] = useState<InterfaceEvent[]>([]);

    const addEvent = () => {
        setEvents([...events, {
            id: Date.now(),
            title: value,
            complete: false,
        }])
    }

    return <div>
        <div>
            <input value={value} onChange={e => setValue(e.target.value)} type="text" />
            <button onClick={addEvent}>Add</button>
        </div>
    </div>
}

export { App }