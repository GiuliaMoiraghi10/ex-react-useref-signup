import { useState } from 'react'

function App() {

  // input controllati
  const [fullname, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [specilization, setSpecialization] = useState('')
  const [yearsOfExperience, setYearsOfExperience] = useState('')
  const [description, setDescription] = useState('')

  // funzione per impedire refresh della pagina + controlli
  const handleSubmit = e => {
    e.preventDefault()
    if ( // se uno o tutti questi campi non ci sono, esce alert con errore, altrimenti li stampa in console
      !fullname.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specilization.trim() ||
      !yearsOfExperience.trim() ||
      yearsOfExperience <= 0 ||
      !description.trim()
    ) {
      alert('Errore! Compilare tutti i campi richiesti')
      return
    }
    console.log('Form compilato! Ecco i tuoi dati:', {
      fullname,
      username,
      password,
      specilization,
      yearsOfExperience,
      description
    })
  }

  return (
    <>
      <h1>Web Developer Signup</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor=""><h4>Nome Completo</h4></label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor=""><h4>Username</h4></label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor=""><h4>Password</h4></label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor=""><h4>Specializzazione</h4></label>
          <select
            value={specilization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
          <label htmlFor=""><h4>Anni di esperienza</h4></label>
          <input
            type="number"
            value={yearsOfExperience}
            onChange={(e) => setYearsOfExperience(e.target.value)}
          />
          <label htmlFor=""><h4>Descrizione</h4></label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type='submit'>Registrati</button>
        </form>
      </div>
    </>
  )
}

export default App
