import RecipeList from "./RecipeList";
import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <h1>Recipe Journal</h1>
        <h2>
          This webpage was created with the intent, that users could easily
          save, edit and delete their desired recipes whenever they wanted. This
          is a digital replacement to notebooks, as the content written on them
          could be lost with the slightest of misconduct. You can create a whole
          journal regarding your recipes on this page, and with our future
          updates, these journals would be accessible across multiple devices of
          yours.
        </h2>
      </div>
      <div className="main-content">
        <h3>Your added recipes are mentioned below.</h3>
      </div>
      <RecipeList />
    </>
  );
}

export default App;
