import React, {lazy, Suspense} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Example from "./Registro/Proyecto/test";
const Proyecto=lazy(()=> import('./Registro/Proyecto/Proyecto'));
const Proyect=lazy(()=> import('./Registro/Proyecto/Proyect'));
const RegistroInicial=lazy(()=> import('./Registro/RegistroInicial/RegistroInicial'));
const Cajon=lazy(()=> import('./Registro/Cajon'));
const CajonCilindro=lazy(()=> import('./Registro/CajonCilindro'));
const Circular=lazy(()=> import('./Registro/Circular'));
const Volumen=lazy(()=> import('./Registro/Volumen'));
const Menu=lazy(()=> import('./Registro/Menu'));

function App() {
  return (
      <div>
        <Router>
            <Suspense fallback={<div>Cargando......</div>}>
                <div>
                    <Menu />
                    <Switch>
                        <Route path="/volumen" >
                            <Volumen />
                        </Route>
                        <Route path="/proyecto">
                            <Proyecto />
                        </Route>
                        <Route path="/proyect">
                            <Proyect />
                        </Route>
                        <Route path="/registro" >
                            <RegistroInicial />
                        </Route>
                        <Route path="/registro2" >
                            <Example />
                        </Route>
                        <Route path="/circular" >
                            <Circular />
                        </Route>
                        <Route path="/cajon">
                            <Cajon />
                        </Route>
                        <Route path="/cajoncilindro">
                            <CajonCilindro />
                        </Route>
                    </Switch>
                </div>
            </Suspense>
        </Router>
      </div>
  );
}

export default App;