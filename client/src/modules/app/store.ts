import { create } from "zustand"
import { persist } from "zustand/middleware"
import { StorageKeys } from "./constants"
import { appendNotificationAction } from "./model/append-error-action"
import { removeNotificationAction } from "./model/remove-error-action"
import { FirstTipStore, NotificationStore } from "./type"

export const useNotificationStore = create<NotificationStore>((set, get) => ({
  notifications: [],
  appendNotification: (notification) =>
    set(appendNotificationAction(notification, get())),
  removeNotification: (code) => set(removeNotificationAction(code, get())),
}))

export const useFirstTip = create(
  persist<FirstTipStore, [], [], { firstTip: boolean }>(
    (set, get) => ({
      firstTip: true,
      currentStep: 1,
      incrementStep: () =>
        set({ ...get(), currentStep: get().currentStep + 1 }),
      setStep: (value) => set({ ...get(), currentStep: value }),
      setFirstTip: (value) => set({ ...get(), firstTip: value }),
      resetTip: () => set({ ...get(), currentStep: 1, firstTip: true }),
    }),
    {
      name: StorageKeys.TIP_TRIP,
      partialize: (state) => ({
        firstTip: state.firstTip,
      }),
    }
  )
)