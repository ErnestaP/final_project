import { Table } from "antd";
import { deleteEmployee, fetchAllEmployees } from "api/actions";
import { useEffect, useState } from "react";
const { Column, ColumnGroup } = Table;

const Employees: any = () => {
  const [employees, setEmployees] = useState([]);
  const [deletedEmployees, setDeletedEmployees] = useState("");

  useEffect(() => {
    const fetchAllEmployees = async () => {
      return await fetch(`http://localhost:8000/all`, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Request-Headers": "*",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setEmployees(data);
        });
    };
    fetchAllEmployees();
  }, [deletedEmployees]);
  if (employees) {
    return (
      <>
        <Table dataSource={employees}>
          <ColumnGroup title="Name">
            <Column title="id" dataIndex="id" key="id" />
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Surname" dataIndex="surname" key="surname" />
            <Column
              title="Action"
              dataIndex=""
              key="x"
              render={(employee) => (
                <a
                  onClick={() => {
                    deleteEmployee(employee.id);
                    setDeletedEmployees(employee.id);
                  }}
                >
                  Delete
                </a>
              )}
            />
          </ColumnGroup>
        </Table>
      </>
    );
  }
};

// export const getServerSideProps = async () => {
//   const res = await fetch(`http://project_backend:8000/all`);
//   const results = await res.json();
//   return { props: { data: results } };
// };

export default Employees;
