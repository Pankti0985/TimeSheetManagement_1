import TimesheetForm from '../components/TimesheetForm';
import TimesheetTable from '../components/TimesheetTable';

export default function InternDashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Intern Dashboard</h1>

      <TimesheetForm />

      <TimesheetTable />
    </div>
  );
}
