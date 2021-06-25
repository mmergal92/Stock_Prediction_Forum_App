import React from 'react'


const colors = ["Amazon","Netflix"];

const Option = ({ value, label, onValueChange }) => (
  <li className="Option" onClick={e => onValueChange(value)}>
    {label}
    <div className="ColorPreview" style={{backgroundColor: value}}></div>
  </li>
);

const Search = () => {
  const [value, setValue] = React.useState('');
  const [filteredOptions, setFilteredOptions] = React.useState(colors);
  const [show, setShow] = React.useState(false);
  React.useEffect(()=>{
    let val = value.trim().toLowerCase();
    setFilteredOptions(
      colors.filter(color => {
        const col = color.toLowerCase();
        return col.includes(val) && col!==val;
      } )
    );
  }, [value]);
  
  const onOptionSelect = (value) => {
    setValue(value);
    setShow(false);
  }
  
  return (
    <div className="Autocomplete">
      <input
        value={value}
        type="text"
        onChange={e => setValue(e.target.value)}
        onFocus={e => setShow(true)}
        onBlur={e => {
          setTimeout(()=>{
            setShow(false)
          },300)
        }}
        style={{borderColor: value}}
        />
      <ul className={`OptionsList ${show? 'active' : 'hidden'}`}>
        {filteredOptions.length ? (
          filteredOptions.map(opt => <Option key={opt} onValueChange={onOptionSelect} value={opt.toLowerCase()} label={opt} />) 
        ) : (
          <div className="SuggestionsEmpty">No suggestions...</div>
        )}
      </ul>
      
      <div className="SelectedColorPreview"></div>
      
      { value && <div className="clear" onClick={e => setValue('')}>x</div> }
      
    </div>
  )
};

export default Search
