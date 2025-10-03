import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/logo.svg'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"/>
                  
          </head>
          <body>
          <div class="container">
              <div class="row">
                      <div id="logo" class="col-lg-4">
                          <img src={logo} /></div>
                    <div id="przelacznik" class="col-lg-2">prz</div>

                    <div class="col-lg-1">NEWSY</div>
                    <div class="col-lg-1">WYNIKI NA ¯YWO</div>
                    <div class="col-lg-1">SPORTBUZZ</div>
                    <div class="col-lg-1">SKRÓTY</div>
                    <div class="col-lg-1">TYPY</div>
                      <div class="col-lg-1">
                          <select>
                              <option value="" selected>Bukmacherzy</option>
                              <option value="">STS</option>
                              <option value="">PolyMarket</option>
                              <option value="">Betclic</option>
                          </select>
                      </div>
                  </div>
                  <div class="row">
                          <div class="col-lg-3">
                      <h2>SKRÓTY</h2>
                          <table>
                              <tr><a href="strona.html">Legia Warszawa</a></tr>
                                <tr><a href="strona.html">Legia Warszawa</a></tr>
                                <tr><a href="strona.html">Legia Warszawa</a></tr>
                                <tr><a href="strona.html">Legia Warszawa</a></tr>
                              </table>
                              
                          </div>
                          <div class="col-lg-3">
                              <h2>TYPY</h2>
                              <table>
                                  <tr><a href="strona.html">Legia Gdańsk - Wisła Płock</a></tr>
                                  <tr><a href="strona.html">Legia Gdańsk - Wisła Płock</a></tr>
                                  <tr><a href="strona.html">Legia Gdańsk - Wisła Płock</a></tr>
                                  <tr><a href="strona.html">Legia Gdańsk - Wisła Płock</a></tr>
                              </table>
                          </div>
                          <div class="col-lg-3">
                              <h2>BONUSY</h2>
                              <table>
                                  <tr><a href="strona.html">Superbet kod promocyjny</a></tr>
                                  <tr><a href="strona.html">Superbet kod promocyjny</a></tr>
                                  <tr><a href="strona.html">Superbet kod promocyjny</a></tr>
                                  <tr><a href="strona.html">Superbet kod promocyjny</a></tr>
                              </table>
                          </div>
                          <div class="col-lg-3">
                              <h2>SPORTBUZZ</h2>
                              <table>
                                  <tr><a href="strona.html">...</a></tr>
                                  <tr><a href="strona.html">...</a></tr>
                                  <tr><a href="strona.html">...</a></tr>
                                  <tr><a href="strona.html">...</a></tr>
                              </table>
                          </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-1"></div>
                      <div class="col-lg-1"></div>
                      <div class="col-lg-1"></div>
                      <div class="col-lg-1"></div>
                      <div class="col-lg-1"></div>
                      <div class="col-lg-1"></div>
                      <div class="col-lg-1"></div>
                      <div class="col-lg-1"></div>
                      <div class="col-lg-1"></div>
                      <div class="col-lg-1"></div>
                      <div class="col-lg-1"></div>
                      <div class="col-lg-1"></div>
                  </div>
              </div>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
          </body>
    </>
  )
}

export default App
