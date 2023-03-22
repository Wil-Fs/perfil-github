import {useEffect, useState} from 'react';

const Form = () => {
    const [MateriaA, setMateriaA] = useState(0);
    const [MateriaB, setMateriaB] = useState(0);
    const [MateriaC, setMateriaC] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log(`the component start`);

        return () => {
            console.log("O componente finalizou");
        }
    }, []);


    useEffect(() => {
        console.log(`the name change for: ${name}`);
    }, [name]);

    useEffect(() => {
        console.log(`The materiaA, materiaB and materiaC change for ${MateriaA, MateriaB, MateriaC}`);
    }, [MateriaA, MateriaB, MateriaC]);

    const renderResult = () => {
        const sum = MateriaA + MateriaB + MateriaC;
        const media = sum /3;

        return media >= 7 ? <p>Olá {name}, você foi aprovado</p> : <p>Olá {name}, você foi reprovado!</p>;
    }

    const setname = (event) => {
        setName(beforeEstate => {
            return event.target.value;
        });
    }
    
    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder='Your name' onChange={setname}/>
            <input type="number" placeholder="Nota matéria A" onChange={event => setMateriaA(event.target.valueAsNumber)}/>
            <input type="number" placeholder="Nota matéria B" onChange={event => setMateriaB(event.target.valueAsNumber)}/>
            <input type="number" placeholder="Nota matéria C" onChange={event => setMateriaC(event.target.valueAsNumber)}/>
            {renderResult()}
        </form>
    )
}

export default Form;