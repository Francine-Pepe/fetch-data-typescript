import { useState } from "react";
import Button from "@mui/material/Button";

function ButtonFetch() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClick}>
        Search
      </Button>
    </>
  );
}

export default ButtonFetch;
