import Collection from '../collection'

function App() {
  const initialTodos = [
    {
        title: "Hello world!",
        text: "Hello world",
        isDone: false,
        id: "6538ae1536fc8391ff88176f"
    },
    {
        title: "new",
        text: "to",
        isDone: false,
        id: "653a254135d26f2360d45dec"
    }
]
  return <div>
    <Collection initialTodos={initialTodos} /></div>;

}

export default App;
