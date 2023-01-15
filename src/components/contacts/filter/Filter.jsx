import React, { Component } from 'react'


export class Filter extends Component {
	render() {
		return (<>
			<label>Find contacts by name or phone</label><br />
			<input type="text" value={this.props.filter} onChange={this.props.onHandleCHange} />
		</>


		)
	}
}
