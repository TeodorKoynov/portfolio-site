import {Html} from "@react-email/html";

export function Email({name, email, question}) {

    return (
        <Html lang={"en"} className={"flex flex-col gap-5"}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Question: {question}</p>
        </Html>
    )
}

export default Email;