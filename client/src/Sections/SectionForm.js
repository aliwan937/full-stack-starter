import {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";

import Api from "../Api";
function SectionForm(){
    const {id} = useParams();
    const history = useHistory();
    const [section, setSection] = useState({
        name: '',
        slug: '',
        position: 0
    });

    useEffect(function(){
        if(id){
            Api.sections.get(id).then(response => setSection(response.data));
        }

    },[]);

    function onChange(event){

        const newSection = {...section};
        newSection[event.target.name] = event.target.value;
        setSection(newSection);
    }   
    async function onSubmit(event){
        event.preventDefault();
        try{
            if(id){
                await Api.sections.update(id,section)
            }else{
                await Api.sections.create(section)
            }
            await Api.sections.create(section);
            history.push('/sections');
        }catch(error){
            console.log(error);
        }

    } 
    return(
        <main className="container">
        <h1>Section Form</h1>
        <form onSubmit={onSubmit}>
        <div className="mb-3">
            <label>Name</label>
            <input className="form-control" name="name" type="text" value={section.name} onChange={onChange}></input>
        </div>
        <div className="mb-3">
            <label>Slug</label>
            <input className="form-control" name="slug" type="text"value={section.slug} onChange={onChange}></input>
        </div>
        <div className="mb-3">
            <label>Position</label>
            <input className="form-control" name="position" type="text"value={section.position} onChange={onChange}></input>
        </div>
        <button className="btn btn-primary" type="texts">Submit</button>
        </form>
        <p>
            {JSON.stringify(section)}
        </p>
        </main>
    );
}

export default SectionForm;