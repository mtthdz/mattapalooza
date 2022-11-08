import React from "react";
import { useForm, ValidationError } from '@formspree/react';


const Registration = () => {
    const [state, handleSubmit] = useForm(`${process.env.REACT_APP_FORM_ID}`);
    if (state.succeeded) {
        return <p>Thanks for RSVP'ing!</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name
            </label>
            <input
                id="name"
                type="text" 
                name="name"
            />
            <ValidationError 
                prefix="name" 
                field="name"
                errors={state.errors}
            />

            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email" 
                name="email"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />

            <label htmlFor="guests">How many guests?</label>
            <select name="guests" id="guests" required>
                <option defaultValue="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="more">More!</option>
            </select>
            <ValidationError 
                prefix="guests" 
                field="guests"
                errors={state.errors}
            />

            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

export default Registration;