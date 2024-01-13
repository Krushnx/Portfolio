import React from "react";

function BTN(props) {

  const icons = ['fa fa-download', 'fa fa-code', 'fa fa-eye', 'fa fa-angle-double-right', 'fa fa-github', 'fa fa-file', 'fa fa-arrow-right'];
  console.log(props.typ);
  const styles = {
    popup: {
      backgroundColor: (props.typ === 'btn1') ? "#ff4d05" : "transparent",
      border: (props.typ === 'btn1') ? "none" : "1px solid #fff",
      //   color: (props.typ==='btn1') ? "black" : "white",
    }
  };


  return <a href={props.down} download={props.flag} style={{ width: '135px' }}>
            <button style={styles.popup}>{props.value} 
                  <i class={icons[Number(props.icon)]}></i>
            </button>
    </a>;

}


export default BTN;