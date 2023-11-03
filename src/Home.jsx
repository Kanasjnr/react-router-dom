import Feed  from "./Feed"



const Home = ({ posts, fetchError,isLoading}) => {
  return (
    <main className="Home">
     {isLoading && <p className="statusMsg">Loading Post...</p>}
     {!}
    </main>
  )
}

export default Home