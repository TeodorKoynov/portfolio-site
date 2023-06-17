import {NextResponse} from 'next/server';
import nodemailer from 'nodemailer';
import {render} from "@react-email/render";
import {Email} from '@/components/email';

export async function POST(request) {
    const formData = await request.json();

    const transporter = nodemailer.createTransport({
        service:"Gmail",
        auth: {
            user: process.env.MAIL_EMAIL,
            pass: process.env.MAIL_PASS,
        },
    });

    const html = render(<Email email={formData.email} name={formData.name} question={formData.question}/>)


    const mailData = {
        from: formData.email,
        to: 'teodor.koynov2005@gmail.com',
        subject: `A New Message From ${formData.name}`,
        html: html
    }

    await transporter.sendMail(mailData, function (err, info) {
        if (err) {
            console.log("Error", err)
            return NextResponse.json({err});
        } else {
            console.log("info", info)
            return NextResponse.json(info);
        }
    })

    return NextResponse.json({status: 200});
}