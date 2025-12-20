export default function RecordRow({ record, onEdit, onDelete }) {
  return (
    <tr>
      <td>{record.name}</td>
      <td>{record.email}</td>
      <td>{record.phone}</td>
      <td>{record.age}</td>
      <td>{record.gender}</td>
      <td>{record.city}</td>
      <td>
        <button onClick={() => onEdit(record)}>Edit</button>
        <button className="danger" onClick={() => onDelete(record.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}