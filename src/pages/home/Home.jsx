import Header from "../../header/Header"
import "./home.css"

export default function Home() {
  return (
    <>
      <Header />
      <div className='home'>
        <posts />
        <sidebar />
      </div>
    </>
  )
}
