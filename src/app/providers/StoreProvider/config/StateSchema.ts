import { CounterSchema } from "@/entities/Counter";
import { ProfileSchema } from "@/entities/Profile";
import { UserSchema } from "@/entities/User";
import { LoginSchema } from "@/features/AuthByUsername/model/types/loginSchema";
import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";

export interface StateStaticSchema {
    counter: CounterSchema;
    user: UserSchema;
}

export interface StateSchema extends StateStaticSchema {
    // Асинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
