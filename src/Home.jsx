import Feed  from "./Feed"



const Home = ({ posts, fetchError,isLoading}) => {
  return (
    <main className="Home">
     {isLoading && <p className="statusMsg">Loading Post...</p>}
     {!isLoading && fetchError && <p className="statusMsg"></p>}
    </main>
  )
}

export default Home