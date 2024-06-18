import { createContext, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Main from "./components/main/Main";
import "./App.css";
import { navItems } from "./utils/constants";

export interface IPageContext {
  page: string;
  setPage: (newValue: string) => void;
}

//1. создание контекста
// export const PageContext = createContext<((newValue:string) => void) |null>(null);
export const PageContext = createContext<IPageContext | null>(null);

function App() {
  
  const [page, setPage] = useState(navItems[0]);

    console.log(page);

    return (
      <>
        {/* 2. передача данных контекстом */}
        <PageContext.Provider value={{ page, setPage }}>
          <Header />
          <Main />
        </PageContext.Provider>

        <Footer />
      </>
    );
  }

export default App;

//12
