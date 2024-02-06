export default function Footer({completedTodos,totalTodos}){
    return (
        <div>
            <footer>
                <div className="footer-container">
                    <h3>Completed Todos :<p>{completedTodos}</p> </h3>
                    <h3>Total Todos : <p>{totalTodos}</p></h3>
                </div>
            </footer>
        </div>
    )
}