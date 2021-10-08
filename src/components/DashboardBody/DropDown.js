function DropDown(props) {
    return (
        <div id="share-dropdown">
            <button title="نقل إلى عام" onClick={() => {
                if (props.selectedFiles.length > 0) {
                    props.setPopupType("share-public");
                }
            }}>نقل إلى المجلد العام</button>
            <button title="إرسال" onClick={() => {
                if (props.selectedFiles.length > 0) {
                    props.setPopupType("share-individual");
                }
            }}>ارسال الملف إلى شخص معين</button>
        </div>
    );
}

export default DropDown;