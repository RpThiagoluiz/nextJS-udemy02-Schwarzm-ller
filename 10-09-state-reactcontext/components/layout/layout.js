import { Fragment } from "react";
import Notification from "../../components/ui/notification";
import MainHeader from "./main-header";
import { notificationCtx } from "../../store/notification-context";

function Layout(props) {
  //const notificationCtx = useContext(notificationCtx)
  //const activeNotification = notificationCtx.notification
  const { notification } = notificationCtx();
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
