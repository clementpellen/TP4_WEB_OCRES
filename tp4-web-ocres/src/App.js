import profile from "../src/profile.png";
import './App.css';

const profils = [
{
  nom: ["Jeanne", "Dupont"],
  birthday: [22, 2, 1983],
  profile_image: profile,
},
{
  nom: ["Martine", "Cabot"],
  birthday: [13, 11, 1989],
  profile_image: profile,
},
{
  nom: ["Claude", "Lellouche"],
  birthday: [17, 1, 1969],
  profile_image: profile,
}
]

var profile_id = 0;

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

function Main() {
  return (
    <main>
      <img src={profils[profile_id].profile_image} alt="profile"></img>
        <div className='names'>
          <h2>{profils[profile_id].nom[0]}</h2>
          <h2>{profils[profile_id].nom[1]}</h2>
        </div>
        <h2>{profils[profile_id].birthday[0]}/{profils[profile_id].birthday[1]}/{profils[profile_id].birthday[2]}</h2>
    </main>
  )
}

function Header() {
  console.log("ICII");
  return(
    <header>
      <button >{profils[0].nom[0]}</button>
      <button >{profils[1].nom[0]}</button>
      <button >{profils[2].nom[0]}</button>
    </header>
  )
}

// onClick={() => selectProfile(0)}
// onClick={() => selectProfile(1)}
// onClick={() => selectProfile(2)}

function selectProfile(id) {
  profile_id = id;
}

export default App;
