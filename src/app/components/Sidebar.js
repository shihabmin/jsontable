const Sidebar = () => {
  return (
    <div className="drawer absolute pt-[64px] h-screen lg:drawer-open">
      <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
