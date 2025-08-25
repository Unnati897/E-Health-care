// ehealth-frontend/src/pages/PatientsList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients } from '../features/patients/patientsSlice';

export default function PatientsList(){
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(s => s.patients);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchPatients());
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {String(error)}</div>;

  return (
    <div>
      <h2>Patients</h2>
      <ul>
        {items.map(p => <li key={p._id}>{p.name} — {p.age}y</li>)}
      </ul>
    </div>
  );
}
