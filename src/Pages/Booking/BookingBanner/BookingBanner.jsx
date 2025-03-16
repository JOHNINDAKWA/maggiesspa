import './BookingBanner.css'

const BookingBanner = () => {
  return (
    <div className="booking-banner">
    <div className="booking-banner-overlay">
      <h2>Maggies P&P Spa Appointment</h2>
      <p className="breadcrumb">
        <span>Home</span> &gt;&gt; <span className="active">Make An Appointment</span>
      </p>
    </div>
  </div>
  )
}

export default BookingBanner
