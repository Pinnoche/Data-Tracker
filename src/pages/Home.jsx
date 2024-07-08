import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='mx-auto'>
      <h4>WELCOME TO DISCO</h4>
      <Link to='/disco/aedc'>
      <div className='bg-black text-center rounded-md px-2 py-3 text-green-400 mx-auto max-w-sm'>
            AEDC
      </div>
      </Link>

    </div>
  )
}

export default Home
