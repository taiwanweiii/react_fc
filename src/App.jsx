import { useState } from "react";
import "./App.css";
import { toast } from "sonner";
import TanStackVirtual from "./TanStackVirtual/index";

function showNotification() {
    toast.warning("這是一個警告通知！");
}
function App() {
    const [data, setData] = useState([
        { id: 0, post: "您好，第 1 則貼文" },
        { id: 1, post: "您好，第 2 則貼文" },
        { id: 2, post: "您好，第 3 則貼文" },
        { id: 3, post: "您好，第 4 則貼文" },
        { id: 4, post: "您好，第 5 則貼文" },
        { id: 5, post: "您好，第 6 則貼文" },
        { id: 6, post: "您好，第 7 則貼文" },
    ]);

    const renderItem = index => {
        return <div>{index}</div>;
    };

    return (
        <>
            <div>
                <h1>我的應用程式</h1>
                <button onClick={showNotification}>顯示成功通知</button>
            </div>
            <div style={{ height: "400px" }}>
                <TanStackVirtual
                    totalCount={9999}
                    data={data}
                    renderItem={renderItem}
                />
            </div>
        </>
    );
}

export default App;
