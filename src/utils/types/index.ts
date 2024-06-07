import type { HTMType, TState } from "iares";

interface GenericObject extends Object {}
export type TemplateType<T extends GenericObject> = (params: T) => HTMType | HTMType[];
export type PropsType<T extends GenericObject> = T;
export type ParamsType<T> = { params: T };
export type ActionsType<T extends GenericObject> = T;
export type HooksType<T extends GenericObject> = T;

export type TemplateParamsType<T extends GenericObject> = T;
export type TemplateStateType<T extends GenericObject> = T;
export type StateType<T extends GenericObject> = TState<T>;
