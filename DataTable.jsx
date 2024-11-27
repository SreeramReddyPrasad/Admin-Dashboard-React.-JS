 import React from 'react';
 import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

 const DataTable = ({ columns, rows }) => {
   return (
     <Table>
       <TableHead>
         <TableRow>
           {columns.map((column, index) => (
             <TableCell key={index}>{column}</TableCell>
           ))}
         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map((row, rowIndex) => (
           <TableRow key={rowIndex}>
             {row.map((cell, cellIndex) => (
               <TableCell key={cellIndex}>{cell}</TableCell>
             ))}
           </TableRow>
         ))}
       </TableBody>
     </Table>
   );
 };

 export default DataTable;
