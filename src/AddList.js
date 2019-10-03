import React, { useState } from "react";
import TextField from "@material-ui/core/TextField"
import { List, ListItem} from "@material-ui/core";
import { useStyles } from "./styles"




export const AddList = () => {
        const [inputVal, setInputVal] = useState('');
        const [listVals, setListVal] = useState([]);

    const classes = useStyles();


        const handleSubmit = (e) => {
            e.preventDefault();
            setListVal([...listVals, inputVal]);
            setInputVal('');
        };
        return (
            <div >
                <form className={classes.formlist} onSubmit={handleSubmit}>
                    <TextField
                        
                        value={inputVal}
                        onChange={event => setInputVal(event.target.value)}
                        placeholder="New list here..."
                    />
                 
                    {
                        listVals.length === 0
                            ? (<ListItem className={classes.form}>No Lists.</ListItem>)
                            : (
                                <List>
                                    
                                    {
                                        listVals.map((listVal, index) => (
                                            <ListItem button key={index}>{listVal} </ListItem>
                                        ))
                                    }
                                    
                                </List>
                            )
                    }
                </form>
            </div>
        );
    };

