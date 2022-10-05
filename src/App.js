import './App.css';
import { useSelector } from 'react-redux';

function App() {
    const userList = useSelector((state) => state.users.value);
    return (
        <div className="App">
            <div className="addUser">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="UserName" />
                <button>Add User</button>
            </div>
            <div className="displayUsers">
                {userList.map((user) => (
                    <h1>{user.name}</h1>
                ))}
            </div>
        </div>
    );
}

export default App;
