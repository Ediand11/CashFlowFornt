"use client";

import { incomeAdd } from "@/src/api/income/incomeAdd";
import { useIncomesStore } from "@/src/store/incomeStore";
import { IncomeCategories } from "@/src/types";
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, SelectChangeEvent, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

const modalStyle = {
  position: "absolute",
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

const datePickerStyle = {
  width: "100%",
  "& .MuiInputLabel-root.Mui-focused": { color: "#ff9292" },
  "& .MuiOutlinedInput-root": {
    "&:hover > fieldset": { borderColor: "#ff9292" },
  },
};

const ModalIncomeAdd = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<IncomeCategories | string>("");
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(dayjs());
  const setIncomes = useIncomesStore((state) => state.setIncomes);

  const toggleModal = () => setIsOpen(!isOpen);
  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value as IncomeCategories);
  };
  const handleDateChange = (day: Dayjs | null) => setSelectedDate(dayjs(day));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const amount = formData.get("amount") as string;
    const date = selectedDate?.toJSON();

    if (!selectedCategory || !date || !amount || !name) {
      return;
    }

    const incomeData = {
      name,
      amount,
      date,
      category: selectedCategory as IncomeCategories,
    };

    try {
      const response = await incomeAdd([incomeData]);
      if (response.income) {
        setIncomes(response.income);
      }
      setIsOpen(false);
    } catch (error) {
      console.error("Ошибка при добавлении дохода:", error);
    }
  };

  return (
    <>
      <Button onClick={toggleModal} fullWidth color={"secondary"}>
        Add Income
      </Button>
      <Modal open={isOpen} onClose={toggleModal} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
        <Box component={"form"} onSubmit={handleSubmit} noValidate sx={{ ...modalStyle, width: 400 }}>
          <TextField color={"secondary"} margin="normal" required fullWidth id="name" label="Name" name="name" autoFocus />
          <FormControl margin="normal" fullWidth color={"secondary"}>
            <DatePicker label="Date" sx={datePickerStyle} onChange={handleDateChange} />
          </FormControl>
          <TextField color={"secondary"} margin="normal" required fullWidth name="amount" label="Amount" type="number" id="amount" autoComplete="amount" />
          <FormControl margin="normal" fullWidth color={"secondary"}>
            <InputLabel id="category-select-label">Categories</InputLabel>
            <Select labelId="category-select-label" id="category-select" value={selectedCategory} label="Categories" onChange={handleCategoryChange}>
              {Object.values(IncomeCategories).map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Add Income
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ModalIncomeAdd;
