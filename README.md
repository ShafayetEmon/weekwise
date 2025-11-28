# WeekWise - Life Calendar Visualizer

![WeekWise Banner](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?style=for-the-badge&logo=tailwind-css)

**WeekWise** is a beautiful and meaningful React application that visualizes your life as a grid of weeks. Each square represents one week of your life, helping you gain perspective on time and mark important moments in your journey.

## ✨ Features

- 📅 **Visual Timeline** - See your entire life represented as weeks in a beautiful grid
- 🎨 **Event Marking** - Click any week to add memorable events with custom colors
- 👁️ **Flexible Views** - Switch between viewing your entire life, last 10 years, 5 years, or 1 year
- 💾 **Persistent Storage** - All data saved locally in your browser using localStorage
- 🎯 **Current Week Highlight** - Always see where you are in your timeline
- 📱 **Responsive Design** - Works beautifully on desktop and mobile devices
- 🔒 **Privacy First** - All data stays on your device, no backend required

## 🌐 Live Demo

**Visit the live application:** [https://weekwise-nu.vercel.app](https://weekwise-nu.vercel.app/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
   git clone https://github.com/ShafayetEmon/weekwise.git
   cd weekwise
```

2. **Install dependencies**

```bash
   npm install
```

3. **Start the development server**

```bash
   npm run dev
```

4. **Open your browser**

```
   Navigate to http://localhost:5173
```

## 🎯 Usage

1. **Initial Setup**: Enter your birthdate to begin
2. **Explore**: View the grid where each square represents one week of your life
3. **Add Events**: Click on any past week to add a memorable event
4. **Customize**: Choose a color and add a title for each event
5. **Switch Views**: Use the view buttons to focus on different time periods
6. **Review Events**: Scroll down to see a list of all your marked events

## 🛠️ Tech Stack

- **React 19.2** - UI library
- **Vite 7.2** - Build tool and dev server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Lucide React 0.555** - Beautiful icon library
- **localStorage API** - Client-side data persistence

## 📁 Project Structure

```
weekwise/
├── public/
│   ├── favicon.svg
├── src/
│   ├── components/
│   │   ├── SetupScreen.jsx
│   │   ├── CalendarHeader.jsx
│   │   ├── CalendarGrid.jsx
│   │   ├── EventModal.jsx
│   │   └── EventsList.jsx
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   └── useCalendar.js
│   ├── utils/
│   │   └── dateUtils.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🧩 Key Components

### Custom Hooks

- **useLocalStorage**: Manages localStorage with React state synchronization
- **useCalendar**: Encapsulates all calendar business logic and state management

### Utility Functions

- **calculateWeeksLived**: Converts birthdate to weeks
- **getWeekDate**: Gets the date for a specific week index
- **weeksToYears**: Converts weeks to years
- **getWeeksToShow**: Calculates weeks based on view period

### Components

- **SetupScreen**: Initial birthdate input screen
- **CalendarHeader**: Displays stats and view period controls
- **CalendarGrid**: Main week grid visualization
- **EventModal**: Modal for adding/editing events
- **EventsList**: Displays saved events list

## 🎨 Color System

The app uses a semantic color system:

- **Gray (#cbd5e1)**: Past weeks
- **Green (#10b981)**: Current week
- **Custom Colors**: User-selected event colors (blue, red, green, orange, purple, pink)

## 💡 Learning Outcomes

Building this project teaches:

1. **Component Architecture**: Breaking UI into reusable pieces
2. **Custom Hooks**: Creating reusable stateful logic
3. **State Management**: Managing complex application state
4. **localStorage**: Client-side data persistence
5. **Date Manipulation**: Working with JavaScript Date objects
6. **Event Handling**: User interactions and form handling
7. **Responsive Design**: Mobile-first CSS with Tailwind
8. **Performance**: Efficient rendering of large datasets

## 👨‍💻 Author

**Md Shafayet Jamil**

- GitHub: [ShafayetEmon](https://github.com/ShafayetEmon)
- LinkedIn: [Md Shafayet Jamil](https://linkedin.com/in/shafayetemon)

## 🙏 Acknowledgments

- Inspired by the "Your Life in Weeks" concept by Tim Urban (Wait But Why)
- Built with ❤️ using React and Tailwind CSS
- Icons provided by [Lucide](https://lucide.dev/)
