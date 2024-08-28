import { notifications } from "@mantine/notifications";
import { modals } from "@mantine/modals";
import { IconCheck, IconX } from "@tabler/icons-react";
import { AxiosErrorModal } from "../component/AxiosErrorModal";
import React from "react";

export function showSuccessNotification(message: string) {
  return notifications.show({
    color: "hsl(var(--primary))",
    icon: React.createElement(IconCheck, {}),
    title: "Success",
    message: message,
  });
}

export function showErrorNotification(message: string, type = "Error") {
  return notifications.show({
    color: "hsl(var(--destructive))",
    icon: React.createElement(IconX, {}),
    title: type,
    message: message,
  });
}

export function showAxiosErrorModal(statusCode: number) {
  return modals.open({
    size: "xl",
    color: "#E03131",
    centered: true,
    children: <AxiosErrorModal statusCode={statusCode} />,
  });
}
