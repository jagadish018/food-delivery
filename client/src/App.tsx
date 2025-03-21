import React from "react";
import RestaurantList from "./components/RestaurantList";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <RestaurantList />
    </div>
  );
};

export default App;
