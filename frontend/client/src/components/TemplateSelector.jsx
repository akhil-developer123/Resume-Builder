function TemplateSelector({ formData, handleChange }) {


    const templates = [

        {
            name:"Modern",
            value:"Modern",
            description:"Professional Blue Style"
        },


        {
            name:"Classic",
            value:"Classic",
            description:"Traditional Resume Style"
        },


        {
            name:"Minimal",
            value:"Minimal",
            description:"Simple Clean Design"
        }

    ];



    return (

        <div className="template-selector">


            <h2>
                Choose Resume Template
            </h2>



            <div className="template-cards">


                {
                    templates.map((template)=> (


                        <div

                            key={template.value}

                            className={
                                formData.template === template.value
                                ?
                                "template-card active"
                                :
                                "template-card"
                            }

                            onClick={()=>


                                handleChange({

                                    target:{

                                        name:"template",

                                        value:template.value

                                    }

                                })


                            }

                        >


                            <div className="template-preview">

                                Resume

                            </div>



                            <h3>

                                {template.name}

                            </h3>



                            <p>

                                {template.description}

                            </p>


                        </div>


                    ))
                }


            </div>


        </div>

    );

}


export default TemplateSelector;