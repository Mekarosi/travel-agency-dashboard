import { Header } from "../../../components"

const Dashboard = () => {
    const user = { name: "Mekarosi" }
    return (
        <main className="dashboard wrapper">
            <Header 
                title={`Welcome ${user?.name ?? "Guest"} `}
                description="Track activity, trends and populate destinations in real time"
            />
        Dashboard Page Contents
        
        </main>
    )
}
export default Dashboard