const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Basic Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#00779B',
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;