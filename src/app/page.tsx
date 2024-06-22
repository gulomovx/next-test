import Image from "next/image";
import Greet from "./components/Greet";
import UserAccount from "./components/UserAccount";
import { User } from "@/entities";
// import Form from '../app/components/Form'
export default function Home() {
  return (
    <main className="text-center">
      {/* <Form/> */}
      <h1 className="text-5xl text-slate-800 font-semibold mx-auto text-center mt-11">
        Testing{" "}
      </h1>
      <Greet name="developer" />
      {/* <UserAccount user={}/> */}
    </main>
  );
}
