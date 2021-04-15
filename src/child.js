function ChildComponent(props){
    const {name, age} = props;
    return(
        <div>
            <p>
                안녕 내 이름은 {name}이고, 나이는 {age}살이야.
            </p>
        </div>
    )
}

export default ChildComponent;