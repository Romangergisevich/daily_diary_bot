/// <reference types="react-scripts" />

interface TelegramWebAppInitDataUnsafe {
  user: {
    id: number;
    is_bot: boolean;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
  };
  chat: {
    id: number;
    title: string;
    username: string;
    type: "private" | "group" | "supergroup" | "channel";
  };
  query_id: string;
  auth_date: number;
  hash: string;
}

interface TelegramWebAppMainButton {
  isVisible: boolean;
  text: string;
  color: string;
  command: string;

  show(): void;
  hide(): void;
  setText(text: string): void;
  setColor(color: string): void;
  setCommand(command: string): void;
  onClick(callback: () => void): void;
}

interface TelegramWebApp {
  initData: string;
  initDataUnsafe: TelegramWebAppInitDataUnsafe;
  fullscreen: boolean;
  colorScheme: "light" | "dark"; // добавляем ограничение для цветов
  isExpanded: boolean;
  isClosing: boolean;

  MainButton: TelegramWebAppMainButton;

  close(): void;
  ready: () => void;
  openLink(url: string): void;
  sendData(data: string): void;
  getBackgroundColor(): string; // Метод получения цвета фона
  getTextColor(): string; // Метод получения цвета текста
  getChat(): TelegramWebAppInitDataUnsafe["chat"]; // Получить данные чата
  getUser(): TelegramWebAppInitDataUnsafe["user"]; // Получить данные пользователя
  navigateBack(): void; // Вернуться на предыдущий экран
  onEvent(eventType: string, callback: (data?: any) => void): void; // Подписка на события
  offEvent(eventType: string): void; // Отписка от событий

  // События
  onResize(callback: (data: { height: number; width: number }) => void): void;
  offResize(callback: (data: { height: number; width: number }) => void): void;

  // Другие существующие методы, если такие имеются
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp;
  };
}
