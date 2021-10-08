import { useState } from "react";
import { useSelector } from "react-redux";

function ShareIndividual(props) {
    const usersList = useSelector(state => state.allUsers);

    const [selectedUsers, setSelectedUsers] = useState([]);
    const [inputError, setInputError] = useState(false);
    return (
        <div className="share-individual">
            <h1>الأشخاص الذين تريد إرسال نسخة لهم؟</h1>
            <div className="input-container" data-error={inputError ? "يجب على الأقل اختيار شخص واحد قبل الإرسال" : undefined}>
            <div className="users-list">
                { usersList.map(user => {
                    return (
                        <div key={user.id}>
                            <input className="form-check-input" type="checkbox" onChange={e => {
                                if(e.target.checked) {
                                    setSelectedUsers(prevState => [...prevState, user]);
                                } else {
                                    setSelectedUsers(prevState => prevState.filter(selectedUser => selectedUser.id !== user.id));
                                }
                                if(selectedUsers.length > 0) {
                                    setInputError(false);
                                }
                            }} />
                            <i className="bi bi-person-circle"></i>
                            <p>{user.name}</p>
                        </div>
                    )
                })}
            </div>
            </div>
            <div className="share-individual-button">
                <button className="btn btn-primary" onClick={() => {
                    if(selectedUsers.length > 0) {
                        // ajax to the server
                        props.setPopupType('');
                    } else {
                        setInputError(true);
                    }
                }}>ارسال</button>
                <button className="btn btn-primary" onClick={() => {
                    props.setPopupType('');
                }}>إلغاء</button>
            </div>
        </div>
    );
}

export default ShareIndividual;