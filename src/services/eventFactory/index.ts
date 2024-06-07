import { type TGenericObject, type THandler, pubsubFactory } from "iares";

export const eventFactory = () => {
  const eventDrive = pubsubFactory();

  const subscribe = (eventName: string, handler: THandler) => {
    eventDrive.on(eventName, handler);
  };
  const unsubscribe = (eventName: string, handler: THandler) => {
    eventDrive.off({ eventName, handler });
  };
  const dispatch = <T = void>(eventName: string, payload: TGenericObject<T>) => {
    eventDrive.emit(eventName, payload);
  };

  return { subscribe, unsubscribe, dispatch };
};
