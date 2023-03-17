"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

async function addItem(name, refresh){
	await fetch(`/api/todo/add`, {
		method: 'POST',
		body: JSON.stringify({ name }),
	});
	refresh();
};

export default function AddNewItem() {
	const router = useRouter();
	let [name, setName] = useState("");
	return (
	<div>
	<input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
	<button onClick={async () => {
		 await addItem(name, router.refresh); 
		 setName("")
	} }>Add</button>
	  </div>
	)
}
