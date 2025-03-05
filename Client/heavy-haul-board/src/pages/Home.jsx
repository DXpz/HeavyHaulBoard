// src/pages/Home.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Board from "../components/Board";

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div style={styles.container}>
            <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div style={styles.content}>
                <Board />
                <Sidebar
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    content: {
        display: "flex",
        flex: 1,
        position: "relative",
    },
};

export default Home;