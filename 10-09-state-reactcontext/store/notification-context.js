import { createContext, useState, useEffect, useContext } from "react";

const initialData = {
  notification: null, // { title, message, status }
  showNotification: (notificationData) => {}, //:function (notificationData) {},
  hideNotification: () => {}, //: function () {},
};

export const NotificationContext = createContext(initialData);

export function NotificationContextProvider({ children }) {
  const [activeNotification, setActiveNotification] = useState(null); //null ||  { title, message, status }

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  //Ao inves de vc passar o objeto desestruturado vc passa ele aq e envia pro value
  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
}

export const notificationCtx = () => useContext(NotificationContext);
