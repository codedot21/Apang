import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class Customer extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.email}</TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.hospital}</TableCell>
        <TableCell>{this.props.license}</TableCell>
        <TableCell>{this.props.agree}</TableCell>
      </TableRow>
    );
  }
}

export default Customer;
