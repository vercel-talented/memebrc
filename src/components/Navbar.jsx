const Navbar = () => {
    return (
        <>
            <nav className="bg-black fixed w-full z-20 top-0 start-0 justify-between items-center flex">
                <div className="meme-logo">
                    <img src="https://www.memebrc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.a71993e2.png&w=1080&q=75" />
                </div>
                <div className="social-icon">
                    <div className="flex space-x-6">
                        <img src="https://www.memebrc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-x.3e999369.png&w=256&q=75" />
                        <img src="https://www.memebrc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-telegram.99f592e5.png&w=256&q=75" />
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar;