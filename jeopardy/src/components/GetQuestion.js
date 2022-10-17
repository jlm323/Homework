import { useState } from "react";
import Score from "./Score";
import Details from "./Details";
import Answer from "./Answer";

export default function GetQuestion() {

    let [question, setQuestion] = useState("")

    const getQuestion = async () => {
        const response = await fetch('http://jservice.io/api/random')
        const data = await response.json()
        setQuestion(data)
    }

    return (
        <div className="question">
            <Score question={question}/>
            <h2 className="play">Let's Play!</h2>
            <button className="get-ques" onClick={getQuestion}>Get Question</button>
            <Details question={question}/>
            <Answer question={question}/>
        </div>
    )
}