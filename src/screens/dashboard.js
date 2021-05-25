function DashboardScreen() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <h1>Dashboard</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-2">
                    <div>
                        <h1>150</h1>
                        <p>Total Leads</p>
                    </div>
                    <div>
                        <h1>120</h1>
                        <p>Total Cold Leads</p>
                    </div>
                </div>
                <div className="col-sm-5">
                    <div className="border border-success" style={{height: '300px'}}>
                        <h1>Leads by Courses</h1>
                    </div>
                </div>
                <div className="col-sm-5">
                    <div className="border border-success"  style={{height: '300px'}}>
                        <h1>Leads by Sources</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardScreen;