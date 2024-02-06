export default function Footer({completedTodos,totalTodos}){
    return (
        <div>
            <footer>
                <div className="footer-container">
                    <h3>Completed Todos : {completedTodos}</h3>
                    <h3>Total Todos : {totalTodos}</h3>
                </div>
            </footer>
        </div>
    )
}