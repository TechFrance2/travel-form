import React from "react";


function FormsComponent (props) {
    return (
        <main>
            <form onSubmit = {props.handleSubmit}>
              <input type = "text" 
                    value = {props.data.firstName}
                    name = "firstName" 
                    placeholder = "First Name" 
                    onChange = {props.handleChange} 
              />
              <br/>
              <input type = "text"
                    value = {props.data.lastName}
                    name = "lastName"
                    placeholder = "Last Name" 
                    onChange = {props.handleChange}
              />
              <br/>
              <input type = "text" 
                    value = {props.data.age}
                    name = 'age'
                    placeholder = "Age" 
                    onChange = {props.handleChange}
              />
              
              <br/>
              <label>
              
              <input type = "radio"
                    name = "gender"
                    value= "Female"
                    checked = {props.data.gender === "Female"}
                    onChange = {props.handleChange} 
                />
                Female
              <br/>
              </label>

              <label>
                  <input type = "radio"
                        name = "gender"
                        value= "Male"
                        checked = {props.data.gender === "Male"}
                        onChange = {props.handleChange} 
                    />
                    Male                    
              </label>
              <br/>
              <label>  Pick Your Travel Destination
                  <select 
                  
                        value = {props.data.destination}
                        onChange = {props.handleChange}
                        name = "destination"
                      >
                      <option value = "Israel"> Israel</option>
                      <option value = "Hawaii"> Hawaii</option>
                      <option value = "Switzerland">Switzerland </option>
                     
                      </select>
               </label>       
              <br />
            <label>Dietary Restrictions: </label>
            
              <input type = "checkbox"
                    name = "isVegan"
                    value= "vegetarian"
                    checked = {props.data.isVegan ===true}
                    onChange = {props.handleChange} 
                />
                Vegan

                <input type = "checkbox"
                    name = "isKosher"
                    value= "kosher"
                    checked = {props.data.isKosher === true}
                    onChange = {props.handleChange} 
                />
               Kosher

                <input type = "checkbox"
                    name = "isLactoseFree"
                    value= "lactoseFree"
                    checked = {props.data.isLactoseFree === true}
                    onChange = {props.handleChange} 
                />
                Lactose Free

                <input type = "checkbox"
                    name = "isGlutenFree"
                    value= "glutenFree"
                    checked = {props.data.isGlutenFree}
                    onChange = {props.handleChange} 
                />
                Gluten Free  
              <br/>
            

              
                        <h2>Entered Information: </h2>
                        <p>Your Name: {props.data.firstName}   {props.data.lastName}</p>
                        <p>Your Age: {props.data.age}</p>
                        <p>Your Gender: {props.data.gender}</p>
                        <p>Your Destination: {props.data.destination}</p>
                        <p>Your Dietary Restrictions: 
                        <p>  Vegan: {props.data.isVegan ? "Yes" : "No"} </p>  
                        <p>   Kosher: {props.data.isKosher ? "Yes" : "No"} </p> 
                        <p>   Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"} </p> 
                        <p>   Gluten Free: {props.data.isGlutenFree ? "Yes" : "No"} </p> 
                        </p>
                      <button>Submit</button>
              
        </form>
    </main>

    );
                    
}

export default FormsComponent
