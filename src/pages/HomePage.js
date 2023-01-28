import React from "react";

export default function Homepage(){


    const [total,setTotal] = React.useState(0);
    const [input,setInput] = React.useState();
    function Addition(value){
        // setTotal((curr)=> curr + 100);
        const intValue = parseInt(input);
        if(!input){
            return;
        }
        
        console.log(value);
        // console.log(input);
        
        switch(value){
            case 'Add':
                setTotal((curr)=>curr+intValue);
                break;
            case 'Sub':
                setTotal((curr)=>curr-intValue);
                break;
            case 'Mul':
                setTotal((curr)=>curr*intValue);
                break;
            case 'Div':
                setTotal((curr)=>curr/intValue);
                break;
            default:
                console.log("error");  


        }
        setInput(0);


    }
    return <div style={styles.main}>
        <div style={styles.box}>

            <h3 style={styles.title}>Total</h3>
            <h3 style={styles.title}>{total}</h3>
            <div style={styles.inputContent}>
                <h5>First Number:</h5>
                <input type="Number" placeholder="Enter Number" 
                value={input}
                style={styles.input} 
                onChange={(event)=>setInput(event.target.value)}/>
            <div style={styles.buttonContainer}>
                <button style={styles.buttons} onClick={()=> Addition('Add')}>+</button>
                <button style={styles.buttons} onClick={()=> Addition('Sub')}>-</button>
                <button style={styles.buttons} onClick={()=> Addition('Mul')}>*</button>
                <button style={styles.buttons} onClick={()=> Addition('Div')}>/</button>
            </div>
            {/* <div>
                <InputField/>
            </div> */}
            </div>
        </div>
    </div>;
};

const styles={
    main:{
        width:'100vw',
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontFamily:'poppins',
        backgroundColor:'skyblue',
    },
    box:{
        boxShadow : '0px 10px 15px -3px rgba(0,0,0,0.1)',
        height:'70vh',
        width: '70vh',
        backgroundColor: 'white',
        borderRadius:'50px',
    },
    title:{
        textAlign:'center',
    },
    inputContent:{
        justifyContent:'center',
        display:'grid',
        width:'100%',

    },
    input:{
        padding:10,
        border: '2px solid red',
        borderRadius: '20px'

    },
    buttons:{
        padding:'20px',
        borderRadius:'5px',
        border:'none',
        backgroundColor:'skyblue',
        color:'white',
        minHeight:40,
        minWidth:40,

    },
    buttonContainer:{
        marginTop:70,
        width:400,
        display:'flex',
        justifyContent:'space-evenly',
    }
    
};