import "./App.css";
import Layout from "./Layout";
import MainHeader from "./MainHeader";
import MainContent from "./MainContent";
import SearchResult from "./SearchResult";
import LeftPanel from "./LeftPanel";
import Posts from "./Posts";
import { Routes, Route } from "react-router";

export default function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const pageId = import.meta.env.VITE_MAIN_PAGE_ID;

  return (
    <Layout
      leftPane={<LeftPanel apiUrl={apiUrl} />}
      mainPane={
        <>
          <MainHeader />
          <Routes>
            <Route
              path="/posts/author/:name"
              element={<Posts apiUrl={apiUrl} />}
            />
            <Route path="/posts/:postId" element={<Posts apiUrl={apiUrl} />} />
            <Route
              path="/*"
              element={<MainContent apiUrl={apiUrl} pageId={pageId} />}
            />
            <Route path="/search/result" element={<SearchResult />} />
          </Routes>
        </>
      }
    />
  );
}
