import React, {useState} from 'react'


const AddMovie = ({setMovies}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            setMovies( cats => [ inputValue, ...cats, ] );
            setInputValue('');
        }
    }

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                />
            </form>
        </>
     );
}
 
export default AddMovie;