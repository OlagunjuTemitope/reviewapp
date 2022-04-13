import './App.css';
import ReviewForm from './Component/ReviewForm';
import ReviewList from './Component/ReviewList';
import ReviewProvider from './ReviewContext'

function App() {
  return (
    <ReviewProvider>
      <div>
        <ReviewForm />
        <ReviewList />
      </div>

    </ReviewProvider>
  );
}

export default App;
