import { FC } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";

import "./style/global.css";

const App: FC = () => {
    return (
        <Layout>
            <Home />
        </Layout>
    );
};

export default App;
