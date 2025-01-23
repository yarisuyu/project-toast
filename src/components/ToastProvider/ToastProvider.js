import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toastList, setToastList] = React.useState([]);

  const addToToastList = React.useCallback((message, variant) => {
    const newId = crypto.randomUUID();
    const newToastList = [...toastList, { id: newId, message, variant }];
    setToastList(newToastList);
  }, [toastList]);

  const removeFromToastList = React.useCallback(itemId => {
    const newToastList = [...toastList.filter(({ id }) => id !== itemId)];
    setToastList(newToastList);
  }, [toastList]);

  const clearToastList = React.useCallback(() => {
    setToastList([]);
  }, []);

  return <ToastContext.Provider value={{ toastList, addToToastList, removeFromToastList, clearToastList }}>
    {children}
  </ToastContext.Provider>;
}

export default ToastProvider;
