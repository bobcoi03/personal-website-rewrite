import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./globalRedux/features/counter/counterSlice";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src="/icon.jpeg" className="w-52 rounded-lg shadow-2xl" />
        <div className="">
          <h1 className="text-5xl font-bold">Hi! 👋</h1>
          <p className="py-4">I'm Minh. This is my personal website where you can explore what I'm working on and writting about.</p>
          <p>I am most interested in AI, finance/investing and social apps.</p>
        </div>
      </div>
    </div>
  )
}


