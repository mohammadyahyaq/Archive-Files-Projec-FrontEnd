function FileInfo(props) {
    return [
        <div key={props.id} className="info-row">
            <h1>صاحب الملف:</h1>
            <p>{props.fileOwner}</p>
        </div>,
        <div key={props.id} className="info-row">
            <h1>اسم الملف:</h1>
            <p>{props.fileName}</p>
        </div>,
        <div key={props.id} className="info-row">
            <h1>نوع الملف:</h1>
            <p>{props.isDirectory ? "مجلد" : "ملف"}</p>
        </div>,
        <div key={props.id} className="info-row">
            <h1>آخر تعديل:</h1>
            <p>{props.lastModified}</p>
        </div>
    ];
}

export default FileInfo;