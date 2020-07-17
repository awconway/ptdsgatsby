import React from "react"
import Table from "react-bootstrap/Table"

const Participants = ({ children }) => (
  <Table className="font-weight-light text-sm">
    <thead>
      <tr>
        <th>Characteristic</th>
        <th>
          <strong>N = 193</strong>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Age</td>
        <td>62 (48, 72)</td>
      </tr>
      <tr>
        <td>
          <b>Gender</b>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>Male</td>
        <td>111 (58%)</td>
      </tr>
      <tr>
        <td>Female</td>
        <td>80 (42%)</td>
      </tr>
      <tr>
        <td>Prefer not to say</td>
        <td>1 (0.5%)</td>
      </tr>
      <tr>
        <td>
          <b>Cath Lab Procedures</b>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>Angiogram or Percutaneous Coronary Intervention (PCI)</td>
        <td>58 (30%)</td>
      </tr>
      <tr>
        <td>Cardiac Implantable Electronic Device (CIED)</td>
        <td>15 (7.8%)</td>
      </tr>
      <tr>
        <td>Electrophysiology Study (EPS)</td>
        <td>5 (2.6%)</td>
      </tr>
      <tr>
        <td>Structural heart intervention</td>
        <td>5 (2.6%)</td>
      </tr>
      <tr>
        <td>
          <b>Interventional Radiology Procedures</b>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>Vascular angiography or intervention</td>
        <td>17 (8.9%)</td>
      </tr>
      <tr>
        <td>Biopsy</td>
        <td>62 (32%)</td>
      </tr>
      <tr>
        <td>Port-a-cath</td>
        <td>4 (2.1%)</td>
      </tr>
      <tr>
        <td>Radiofrequency ablation of a tumour (RFA)</td>
        <td>9 (4.7%)</td>
      </tr>
      <tr>
        <td>Vascular embolization (e.g., renal)</td>
        <td>1 (0.5%)</td>
      </tr>
      <tr>
        <td>Other procedure</td>
        <td>16 (8.3%)</td>
      </tr>
      <tr>
        <td>
          <em>Statistics presented: median (IQR); n (%)</em>
        </td>
        <td></td>
      </tr>
    </tbody>{" "}
  </Table>
)

export default Participants
