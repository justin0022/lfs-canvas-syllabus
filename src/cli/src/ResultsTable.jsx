import React from 'react'
import { Table } from 'react-bootstrap'

/* 
* Props: courses - list of courses to render
* Renders a table of courses with links to their syllabi
*/

class ResultsTable extends React.Component {
	render() {
		return (
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Course</th>
						<th>Term</th>
					</tr>
				</thead>
				<tbody>
					{this.props.courses.map(course => {
							var syllabusLink = 'syllabi/' + course['term'] + '/' + course['course']

							return (
								<tr key={course['course'] + course['term']}>
									<th style={{fontWeight: 'normal'}}>
										<a href={syllabusLink}>
											{course['course']}
										</a>
									</th>
									<th style={{fontWeight: 'normal'}}>
										{course['term']}
									</th>
								</tr>	
							)
						})}
				</tbody>
			</Table>
		)
	}
}

export default ResultsTable