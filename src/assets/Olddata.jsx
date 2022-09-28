import Table from 'react-bootstrap/Table';

function OldData({tableData}) {
  return (
    <Table striped responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Mobile</th>
          <th>Adress</th>
          <th>Problem</th>
          <th>Company</th>
          <th>Product</th>
          <th>Product Status</th>
          <th>Deleivery Status</th>
          <th>Date</th>
          <th>Estimate Price</th>
        </tr>
      </thead>
      <tbody>
      {

        tableData.map((data, index)=>{
  return (
  <tr key={index}>
    <td>{index+1}</td>
    <td>{data.mobile}</td>
    <td>{data.date}</td>
    <td>{data.name}</td>
    <td>{data.product}</td>
    <td>{data.company}</td>
    <td>{data.productStatus}</td>
    <td>{data.deliveryStatus}</td>
    <td>{data.estimate}</td>
    <td>{data.adress}</td>
    <td>{data.problem}</td>
  </tr>
  )
        })
      }
      
     
      </tbody>
    </Table>
  );
}

export default OldData;