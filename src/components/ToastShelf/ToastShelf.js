import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toastList: data, removeFromToastList: onCloseItem, clearToastList } = React.useContext(ToastContext);

  React.useEffect(() => {
    function handleKeyDown(event){
      if (event.code === 'Escape') {
        clearToastList();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [clearToastList]);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {data.map(({ id, message, variant }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast variant={variant} onClose={() => onCloseItem(id)}>{message}</Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
