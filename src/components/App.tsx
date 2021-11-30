import React, { useState, useEffect, useRef } from 'react';
import { EventList } from './EventList';
import { InterfaceEvent } from '../types/data';

const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [events, setEvents] = useState<InterfaceEvent[]>([]);

    const inputRef = useRef(null);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const addEvent = () => {
        if (value) {
            setEvents([...events, {
                id: Date.now(),
                title: value,
                complete: false,
            }])
            setValue('')
        }
    }

    return <div>
        <div>
            <input value={value} onChange={handleChange} ref={inputRef} type="text" />
            <button onClick={addEvent}>Add</button>
        </div>
        <EventList items={events} />
    </div>
}

export { App }