import React,{ useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import {FiArrowLeft } from 'react-icons/fi';
import './style.css';
import logoimg from '../../assets/logo.svg';

import api from '../../services/api';

 export default function Register(){

    const[nome, setNome] = useState('');
    const[email, setEmail ] = useState('');
    const[wattsapp, setWhattsapp] = useState('');
    const[cidade, setCidade ] = useState('');
    const[uf,setUf] = useState('');

    const history = useHistory();


   async function handleRegister(e){

      e.preventDefault();

      const data = {
          nome,
          email,
          wattsapp,
          cidade,
          uf,
      };

    try{
        const response = await api.post('ongs', data);
        alert(`Seu ID de Acesso: ${response.data.id}`);

        history.push('/');
        
    } catch(err){
        alert('Erro no Cadastro, Tente Novamente');
    }

    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                  <img src={logoimg} alt="Be te Hero"/>

                  <h1>Cadastro</h1>

                  <p>Faça seu cadastro, entre na plataforma e ajude a encontrarem os casos da sua ONG.</p>

                  <Link className="back-link" to="/">
              <FiArrowLeft size={16} color="#E02041"/>
              Já tenho Cadastro</Link>
   

                </section>

                <form onSubmit={handleRegister}>
                    <input 
                    placeholder="Nome da ONG"
                    value={nome} 
                    onChange={e => setNome(e.target.value)}
                    />
                
                    <input 
                    type="email" placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                    placeholder="Whattsapp"
                    value={wattsapp}
                    onChange={e => setWhattsapp(e.target.value)}
                    />


                    <div className="input-group">
                        <input 
                        placeholder="Cidade"
                        value={cidade}
                        onChange={e => setCidade(e.target.value)}
                        /> 

                        <input 
                        placeholder="UF" width="80"
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        />

                    </div>

                    <button className="button" type="submit"> Cadastrar</button>

                </form>
            </div>
        </div>
    );

}
