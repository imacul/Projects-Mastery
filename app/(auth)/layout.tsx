const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex-center bg-dotted-pattern bg-cover bg-center bg-fixed min-h-screen w-full bg-gradient">
            {children}
        </div>
    )
}

export default Layout;