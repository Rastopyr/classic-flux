import React from "react";
import { useStore } from "../store";
import { User } from "../types";
import { ListItem, ListItemProps } from "./ListItem";

export type ListProps = {
  readonly users: readonly User[];
} & Omit<ListItemProps, "user">;

export const ListView: React.FC<ListProps> = React.memo(
  ({ users, editUserId }) => {
    return (
      <ul className="list-group">
        {users.map((user) => {
          return (
            <ListItem
              key={user.id}
              user={user}
              editUserId={editUserId}
            />
          );
        })}
      </ul>
    );
  }
);

export const List: React.FC = () => {
  const users = useStore((state) => state.users);
  const editUserId = useStore((state) => state.editUserId);

  return <ListView
    users={users}
    editUserId={editUserId}
  />
};
