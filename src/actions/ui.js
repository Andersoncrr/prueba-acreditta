import { types } from "../types/types";

export const dataCharging = () => ({
  type: types.uiDatacharging,
});

export const dataLoaded = () => ({
  type: types.uiDataloaded,
});

export const reload = () => ({
  type: types.uiReload,
});

export const finishReload = () => ({
  type: types.uiFinishReload,
});
