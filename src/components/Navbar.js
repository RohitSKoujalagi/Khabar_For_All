import react,{useState} from 'react'
import Business from './Business';
import Technology from './Technology';
import Entertainment from './Entertainment';
import Sports from './Sports';
import { BrowserRouter as Router,NavNavLink, Route, NavLink, Switch } from 'react-router-dom'

import '../App.css';
import News from '../News';
import Health from './Health';
import Science from './Science';



export default function Navbar() {

    function Gen(){
        let Gen=document.getElementsByClassName('Gen').classList.add('activeClass');
    }
    function Spo(){
        let Spo=document.getElementsByClassName('Spo').classList.add('activeClass');
    }
    function Ent(){
        let Ent=document.getElementsByClassName('Ent').classList.add('activeClass');
    }
    function Bus(){
        let Bus=document.getElementsByClassName('Bus').classList.add('activeClass');
    }
    function Tec(){
        let Tec=document.getElementsByClassName('Tec').classList.add('activeClass');
    }
    function Sci(){
        let Sci=document.getElementsByClassName('Sci').classList.add('activeClass');
    }
    function Hea(){
        let Hea=document.getElementsByClassName('Hea').classList.add('activeClass');
    }


    return (
        <>


            <Router >
                <nav className="sticky-top navbar">      <ul className='newsHeadings'>
                    <NavLink exact onClick={()=>{}} className='Gen links' activeClassName="active"   to='/'> <li>General</li></NavLink>
                    <NavLink exact onClick={()=>{}} className='Spo links' activeClassName="active"   to='/sports'> <li>Sports</li></NavLink>
                    <NavLink exact onClick={()=>{}} className='Bus links' activeClassName="active"  to='/business'> <li>Business</li></NavLink>
                    <NavLink exact onClick={()=>{}} className='Tec links' activeClassName="active"  to='/technology'> <li>Technology</li></NavLink>
                    <NavLink exact onClick={()=>{}} className='Ent links' activeClassName="active"   to='/entertainment'> <li>Entertainment</li></NavLink>
                    <NavLink exact  onClick={()=>{}} className='Sci links' activeClassName="active" to='/science'> <li>Science</li></NavLink>
                    <NavLink exact onClick={()=>{}} className='Hea links' activeClassName="active"   to='/health'> <li>Health</li></NavLink></ul>
                </nav>
                <Switch>
                    <Route key='general' exact component={News}  path='/' ></Route>
                    <Route key='sports' exact component={Sports} path='/sports' ></Route>
                    <Route key='business' exact component={Business} path='/business' ></Route>
                    <Route key='technology' exact component={Technology} path='/technology' ></Route>
                    <Route key='health' exact component={Health} path='/health' ></Route>
                    <Route key='science' exact component={Science} path='/science' ></Route>
                    <Route key='entertainment' exact component={Entertainment} path='/entertainment' ></Route>
                </Switch>

            </Router>




        </>
    )
}