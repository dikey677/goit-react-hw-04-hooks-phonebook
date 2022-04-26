const Filter = ({value, onChange}) => {
    return (
        <label>
            <p>Find contacts by name</p>
            <input type="text" name="name" value={value} onChange={onChange}/>
        </label>
    );
}

export default Filter