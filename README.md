# 🚀 Crowdcube — A Crowdfunding Web Application

Crowdcube is a MERN-based crowdfunding platform where users can raise funds for personal, creative, or startup campaigns and invite others to donate. This full-stack application includes protected routes, secure login, responsive design, and complete CRUD functionalities.

---

## 🔗 Live Links

- 🌐 **Live Website**: [https://croudcube.netlify.app/]
- 💻 **Client GitHub Repo**: [https://github.com/jisan-05/crowdcube-client]
- 🖥️ **Server GitHub Repo**: [https://github.com/your-username/crowdcube-server]

---

## 📌 Key Features (Minimum 5 points as required)

- ✅ Secure Email/Password Login with Google Authentication
- ✅ Add, View, Update, and Delete Campaigns (CRUD)
- ✅ Responsive UI for Mobile, Tablet, and Desktop
- ✅ Protected Routes for sensitive pages like Add Campaign, My Campaigns, and My Donations
- ✅ Realtime Donation Tracking with Data Stored in MongoDB
- ✅ Firebase Config & MongoDB Credentials Secured via `.env`
- ✅ Error/Success handled using SweetAlert/Toast, not default alerts
- ✅ Campaign Sorting by Minimum Donation Amount
- ✅ Deadline-based campaign validation (no donation if expired)

---

## 🧾 Assignment Requirements Checklist

### ✅ Layout Structure
- 🔹 Navbar: Logo + Routes (Home, All Campaigns, Add Campaign, My Campaign, My Donations, Login/Register)
- 🔹 Conditional buttons based on login status
- 🔹 Shows photoURL and displayName on hover
- 🔹 Logout available when logged in
- 🔹 Footer on all pages except 404

### ✅ Home Page
- 🖼️ Banner/Slider with 3 slides and meaningful content
- 📣 Running Campaign section (6 cards from DB)
- ➕ 2 Extra Sections (e.g., How It Works, Testimonials)
- 🟢 “See More” button redirects to `/campaign/:id` details page

### ✅ Authentication
- 📄 Login: Email/Password + Google Login + Redirect Link to Register
- 📄 Register: Validates password with rules (uppercase, lowercase, 6+ chars)
- 🚫 No email verification or forgot password
- 🔐 Protected Routes handled correctly

### ✅ Add New Campaign `/addCampaign`
- Form includes:
  - Image URL, Title, Type (Dropdown), Description
  - Minimum Donation, Deadline, User Name (readonly), User Email (readonly)
- 🧾 Shows success toast on successful submission

### ✅ Details Page `/campaign/:id`
- 🔐 Private route
- 🖼️ Full campaign details shown
- 💳 Donate button stores campaign info + user data to `donated` collection
- ❌ If deadline passed, disables donation and shows error/toast

### ✅ All Campaign Page `/campaigns`
- 📋 Table view of all campaigns
- 🔍 Sort by Minimum Donation Amount (asc/desc)
- 🔗 “See More” redirects to campaign details page

### ✅ My Campaigns `/myCampaign`
- 🔐 Private route
- 📊 Table of user-specific campaigns
- ✏️ Update → Redirects to `/updateCampaign/:id`
- 🗑️ Delete → Shows confirmation before removing

### ✅ Update Campaign `/updateCampaign/:id`
- 🔐 Private route
- 📝 Form with all fields pre-filled (User info read-only)
- ✅ Success message on update via toast/sweetalert

### ✅ My Donations `/myDonations`
- 🔐 Private route
- 💳 Card format showing user’s donation history

---

## 🎨 Unique Design
- No copied templates, no examples from modules
- Built from scratch with creative layout & styling
- Fully responsive across all device sizes

---

## ⚙️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, DaisyUI, React Router DOM, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, CORS
- **Authentication**: Firebase Auth
- **Hosting**: Netlify (Client), Vercel (Server)
- **Extra Libraries**:
  - `react-awesome-reveal`
  - `react-simple-typewriter`
  - `sweetalert2`
  - `react-toastify`
  - `lottie-react`

---
