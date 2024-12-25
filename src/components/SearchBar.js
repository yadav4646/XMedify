import { useState, useMemo } from "react";
import { Stack, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ dataList, onFilter }) {
  const [searchText, setSearchText] = useState("");

  const filteredData = useMemo(() => {
    if (!searchText.trim()) return dataList;
    return dataList.filter((item) =>
      item["Hospital Name"]
        .toLowerCase()
        .includes(searchText.trim().toLowerCase())
    );
  }, [searchText, dataList]);

  const handleSearch = (e) => {
    e.preventDefault();
    onFilter(filteredData);
  };

  return (
    <form onSubmit={handleSearch}>
      <Stack direction="row" spacing={2}>
        <TextField
          type="text"
          label="Search By Hospital"
          variant="outlined"
          fullWidth
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          inputProps={{ maxLength: 100 }}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ py: "15px", px: 8, flexShrink: 0 }}
          disableElevation
        >
          Search
        </Button>
      </Stack>
    </form>
  );
}
