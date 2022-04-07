import React, { useState } from 'react';
import Bar from './bar';
import ListItem from "./listItem";
import ToDo from "./ToDo";
import cassette from "./cassette.png"
const audio = new Audio('/synthwave_ringtone.mp3');

const ToDoMain = (props) => {

    const [showed, setShowed] = useState(true);
    const [interactWithMe, setInteractWithMe] = useState(true);
    const [todostuffs, setTodoStuffs] = useState(props.props);

    const unInteract = () => setInteractWithMe(false);

    const submitToDoHandler = (data) => {
        const newData = {
            ...data,
            id: Math.random()
        }
        setInteractWithMe(false);
        setTodoStuffs((prevExpenses) => {
            localStorage.setItem("todoList", JSON.stringify([...prevExpenses, newData]));
            return [...prevExpenses, newData];
        })
    }

    const submitRemoveToDoHandler = (id) => {
        setTodoStuffs((prevExpenses) => {
            const ar = [];
            for (const it of prevExpenses) {
                if (it.id !== id) ar.push(it);
            }
            audio.pause();
            audio.currentTime = 0;
            setShowed(true);
            localStorage.setItem("todoList", JSON.stringify(ar));

            return ar
        });

    }
    const stop = () => {
        audio.pause();
        audio.currentTime = 0;
        setShowed(true);

    }

    React.useEffect(() => {

        const x = setInterval(() => {
            setTodoStuffs((currentState) => {
                let updatedState;
                updatedState = currentState;
                for (const it of updatedState) {
                    if (it.date && formatAMPM(new Date()) === `${it.date} ${it.time}` && !it.active) {
                        it.active = true;
                        audio.play();
                        setShowed(false);
                        setTimeout(() => setShowed(true), 30000)
                    }
                }
                localStorage.setItem("todoList", JSON.stringify(updatedState));

                return updatedState;
            });
            return () => {
                clearInterval(x);
            }
        }, 30000)
    }, [todostuffs])
    const formatAMPM = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strHours = String(hours);
        if (strHours.length === 1) strHours = `0${strHours}`;
        let strMinutes = String(minutes);
        if (strMinutes.length === 1) strMinutes = `0${strMinutes}`;
        const strTime = strHours + ':' + strMinutes + ' ' + ampm;
        return strTime;
    }

    let renderList = <ol class="list">
        {todostuffs.map((expense) =>
            <ListItem title={expense.title} id={expense.id} active={expense.active} time={expense.time} date={expense.date} onRemoveToDo={submitRemoveToDoHandler} />)}
    </ol>;
    if (todostuffs.length === 0) renderList = <ol><li><i className="color-grey">-- add an item --</i></li></ol>;

    let search = window.location.search;
    let params = new URLSearchParams(search);
    let queryName = params.get('name');
    let name = "Harshil";
    if(queryName && queryName.length < 10) name = queryName;
    return (
        <div>
            <div class="wrapper">
                <Bar showed={showed} />
                <div class="future-cop">
                    <h3 class="future">{name}'s</h3>
                    <h1 class="cop">TODO</h1>

                </div>
            </div>

            <ToDo onSubmitTodo={submitToDoHandler} /><div class="center"><img onClick={() => stop()} className="hover-thumb" srcset="https://img.icons8.com/color-glass/2x/pause-squared.png 5x" alt="Pause Squared icon" loading="lazy" />
            </div>
            {todostuffs.length > 0 && <img className="interact-with-me" onClick={unInteract} style={!interactWithMe ? { visibility: "hidden" } : { visibility: "visible" }} title="Click me to enable audio!" alt="Click me to enable audio!" src={cassette}></img>}
            {renderList}
        </div>
    );
}
export default ToDoMain;