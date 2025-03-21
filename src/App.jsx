import { useState, useMemo } from 'react'

// variabili con i caratteri disponibili
const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

function App() {

  // input controllati -- potrei importare tutti gli stati insieme anche con formData
  const [fullname, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [specilization, setSpecialization] = useState('')
  const [yearsOfExperience, setYearsOfExperience] = useState('')
  const [description, setDescription] = useState('')

  // creo variabile che viene ricalcolata solo quando cambia username - uso useMemo a cui passo come dipendenza username
  const usernameValid = useMemo(() => {
    // Deve contenere solo caratteri alfanumerici e almeno 6 caratteri (no spazi o simboli).
    // uso metodo split x dividere stringa in caratteri singoli, così verifico se sono validi
    const caratteriValidi = username.split('').every(carattere =>
      letters.includes(carattere.toLowerCase()) ||
      numbers.includes(carattere)
    )
    return caratteriValidi && username.trim().length >= 6
  }, [username])


  const passwordValid = useMemo(() => {
    //Password: Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.
    return (
      password.trim().length >= 8 &&
      password.split('').some(carattere => letters.includes(carattere)) &&
      password.split('').some(carattere => numbers.includes(carattere)) &&
      password.split('').some(carattere => symbols.includes(carattere))
    )
  }, [password])

  const descriptionValid = useMemo(() => {
    //Descrizione: Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali).
    return (
      description.trim().length >= 100 &&
      description.trim().length < 1000
    )
  }, [description])

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
      !description.trim() ||
      !usernameValid ||
      !passwordValid ||
      !descriptionValid

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
          {username.trim() && (
            <p style={{ color: usernameValid ? 'green' : 'red' }}>
              {usernameValid ? 'Username valido' : 'Deve avere almeno 6 caratteri alfanumerici'}
            </p>
          )}
          <label htmlFor=""><h4>Password</h4></label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.trim() && (
            <p style={{ color: passwordValid ? 'green' : 'red' }}>
              {passwordValid ? 'Password valida' : 'Deve avere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo'}
            </p>
          )}
          <label htmlFor=""><h4>Specializzazione</h4></label>
          <select
            value={specilization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option>Seleziona</option>
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
          {description.trim() && (
            <p style={{ color: descriptionValid ? 'green' : 'red' }}>
              {descriptionValid ? 'Descrizione valida' : 'Deve avere tra i 100 e i 1000 caratteri'}
            </p>
          )}
          <button type='submit'>Registrati</button>
        </form>
      </div>
    </>
  )
}

export default App
