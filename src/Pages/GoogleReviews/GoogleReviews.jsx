// src/Pages/Reviews/GoogleReviews.jsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./GoogleReviews.css";

const MOCK_REVIEWS = [
  { name: "Trevor", reviewsCount: 0, photosCount: 0, rating: 5, relativeTime: "Yesterday", text: "" },
  { name: "Kimsley Sungu", reviewsCount: 0, photosCount: 0, rating: 5, relativeTime: "10 weeks ago", text: "" },
  { name: "Maggie Amanda", reviewsCount: 3, photosCount: 8, rating: 5, relativeTime: "10 weeks ago", text: "" },
  { name: "Joseph Kulundu", reviewsCount: 0, photosCount: 0, rating: 5, relativeTime: "11 weeks ago", text: "" },
  { name: "Nicole Naomi", reviewsCount: 0, photosCount: 0, rating: 5, relativeTime: "12 weeks ago", text: "" },
  { name: "Brenda Anindo", reviewsCount: 0, photosCount: 0, rating: 5, relativeTime: "12 weeks ago", text: "" },
  { name: "Rita Nekesa", reviewsCount: 0, photosCount: 0, rating: 5, relativeTime: "12 weeks ago", text: "" },
];

const Stars = ({ value = 0 }) => {
  const full = Math.round(value);
  return (
    <span className="gr-stars" aria-label={`${full} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) =>
        i < full ? <FaStar key={i} /> : <FaRegStar key={i} />
      )}
    </span>
  );
};

const Avatar = ({ name }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return <div className="gr-avatar">{initials}</div>;
};

const GoogleReviews = () => {
  const stats = useMemo(() => {
    const count = MOCK_REVIEWS.length;
    const avg =
      count === 0
        ? 0
        : MOCK_REVIEWS.reduce((a, r) => a + (r.rating || 0), 0) / count;
    return { count, avg: Number(avg.toFixed(1)) };
  }, []);

  return (
    <div className="gr-page">
      {/* Breadcrumb / actions */}
      <div className="gr-topbar">
        <nav className="gr-breadcrumb">
          <Link to="/dashboard">Dashboard</Link>
          <span>/</span>
          <span className="gr-current">Google Reviews</span>
        </nav>
        <div className="gr-actions">
          <span className="gr-badge">Mock Data</span>
        </div>
      </div>

      {/* Header summary */}
      <header className="gr-header">
        <div className="gr-title">
          <img src="/logo.png" alt="Logo" className="gr-logo" />
          <div>
            <h1>Google Reviews</h1>
            <p>What clients are saying about us</p>
          </div>
        </div>

        <div className="gr-summary">
          <div className="gr-score">
            <div className="gr-score-num">{stats.avg}</div>
            <Stars value={stats.avg} />
            <div className="gr-score-sub">{stats.count} total reviews</div>
          </div>
          <div className="gr-help">
            <p>Live sync coming soon.</p>
            <p className="gr-hint">
              Later, we’ll replace this with Google Places API data.
            </p>
          </div>
        </div>
      </header>

      {/* Grid of reviews */}
      <section className="gr-grid">
        {MOCK_REVIEWS.map((r, idx) => (
          <article key={idx} className="gr-card">
            <header className="gr-card-head">
              <Avatar name={r.name} />
              <div className="gr-meta">
                <div className="gr-name">{r.name}</div>
                <div className="gr-sub">
                  {r.reviewsCount} reviews • {r.photosCount} photos
                </div>
              </div>
              <div className="gr-right">
                <Stars value={r.rating} />
                <div className="gr-time">{r.relativeTime}</div>
              </div>
            </header>

            {r.text ? (
              <p className="gr-text">{r.text}</p>
            ) : (
              <p className="gr-text gr-muted">
                (This reviewer didn’t leave a written comment.)
              </p>
            )}

            <footer className="gr-card-foot">
              <span className="gr-chip">Google</span>
              <button className="gr-cta" disabled>
                View on Google
              </button>
            </footer>
          </article>
        ))}
      </section>
    </div>
  );
};

export default GoogleReviews;


// import React, { useEffect, useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaChevronRight, FaSyncAlt, FaSearch, FaStar, FaFilter
// } from "react-icons/fa";
// import "./GoogleReviews.css";


//  VITE_GOOGLE_MAPS_API_KEY = your browser-restricted key (HTTP referrers)
//  VITE_GOOGLE_PLACE_ID     = your business Place ID


// const API_KEY   = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
// const PLACE_ID  = import.meta.env.VITE_GOOGLE_PLACE_ID;

// function loadGooglePlacesScript(key) {
//   return new Promise((resolve, reject) => {
//     if (window.google?.maps?.places) return resolve();
//     const scriptId = "gmaps-places-sdk";
//     if (document.getElementById(scriptId)) return resolve();

//     const s = document.createElement("script");
//     s.id = scriptId;
//     s.async = true;
//     s.defer = true;
//     s.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
//     s.onload = () => resolve();
//     s.onerror = reject;
//     document.body.appendChild(s);
//   });
// }

// const Star = ({ filled }) => (
//   <FaStar className={filled ? "star filled" : "star"} aria-hidden="true" />
// );

// export default function GoogleReviews() {
//   const [loading, setLoading] = useState(true);
//   const [placeName, setPlaceName] = useState("");
//   const [rating, setRating] = useState(null);
//   const [total, setTotal] = useState(0);
//   const [reviews, setReviews] = useState([]);
//   const [error, setError] = useState("");


//   const [query, setQuery] = useState("");
//   const [minStars, setMinStars] = useState(0);
//   const [sort, setSort] = useState("newest");

//   const filtered = useMemo(() => {
//     let r = [...reviews];
//     if (minStars > 0) r = r.filter(x => x.rating >= minStars);
//     if (query.trim()) {
//       const q = query.toLowerCase();
//       r = r.filter(x =>
//         x.text.toLowerCase().includes(q) ||
//         (x.author_name || "").toLowerCase().includes(q)
//       );
//     }
//     if (sort === "newest") r.sort((a,b)=> b.time - a.time);
//     if (sort === "highest") r.sort((a,b)=> b.rating - a.rating || b.time - a.time);
//     if (sort === "lowest") r.sort((a,b)=> a.rating - b.rating || b.time - a.time);
//     return r;
//   }, [reviews, minStars, query, sort]);

//   const refresh = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       if (!API_KEY || !PLACE_ID) {
//         throw new Error("Missing API key or Place ID env vars.");
//       }
//       await loadGooglePlacesScript(API_KEY);

//       const el = document.createElement("div"); 
//       const svc = new window.google.maps.places.PlacesService(el);
//       svc.getDetails(
//         {
//           placeId: PLACE_ID,
//           fields: [
//             "name", "rating", "user_ratings_total",
//             "reviews" 
//           ],
//         },
//         (res, status) => {
//           if (status !== window.google.maps.places.PlacesServiceStatus.OK || !res) {
//             setError("Could not load reviews.");
//             setLoading(false);
//             return;
//           }
//           setPlaceName(res.name || "Google Reviews");
//           setRating(res.rating || null);
//           setTotal(res.user_ratings_total || 0);

//           const mapped = (res.reviews || []).map(r => ({
//             author_name: r.author_name,
//             profile_photo_url: r.profile_photo_url,
//             rating: r.rating,
//             text: r.text || "",
//             time: r.time ? r.time * 1000 : Date.now(), // ms
//             relative_time_description: r.relative_time_description
//           }));
//           setReviews(mapped);
//           setLoading(false);
//         }
//       );
//     } catch (e) {
//       console.error(e);
//       setError(e.message || "Something went wrong.");
//       setLoading(false);
//     }
//   };

//   useEffect(() => { refresh(); }, []);

//   return (
//     <div className="reviews-page">
     
//       <div className="reviews-header">
//         <nav className="rv-breadcrumb" aria-label="Breadcrumb">
//           <Link to="/dashboard" className="crumb">Dashboard</Link>
//           <FaChevronRight className="crumb-sep" aria-hidden="true" />
//           <span className="crumb current">Google Reviews</span>
//         </nav>

//         <div className="reviews-actions">
//           <button className="btn btn-ghost" onClick={refresh}>
//             <FaSyncAlt className="btn-ic" /> Sync Now
//           </button>
//         </div>
//       </div>

//       <section className="reviews-summary">
//         <div className="summary-left">
//           <h2 className="place-name">{placeName || "Google Reviews"}</h2>
//           <div className="avg-rating">
//             <div className="rating-number">{rating ?? "—"}</div>
//             <div className="stars" aria-label={`Average rating ${rating || "unknown"}`}>
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <Star key={i} filled={rating ? i < Math.round(rating) : false} />
//               ))}
//             </div>
//             <div className="total">Based on {total} reviews</div>
//           </div>
//         </div>

//         <div className="summary-right">
//           <div className="search">
//             <FaSearch className="search-ic" />
//             <input
//               type="text"
//               placeholder="Search reviews..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//           </div>

//           <div className="filters">
//             <div className="filter">
//               <FaFilter className="f-ic" />
//               <select value={minStars} onChange={(e)=>setMinStars(Number(e.target.value))}>
//                 <option value={0}>All ratings</option>
//                 <option value={5}>5★ only</option>
//                 <option value={4}>4★ & up</option>
//                 <option value={3}>3★ & up</option>
//                 <option value={2}>2★ & up</option>
//                 <option value={1}>1★ & up</option>
//               </select>
//             </div>
//             <div className="filter">
//               <select value={sort} onChange={(e)=>setSort(e.target.value)}>
//                 <option value="newest">Newest first</option>
//                 <option value="highest">Highest rated</option>
//                 <option value="lowest">Lowest rated</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </section>

  
//       <section className="reviews-list">
//         {loading && (
//           <div className="loading">
//             <div className="spinner" />
//             <p>Loading reviews…</p>
//           </div>
//         )}

//         {!loading && error && (
//           <div className="alert">
//             <p>{error}</p>
//           </div>
//         )}

//         {!loading && !error && filtered.length === 0 && (
//           <div className="empty">
//             <p>No reviews to show yet.</p>
//           </div>
//         )}

//         {!loading && !error && filtered.length > 0 && (
//           <ul className="cards" role="list">
//             {filtered.map((r, idx) => (
//               <li key={idx} className="card">
//                 <div className="card-head">
//                   <img
//                     src={r.profile_photo_url || "https://i.pravatar.cc/80?u=" + (r.author_name || idx)}
//                     alt=""
//                     className="avatar"
//                     referrerPolicy="no-referrer"
//                   />
//                   <div className="who">
//                     <div className="name">{r.author_name || "Google User"}</div>
//                     <div className="sub">
//                       <span className="stars small" aria-hidden="true">
//                         {Array.from({length:5}).map((_,i)=>(
//                           <Star key={i} filled={i < (r.rating || 0)} />
//                         ))}
//                       </span>
//                       <span className="time">
//                         {r.relative_time_description ||
//                           new Date(r.time).toLocaleDateString()}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text">{r.text || "—"}</p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </section>
//     </div>
//   );
// }
