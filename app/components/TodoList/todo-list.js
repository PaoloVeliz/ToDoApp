
import Todo from "../Todo/todo";

const getAllItems = async () => {
	let todos = await fetch("http://localhost:3001/api/todo/list");
	return todos.json();
};


export default async function TodoList() {
	const { todos } = await getAllItems();
	return (
		<div>
			<ul style={{ listStyleType: "none", padding: 0 }}>
			{
				todos.map((item) => {
					return (
						<li key={item.id} style={{padding: 0}} >
						<Todo todo={item}/>	
						</li>
					);
				})
			}
			</ul>
		</div>
	)
}
