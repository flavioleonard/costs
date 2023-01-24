import {useNavigate} from 'react-router-dom'

import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject () {

    const Navigate = useNavigate()
    function createPost(project){
        //initialize cost and services
        project.cost = 0 
        project.services = []

        fetch ('http://localhost:5000/projects', {method: 'POST', 
        
        headers:{
            
            'Content-Type': 'application/json'},
            body: JSON.stringify(project),
    })
    .then((resp) => resp.json())
    .then((data) => {console.log(data)
        
    })
    //redirect
    
    Navigate('/projects', { state: {message: 'Projeto criado com sucesso!'} })
    }
   
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" /*O "btnText" ta se referindo ao nome que vai aparecer no "SubmitButton" que está na pasta form. Ou seja, ele está definindo que o texto do formulario da criação do projeto vai ser "Criar Projeto". Se fosse outro tipo de formulário era só alterar o "btnText" faciilitando o uso desse botão para mais de uma atividade*//>

        </div>
    )

}

export default NewProject