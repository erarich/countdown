import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import CountdownComp from '../components/Countdown';

const Section = () => {

  let initialList = []
  const [list, setList] = useState(initialList);

  const handleAdd = () => {
    const newList = list.concat({
      id: uuidv4(), 
      element:
        <div>
          <CountdownComp key={list.length} />
        </div>
      });
    setList(newList);
  }

  const handleRemove = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <section>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
              {item.element}
              <div>
                <button onClick={() => {handleRemove(item.id)}}>remove</button>
              </div>
          </li> 
        ))}
      </ul>

      <div>
        <button onClick={handleAdd}>
          Add more countdowns
        </button>
      </div>

    </section>
  );
};

export default Section;