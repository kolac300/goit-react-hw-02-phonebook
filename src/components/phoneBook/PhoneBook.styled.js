import styled from 'styled-components';

export const Label = styled.label`
display: block;
margin: 1em;
font-size: 1.5em;
font-weight: bolder;

button {
	border: none;
	border-radius: 5px;
	background-color: silver; 
    color: white;
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
}

button:hover {
    background-color: #4CAF50; 
    color: white;
}
`

export const Form = styled.form`
width: 30%;
padding-left: 1em;
border: 1px solid black`