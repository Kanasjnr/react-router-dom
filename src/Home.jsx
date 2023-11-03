import Feed  from "./Feed"



const Home = ({ posts, fetchError,isLoading}) => {
  return (
    <main className="Home">
     {isLoading && <p className="statusMsg"></p>}
    </main>
  )
}

export default Home