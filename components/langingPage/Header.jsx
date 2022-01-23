function Header() {
  return (
    <div className="grid grid-rows-1 ">
        <div>
            <h1>Build your library</h1>
            <h3>Upload, share, review any book</h3>
            <button>View all</button>
        </div>
        <div>
            <img src="/images/reading.png" className="w-96" alt="" />
        </div>
    </div>
  );
}

export default Header;
