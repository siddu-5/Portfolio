function Layout({ children, className = "" }) {
  return (
    <div
      className={`
        relative
        mx-auto
        w-full
        max-w-7xl
        px-6
        lg:px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Layout;