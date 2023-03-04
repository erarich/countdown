import Header from "../layout/Header";
import Container from "../layout/Container";
import Footer from "../layout/Footer";
import CountdownComp from "../components/Countdown"
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import TestTimer from "../components/TestTimer";

const Timer = () => {

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
    <>
      <Header />
      <Container>
        <section>
          <TestTimer />
          <div>
            <CountdownComp />
          </div>

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

      </Container>
      <Footer />
    </>
  );
};

export default Timer;