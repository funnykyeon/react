import React from "react";

class UncontrolledCompoonent extends React.Component {
  inputRef = React.createRef();

  render() {
    console.log("initial render", this.inputRef);
    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount", this.inputRef);
  }
  click = () => {
    // // input 태그의 value 값을 가져오기
    // const input = document.querySelector("#my-input");
    // console.log(input.value);
    console.log(this.inputRef.current.value);
  };
}

export default UncontrolledCompoonent;
