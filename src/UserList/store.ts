import create from "zustand"
import { internet, random } from "faker"
import { combine } from "zustand/middleware"
import { User, UserListState } from "./types"


export const initialState: UserListState = {
    users: new Array(10).fill(undefined).map(() => ({
      id: random.number(),
      username: internet.userName()
    })),
    editUserId: undefined
  };

export const useStore = create(
    combine(initialState, (set) => ({
        addUser: (username: string) => {
            set(state => ({
                ...state,
                users: [...state.users, {
                    id: random.number(),
                    username,
                }]
            }))
        },

        removeUser: (userId: number) => {
            set(state => ({
                ...state,
                users: state.users.filter((user) => user.id !== userId)
            }))
        },

        editUser: (userId: number) => {
            set(state => ({
                ...state,
                editUserId: userId
            }))
        },

        updateUser: (userId: number, username: string) => {
            set(state => ({
                editUserId: undefined,
                users: state.users.map((user) =>
                    user.id === userId
                    ? { ...user, username: username }
                    : user
                )
            }))
        },

        stopEditUser: (userId: number) => {
            set(state => ({
                ...state,
                editUserId: undefined
            }))
        }
    }))
);
