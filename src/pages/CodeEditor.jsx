
import Editor from "@monaco-editor/react";


export default function CodeEditor() {
    return(
        <div>

            <p>MONACO TEXTEDITOR</p>
            <Editor
            height="50vh"
            defaultLanguage="javascript"
            defaultValue="// skriv kod här"
            />
        </div>
    )
}