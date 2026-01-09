export default function TimesheetTable() {
  const data = [
    { id: 1, name: 'John', date: '2026-01-08', hours: 8 },
  ];

  return (
    <div className="card">
      <h3>Timesheets</h3>

      <table>
        <thead>
          <tr>
            <th>Intern</th>
            <th>Date</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {data.map(t => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>{t.date}</td>
              <td>{t.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
