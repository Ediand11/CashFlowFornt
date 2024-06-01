"use client";

import { useIncomesStore } from "@/src/store/incomeStore";
import MoneyIcon from "@mui/icons-material/Money";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import style from "./ListIncomes.module.scss";

const ListIncomes = () => {
  const { incomes } = useIncomesStore();

  const renderIncomeItem = (item: { name: string; date: string; amount: string; category: string }) => (
    <ListItem
      key={item.name} // Убедитесь, что имя уникально или используйте другой уникальный идентификатор
      alignItems="center"
      disableGutters
      secondaryAction={
        <IconButton aria-label="money">
          <MoneyIcon />
        </IconButton>
      }
    >
      <ListItemText primary={`${item.name}, ${parseFloat(item.amount)}$`} secondary={`${item.date}, ${item.category}`} />
    </ListItem>
  );

  return (
    <div className={style.root}>
      <List sx={{ width: "100%", maxWidth: 660, bgcolor: "background.paper" }}>{incomes.map(renderIncomeItem)}</List>
    </div>
  );
};

export default ListIncomes;
