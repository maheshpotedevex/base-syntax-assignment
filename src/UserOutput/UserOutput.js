import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
		return (
					<div className = "UserOuput">
						<p>Username: <b>{props.userName}</b></p>
						<p>I hope i will be overwritten!</p>
					</div>
			);
}

export default userOutput;