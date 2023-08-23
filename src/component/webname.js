import Box from "@mui/material/Box";
import Head from "next/head";

export const WebName = ({ wname, children }) => {
  return (
    <Box>
      <Head>
        <title>{wname}</title>
      </Head>
      <div>{children}</div>
    </Box>
  );
};
