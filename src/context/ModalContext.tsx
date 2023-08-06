import { createContext, useEffect, useState } from 'react';

interface IModalContext {
  login?: () => void;
  logout?: () => void;
  isAuthorized: boolean;
  setIsAuthorized?: (value: boolean) => void;
}

const ModalContext = createContext<IModalContext>({
  isAuthorized: false,
  setIsAuthorized: () => {},
});

export function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthorized, setIsAuthorized] = useState(() =>
    Boolean(localStorage.getItem('user'))
  );

  useEffect(() => {
    const user = Boolean(localStorage.getItem('user'));
    setIsAuthorized(user);
  }, []);

  const login = () => {
    localStorage.setItem('user', 'true');
    setIsAuthorized(true);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setIsAuthorized(false);
  };

  return (
    <ModalContext.Provider value={{ isAuthorized, login, logout }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
