
export const Navbar = () => {
  return (
    <nav className='fixed w-full h-12 top-0 left-0 p-2 shadow-md backdrop-filter backdrop-blur-sm'>
        <div className='flex items-center justify-between'>
            <div>
                <h1 className='text-xl font-bold tracking-wider'>Logo</h1>
            </div>
            <ul className='flex items-center gap-4'>
                <li>
                    <a href="/">Homepage</a>
                </li>
                <li>
                    <a href="/product">Product</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
