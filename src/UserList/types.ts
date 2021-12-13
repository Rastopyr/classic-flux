export type User = {
    readonly id: number;
    readonly username: string;
};

export type UserListState = {
    readonly users: readonly User[];
    readonly editUserId: number | undefined;
};