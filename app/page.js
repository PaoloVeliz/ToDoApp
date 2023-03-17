import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import AddNewItem from './components/AddNewItem/add-new-item.js';
import TodoList from "./components/TodoList/todo-list";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
	  <div className={styles.main}>
	  <AddNewItem/>
	  <TodoList/>
	  </div>
  )
}
