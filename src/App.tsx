import { DeepChat } from "deep-chat-react"
import './App.css'

function App() {

  const key = import.meta.env.API_KEY_OPEN_IA;

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw"
    }}>
      <DeepChat 
/*         demo={true} */

        directConnection={{
          openAI: {
            key: key
          }
        }}
        textInput={{
          placeholder: {text: "Escribe aquí..."}
        }}
      />
    </div>
    
  )
}

export default App
