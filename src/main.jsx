import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
const BusinessStatistics = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted!");
  };

  return (
    <div className="container">
      <div className="text-container">
        <h2>Always Track & Analyze Your Business Statistics To Succeed.</h2>
        <p>A better way to manage your sales, team, clients & marketing — on a single platform. Powerful, affordable & easy.</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your email" />
          <button type="submit">Get started</button>
        </form>
        <img src="https://first-react-project-gilt.vercel.app/assets/paymentIcons-BtX_6OgX.svg"  alt="Company Logo" className="logo" />
        
      </div>
      <div className="image-container">
        <img src="https://first-react-project-gilt.vercel.app/assets/topIcon-C5yd8zOo.svg" alt="Business Statistics" />
        
      </div>
    </div>
  );
}

export default BusinessStatistics;