import { useState } from 'react';

export default function TimesheetForm() {
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');

  const submit = () => {
    console.log({ date, hours });
    // later → POST /timesheets
  };

  return (
    <div className="card">
      <h3>Log Daily Hours</h3>

      <input type="date" onChange={e => setDate(e.target.value)} />
      <input
        type="number"
        placeholder="Hours"
        onChange={e => setHours(e.target.value)}
      />

      <button onClick={submit}>Submit</button>
    </div>
  );
}
