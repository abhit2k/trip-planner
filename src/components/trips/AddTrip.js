import React from 'react';

export const AddTrip = ({newTrip}) => {
    let date, place, type;
    const submit = (e) => {
        e.preventDefault();
        newTrip({
            date : date.value,
            place : place.value,
            type : type.value,
        });
        date.value = place.value = type.value = '';
    }

    return (
        <div className="form-container">
            <form onSubmit={submit} className="form black-container">
                <label>
                    <h3>Add a trip</h3>
                    <br />
                    <br />
                    <br />
                </label>
                <label >
                    Date:
                    <br/>
                    <input
                        className="border_rad"
                        id="date"
                        type="date"
                        required
                        ref={(input) => date = input} 
                    />
                </label>
                <label >
                    Place:
                   <br />
                    <input
                        autocomplete="off"
                        className="border_rad"
                        id="date"
                        type="text"
                        required
                        ref={(input) => place = input} 
                    />
                </label>
                <label>
                    Type: <br />
                    <select className="border_rad" ref={(input) => type = input} >
                        <option className="greenText" value="Trek">Trek</option>
                        <option className="greenText" value="Tropic">Tropic</option>
                        <option className="greenText" value="Club">Club</option>
                    </select>
                </label>
                <input className="border_rad" type="submit" value="SUBMIT" />
            </form>
        </div>
    );
}