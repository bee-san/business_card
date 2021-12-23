import './App.css';
import Header from './components/Header'
import GitHubCards from './components/GitHubCards'
import ThingsWritten from './components/ThingsWritten'
import CommunitiesBuilt from './components/CommunitiesBuilt'

function App() {
  return (
    <div className="App">
      <link rel="icon" href="./images/favicon.ico" type="image/x-icon" />
        <title>0xBee.eth</title>
        <Header />
        <GitHubCards />
        <ThingsWritten />
        <CommunitiesBuilt />
    </div>
  );
}    

export default App;
