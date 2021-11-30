import React, { useState, useEffect, useRef } from 'react';
import { EventList } from './EventList';
import { InterfaceEvent } from '../types/data';
import './App.css';

const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [events, setEvents] = useState<InterfaceEvent[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') addEvent();
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

    const removeEvent = (id: number): void => {
        setEvents(events.filter(event => event.id !== id))
    }

    const toggleEvent = (id: number): void => {
        setEvents(events.map(event => {
            if (event.id !== id) return event;

            return {
                ...event,
                complete: !event.complete
            }
        }))
    }

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, []);

    return <div>
        <div>
            <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef} type="text" />
            <button onClick={addEvent}>Add</button>
        </div>
        <EventList items={events} removeEvent={removeEvent} toggleEvent={toggleEvent} />
    </div>
}

export { App }