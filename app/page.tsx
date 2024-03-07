import Image from "next/image";
import { Navbar } from "./navbar";

export default function Home() {
    return (
        <div className="text-center">
            <Navbar />
            <h1>Welcome to my bio page</h1>
        </div>
    );
}
