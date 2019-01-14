export default (e) => {
	this.setState((prevState) =>{
		return {
			expanded: !prevState.expanded
		}
	})
}

