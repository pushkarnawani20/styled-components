import styled from 'styled-components';

export const StyledCounter = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  background-color: #fff;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  text-align:center;
`;

export const Paragraph = styled.p`
      font-size: 15px;    
`;

export const Button = styled.button`
  	font-size: 15px;
    display: inline-block;
    padding: 7px 20px;
    border: 3px dotted pink;
    margin: 10px;
    outline:none;
    ::before {
	    content: '🚀';
	    margin-left:5px;
	}

	:hover {
	    background: red;
	    color:#fff;
	    border-color:black;
	}
`;
export const TomatoButton = styled(Button)`
  background: tomato;
  :hover {
    background: black;
    color:#fff;
    border-color:tomato;
}
`

export const Input = styled.input.attrs(
	{
  		type: "password",
		margin: props => props.size || "1em",
		padding: props => props.size || "1em"
	})`
	  color: palevioletred;
	  display:inlin-block;
	  font-size: 1em;
	  border: 2px solid palevioletred;
	  border-radius: 3px;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

export const HoverButton = styled.button`
  	font-size: 15px;
    display: inline-block;
    padding: 7px 20px;
    border: 3px dotted #000;
    margin: 10px;
    outline:none;
    ${StyledCounter}:hover & {
	    background: green;
	    color:#fff;
	}
`;

export const PropsBox = styled.div(props => ({
  background: props.background,
  display:"inline-block",
  height: '50px',
  width: '50px'
}));