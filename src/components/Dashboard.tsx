import NavBar from "./Navbar"
import Sidebar from "./Sidebar"
import UserForm from '../components/UserForm';
import { Route } from "react-router-dom";

const Dashboard = () => {

    return(

        <div className="container w-screen max-w-full-screen h-screen bg-main-background">
            <header>
                <NavBar/>
            </header>
            <main className="flex w-screen">
                <section className="w-1/5">
                    <Sidebar/>
                </section>
                <main className="flex flex-col items-center w-4/5">
                    <UserForm/>
                    sw
                </main>
            </main>
        </div>
    )

}

export default Dashboard