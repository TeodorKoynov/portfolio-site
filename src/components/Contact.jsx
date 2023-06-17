"use client"

import {useState, useRef} from "react";
import {motion} from "framer-motion";

import {Resend} from "resend";
import {Email} from "@/components/email"

import SectionWrapper from "@/hoc/SectionWrapper";
import {slideIn} from "@/utils/motion";
import {EarthCanvas} from "@/components/canvas/Earth";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState(false);

    const changeHandler = (e) => {
        const {name, value} = e.target;

        setForm({...form, [name]: value});
    }


    const submitHandler = (e) => {
        e.preventDefault();

        setLoading(true);

        fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({name: form.name, email: form.email, question: form.message})
        })
            .then(res => res.json())
            .then((data) => {
                console.log("Data", data)
                setLoading(false);
                alert("Thank you! I will get back to you as soon as possible.");

                setForm({
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .catch((err) => {
                setLoading(false);
                console.log("error", err.message);
                alert("Something went wrong!")
            });

    }

    return (
        <div className={"xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"}>
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className={"flex-[0.75] bg-black-100 p-8 rounded-2xl"}
            >
                <p className={"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"}>Get in touch</p>
                <h3 className={"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>Contact.</h3>

                <form action="" ref={formRef} onSubmit={submitHandler} className={"mt-12 flex flex-col gap-8"}>
                    <label className={"flex flex-col"} htmlFor="">
                        <span className={"text-white font-medium mb-4"}>Your Name</span>
                        <input
                            type="text"
                            name={"name"}
                            value={form.name}
                            onChange={changeHandler}
                            placeholder={"What's your name?"}
                            className={"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"}
                        />
                    </label>

                    <label className={"flex flex-col"} htmlFor="">
                        <span className={"text-white font-medium mb-4"}>Your Email</span>
                        <input
                            type="email"
                            name={"email"}
                            value={form.email}
                            onChange={changeHandler}
                            placeholder={"What's your email?"}
                            className={"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"}
                        />
                    </label>

                    <label className={"flex flex-col"} htmlFor="">
                        <span className={"text-white font-medium mb-4"}>Your Message</span>
                        <textarea
                            rows={7}
                            name={"message"}
                            value={form.message}
                            onChange={changeHandler}
                            placeholder={"What do you want to say?"}
                            className={"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"}
                        />
                    </label>

                    <button type={"submit"}
                            className={"bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"}
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className={"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"}
            >
                <EarthCanvas/>
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact");