import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: "Стул серый",
          img: "https://meb96.ru/upload/products/49631/146335/800x0.jpg",
          desc: "description",
          category: "chairs",
          proce: "49.22"
        },
         {
          id: 1,
          title: "Стул синий",
          img: "https://thefields.ru/upload/iblock/1c3/1c3078cefe5fb9450d215760772f0bd6.jpg",
          desc: "description",
          category: "chairs",
          proce: "49.22"
        },
        {
          id: 1,
          title: "Стул синий",
          img: "https://thefields.ru/upload/iblock/1c3/1c3078cefe5fb9450d215760772f0bd6.jpg",
          desc: "description",
          category: "chairs",
          proce: "49.22"
        }
      ]
    }
  }

  render(){
    return (
    <div className="wrapper">
      <Header/>
      <Items items={this.state.items}/>
      <Footer/>
    </div> 
    )
  }
  
}

export default App;
