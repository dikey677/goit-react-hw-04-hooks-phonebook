export default function Filter({value, onChange}) {
    return (
        <label>
            <p>Find contacts by name</p>
            <input type="text" name="name" value={value} onChange={onChange}/>
        </label>
    );
}

