"use client";

import { transactionAdd } from "@/src/api/transctions/transctionsAdd";
import { useTransactionsStore } from "@/src/store/transactionsStore";
import { Categories } from "@/src/types";
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, SelectChangeEvent, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #f66768",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const configDayPicker = {
  width: "100%",
  "& .MuiInputLabel-root.Mui-focused": { color: "#ff9292" }, //styles the label
  "& .MuiOutlinedInput-root": {
    "&:hover > fieldset": { borderColor: "#ff9292" },
  },
};

const ModalTransactionAdd = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const [selectCategory, setSelectCategory] = useState<Categories | string>("");
  const handleChange = (event: SelectChangeEvent) => {
    setSelectCategory(event.target.value as Categories);
  };

  const [days, setDays] = useState<Dayjs | undefined>(dayjs());
  const handleChangeDays = (day: Dayjs | null) => setDays(dayjs(day));
  const { transactions, setTransactions } = useTransactionsStore();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const nameData = data.get("name");
    const priceData = data.get("price");
    const stringDate = days?.toJSON();

    if (!selectCategory || !stringDate || !priceData || !nameData) {
      return;
    }

    const dataState = {
      name: nameData as string,
      price: priceData as string,
      date: stringDate,
      category: selectCategory as Categories,
    };
    const resp = await transactionAdd([dataState]);
    if (resp.transaction) {
      setTransactions(resp.transaction);
    }
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen} fullWidth color={"secondary"}>
        Add Transaction
      </Button>
      <Modal open={isOpen} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
        <Box component={"form"} onSubmit={handleSubmit} noValidate sx={{ ...style, width: 400 }}>
          <TextField color={"secondary"} margin="normal" required fullWidth id="name" label="Name" name="name" autoFocus />
          <FormControl margin="normal" fullWidth color={"secondary"}>
            <DatePicker label="Date" sx={configDayPicker} onChange={handleChangeDays} />
          </FormControl>

          <TextField color={"secondary"} margin="normal" required fullWidth name="price" label="Price" type="number" id="price" autoComplete="price" />

          <FormControl margin="normal" fullWidth color={"secondary"}>
            <InputLabel id="demo-simple-select-label">Categories</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={selectCategory} label="Catagories" onChange={handleChange}>
              {Object.values(Categories).map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Add transaction
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ModalTransactionAdd;
