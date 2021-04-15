import React from 'react';

function TimerComponent(){
    const [time, setTime] = React.useState(0);
    console.log("타이머 컴포넌트 렌더링");
    React.useEffect(function(){
        setTime(time+1);
    }, []);
    return (
        <div>
            <h3>{time}초</h3>
            <button>클릭해보세요.</button>
        </div>
    )
}

export default TimerComponent;