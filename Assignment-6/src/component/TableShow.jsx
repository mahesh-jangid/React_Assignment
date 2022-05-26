export const ShowTable = ({ users }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Married</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {users.map((el, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{el.name}</td>
                <td>{el.age}</td>
                <td>{el.address}</td>
                <td>{el.married ? "Married" : "Not married"}</td>
                <td>{el.department}</td>
                <td>{el.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ShowTable;
