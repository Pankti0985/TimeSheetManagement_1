import Filters from '../components/Filters';
import TimesheetTable from '../components/TimesheetTable';

export default function ManagerDashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Manager Dashboard</h1>

      <Filters />

      <TimesheetTable />
    </div>
  );
}
