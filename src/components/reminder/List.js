import React from 'react'
import './List.scss'

function List({info,Upcoming}) {
  return (
    <ul className="person-container-main">
      {iterate(info,Upcoming)}
    </ul>
  );
}

function iterate(data,flag){
  if (!data) return; 

  const bgColor = flag ? { backgroundColor: "rgba(255, 243, 12, 0.58)" } : {};
      return (
        <>
          {
                data.map((person,index) =>{
                      return (
                        
                          <li key={index} className="person-wrapper" style={bgColor}>
                            <img
                              className="person-img"
                              src={person.img}
                              alt=""
                            />
                            <div className="person-info">
                              <h3 className="person-name">{person.name}</h3>
                                        <h3 className="person-age">{Old(person.age)} years</h3>
                            </div>
                          </li>
                      );  
                })
          }
        </>
      );
}

//Converting age

function Old(personAge) {
      let year = new Date(personAge).getFullYear();
      let currentYear = new Date().getFullYear();
      let actualAge = currentYear - year;
      return actualAge;
}
      
      
export default List