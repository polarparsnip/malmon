import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import * as React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

interface IUserContext {
    userLoggedIn: { login: boolean; user: { id: number, username: string, admin: boolean } };
    setUserLoggedIn: React.Dispatch<React.SetStateAction<{ login: boolean; 
      user: { id: number, username: string, admin: boolean } }>>;
    logOut: () => void;
}
  
export const UserContext = createContext<IUserContext>({
    userLoggedIn: { login: false, user: { id: -1, username: '', admin: false } },
    setUserLoggedIn: () => {},
    logOut: () => {},
})


export function AppWrapper({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    const [userLoggedIn, setUserLoggedIn] = useState({
        login: false,
        user: { id: -1, username: '', admin: false },
    });

    // const [login, setLogin] = useState({});

    const logOut = () => {
      setUserLoggedIn({ login: false, user: { id: -1, username: '', admin: false }});
      Cookies.remove('token');
      Cookies.remove('user');
      router.push('/')
    }

    useEffect(() => {   
        const storedUser = Cookies.get('user');

        if (storedUser) {
          setUserLoggedIn(JSON.parse(storedUser));
        }
    }, []);

    const checkTokenExpiration = async () => {
      const token = Cookies.get('token');
      if (token) {
        let tokenData;

        try {
          const tokenPayload = atob(token.split('.')[1]);
          tokenData = JSON.parse(tokenPayload);

          const currentTime = Math.floor(Date.now() / 1000);

          if (tokenData.exp && tokenData.exp < currentTime) {
            logOut();
          }

        } catch (error) {
            console.error('Error parsing token:', error);
        }
      }
  };

  useEffect(() => {
    checkTokenExpiration();
  });

    return (
        <UserContext.Provider value={{ logOut, userLoggedIn, setUserLoggedIn }}>
        { children }
        </UserContext.Provider>
    );
}

export function useUserContext() {
  return useContext(UserContext);
}