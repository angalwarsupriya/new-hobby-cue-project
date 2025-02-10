
import Dropdown from 'react-bootstrap/Dropdown';
import { FaChevronDown } from "react-icons/fa"; 
import './index.css'

function DropdownCompo(props) {
  const { itemsList } = props;
  return (
    <Dropdown>
      <Dropdown.Toggle variant='light' id="dropdown-basic" className='dropdown-btn'>
       
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {itemsList.map((item) => (
          <Dropdown.Item href={`#/action-${item.id}`} className='drop-item' key={item.id}>
            {item.item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownCompo;
