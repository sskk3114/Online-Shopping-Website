export default function Loading () {
    const loadingStyle = {
        fontSize: 50,
        color: 'blue',
        margin: 180,
    }
    const div = {
        backgroundColor: '#F8F5F8'
    }
    return (
        <div style={div}>
            <i className="fa fa-spinner" style={loadingStyle} aria-hidden="true"></i>
        </div>
    )
}