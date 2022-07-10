import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

const CustomPagination = ({setPage, numOfPages = 10}) =>{
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

    return (
        <div
            style={{ 
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
        }}
      >
        <ThemeProvider theme={darkTheme}>
            <Pagination
            onChange={(e) => handlePageChange(e.target.textContent)}
            count={numOfPages}
            // color="primary"
            // hideNextButton
            // hidePrevButton
        />
        </ThemeProvider>
    </div>
    )
};

export default CustomPagination;
// import React from "react";



// export default function CustomPagination({ setPage, numOfPages = 10 }) {
//   // Scroll to top when page changes
//   const handlePageChange = (page) => {
//     setPage(page);
//     window.scroll(0, 0);
//   };


//     </div>
//   );
// }