export const alertBus = new EventTarget();

export function triggerAlert() {
  alertBus.dispatchEvent(new CustomEvent("trigger"));
}
