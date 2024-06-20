import Image from "next/image";
import Greet from "./components/Greet";
// import Form from '../app/components/Form'
export default function Home() {
  return (
    <main className="text-center">
      {/* <Form/> */}
      <h1 className="text-5xl text-slate-800 font-semibold mx-auto text-center mt-11">Testing </h1>
      <Greet  name='developer'/>
    </main>
  );
}
