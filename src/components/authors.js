import React from "react"
import Table from "react-bootstrap/Table"
const Authors = ({ children }) => (
  <Table borderless className="font-weight-light text-sm spacer">
    <tr>
      <th>Author</th>
      <th>Affiliation</th>
    </tr>
    <tr>
      <td>Aaron Conway</td>
      <td>
        RBC Chair in Cardiovascular Nursing Research | Peter Munk Cardiac Centre
        | University Health Network
      </td>
    </tr>
    <tr>
      <td>Sebastian Mafeld</td>
      <td>Interventional Radiology | JDMI | Toronto General Hospital</td>
    </tr>
    <tr>
      <td>Sebastian Mafeld</td>
      <td>Interventional Radiology | JDMI | Toronto General Hospital</td>
    </tr>
    <tr>
      <td>Sebastian Mafeld</td>
      <td>Interventional Radiology | JDMI | Toronto General Hospital</td>
    </tr>
    <tr>
      <td>Sebastian Mafeld</td>
      <td>Interventional Radiology | JDMI | Toronto General Hospital</td>
    </tr>
    <tr>
      <td>Sebastian Mafeld</td>
      <td>Interventional Radiology | JDMI | Toronto General Hospital</td>
    </tr>
  </Table>
)

export default Authors
