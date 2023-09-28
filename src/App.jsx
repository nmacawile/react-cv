import Header from "./components/Header.jsx";
import TabbedContent from "./components/TabbedContent.jsx";
import { DataProvider } from "./contexts/DataContext.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <DataProvider>
        <TabbedContent></TabbedContent>
      </DataProvider>
    </>
  );
}

export default App;
