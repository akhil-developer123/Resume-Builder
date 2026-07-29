// Dashboard Card ki CSS
import "../styles/DashboardCard.css";

// Reusable Dashboard Card Component
function DashboardCard({ icon, title, onClick }) {

    return (

        <div
            className="dashboard-card"
            onClick={onClick}
        >

            {/* Card Icon */}
            <div className="card-icon">
                {icon}
            </div>

            {/* Card Title */}
            <h3>
                {title}
            </h3>

        </div>

    );

}

export default DashboardCard;