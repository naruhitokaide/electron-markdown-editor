import React, { useCallback, useState } from 'react'
import Editor from './components/editor/editor'
import Preview from './components/preview/preview'
import './styles/app.css'

const App: React.FC = () => {
    const [doc, setDoc] = useState<string>('# Hello, World!\n')

    const handleDocChange = useCallback((newDoc) => setDoc(newDoc), [])
    return (
        <div className="app">
            <Editor onChange={handleDocChange} initialDoc={doc} />
            <Preview doc={doc} />
        </div>
    )
}

export default App
