import './App.css'

function App() {
  return (
    <div className="App">
      <div className="app">
        <div className="menu">
          <h2>HeavyHaulBoard</h2>
          <ul>
            <li>Inicio</li>
            <li>Dashboard</li>
            <li>Configuración</li>
            <li>Perfil</li>
            <li>Cerrar Sesión</li>
          </ul>
        </div>
        <div className="content">
          <div className='header'><h1>HeavyHaulBoard</h1></div>
          <div className='viaje-sel'>haz selecionado tal carga</div>
          <div className='tabla-cont'>
            <div className='resultados'>100 resultados</div>
            <div className='viajes'>
              <table>
                <tr>
                  <td>Origen</td>
                  <td>Destino</td>
                  <td>Dia de carga</td>
                  <td>Tamaño / Peso</td>
                  <td>Tipo de equipo</td>
                  <td className='detalles'>Detalles</td>
                </tr>
                <tr>
                  <td>Raza</td>
                  <td>Jack Russell</td>
                  <td>Caniche</td>
                  <td>Perro callejero</td>
                  <td>Cocker Spaniel</td>
                  <td>Cocker Spaniel</td>
                </tr>
                <tr>
                  <td>Edad</td>
                  <td>16</td>
                  <td>9</td>
                  <td>10</td>
                  <td>5</td>
                  <td>Cocker Spaniel</td>
                </tr>
                <tr>
                  <td>Propietario</td>
                  <td>Suegra</td>
                  <td>Yo</td>
                  <td>Yo</td>
                  <td>Cuñada</td>
                  <td>Cocker Spaniel</td>
                </tr>
                <tr>
                  <td>Hábitos alimentarios</td>
                  <td>Come las sobras de todos</td>
                  <td>Mordisquea la comida</td>
                  <td>Come en abundancia</td>
                  <td>Come hasta que revienta</td>
                  <td>Cocker Spaniel</td>
                </tr>
              </table>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default App
