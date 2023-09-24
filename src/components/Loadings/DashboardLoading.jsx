const DashboardLoading = () => {
    return (
        <div className="flex animate-pulse gap-4">
            <div className="w-full h-64 bg-gray-200 rounded-md"></div>
            <div className="w-full h-64 bg-gray-200 rounded-md"></div>
            <div className="w-full h-64 bg-gray-200 rounded-md hidden md:block"></div>
            <div className="w-full h-64 bg-gray-200 rounded-md hidden md:block"></div>
            <div className="w-full h-64 bg-gray-200 rounded-md hidden md:block"></div>
            <div className="w-full h-64 bg-gray-200 rounded-md hidden md:block"></div>
        </div>
    )
}

export default DashboardLoading