import * as React from 'react';
import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid'; 
import { useAtom } from 'jotai'; 
import productsAtom from '../atoms/Products'; 
import ModalToggleAtom from '../atoms/Modal'; 

// Columns configuration for the DataGrid
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 }, // ID column
  { field: 'name', headerName: 'Name', width: 130 }, // Name column
  { field: 'categories', headerName: 'Categories', width: 130 }, // Categories column
];

// DataTable component
const DataTable = () => {
  // State management for products and modal
  const [products, setProducts] = useAtom(productsAtom); // State for products
  const [modal, setModal] = useAtom(ModalToggleAtom); // State for modal

  // Event handler for row click event on DataGrid
  const handleEvent: GridEventListener<'rowClick'> = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details, // GridCallbackDetails
  ) => {
    console.log(`Movie "${params.row.lastName}" clicked`); // Logging the clicked row
    // Updating modal state with row details
    setModal({toggle: true, heading: params.row.name, desc: params.row.description});
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        onRowClick={handleEvent} // Event handler for row click
        rows={products} // Data rows
        columns={columns} // Columns configuration
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }, // Initial pagination settings
          },
        }}
      />
    </div>
  );
}

export default DataTable; 
