import React from 'react';
import {useDataQuery} from "@dhis2/app-runtime";
import { Menu, MenuItem} from "@dhis2/ui";
import {
    Table,
    TableHead, 
    TableCellHead,
    TableBody, 
    TableRow, 
    TableCell 
} from "@dhis2/ui";
import styles from "./App.module.css";

const request = {
    request0: {
      resource: "/dataSets",
      params: {
        fields: "id,displayName,created",
        paging: "false"
      }
    }
  }
  
  const sendRequest = () => {
      const { loading, error, data } = useDataQuery(request)
      if (error) {
          return <span>ERROR: {error.message}</span>
      }
  
      if (loading) {
          return <span>Loading...</span>
      }
  
      if (data) {
         //To-do: return a component using the data response
         return (
            <div className={styles.tableContainer}>
                <Menu>
                {data.request0.dataSets.map(element => {
                    return (
                        <MenuItem key={element.id} label={element.displayName} onClick={toggleTable}/>
                       
                    );
                })}
            </Menu>
            <div className={styles.menu}>
            {data.request0.dataSets.map(element => {
                return (
                    <Table key={element.id} className={styles.table}>
                        <TableHead>
                            <TableCellHead>Display name</TableCellHead>
                            <TableCellHead>ID</TableCellHead>
                            <TableCellHead>Created</TableCellHead>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{element.displayName}</TableCell>
                                <TableCell>{element.id}</TableCell>
                                <TableCell>{element.created}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                )
            })}
            </div>
            </div>
            
            
         ); 
      }
  }
  
  const toggleTable = () =>{
    
  }

export function Datasets() {

    return sendRequest();
}

