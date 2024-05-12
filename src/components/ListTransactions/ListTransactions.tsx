import { Transaction } from "@/src/types";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { FC } from "react";
import style from "./ListTransactions.module.scss";

interface ListTransactionsProps {
  transactions: Transaction[];
}

const ListTransactions: FC<ListTransactionsProps> = ({ transactions }) => {
  return (
    <div className={style.root}>
      <List sx={{ width: "100%", maxWidth: 660, bgcolor: "background.paper" }}>
        {transactions.map((item) => (
          <ListItem
            key={item._id}
            alignItems={"center"}
            disableGutters
            secondaryAction={
              <IconButton aria-label="receipt">
                <ReceiptIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`${item.name}, ${item.price}`} secondary={`${item.date}, ${item.category}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListTransactions;
