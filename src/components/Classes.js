import React, { useEffect, useState } from 'react';
import Class from './Class';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch("classes.json")
        .then(res => res.json())
        .then(data => setClasses(data));
    },[])
    return (
        <div>

            {
                classes.map(singleClass => <Class
                key={singleClass.id}
                singleClass = {singleClass}
                />)
            }
        </div>
    );
};

export default Classes;