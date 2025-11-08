import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/shared/interface';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
    projects: IProject[];

    ngOnInit(): void {
        this.projects = [
            {
                title: 'Secure OTP',
                service: 'OTP Authentication System',
                description:
                    'A robust application for user authentication, utilizing both TOTP (Time-based One-Time Password) and HOTP (HMAC-based One-Time Password) methods. The app securely generates and verifies one-time passwords, providing a dedicated and efficient solution for user authentication.',
                techstack: ['Angular', 'Nodejs', 'Redis', 'Docker'],
                git: [
                    { secure_otp_frontend: 'https://github.com/roshannihaal/secure_otp_frontend' },
                    { secure_otp_backend: 'https://github.com/roshannihaal/secure_otp_backend' },
                ],
            },
            {
                title: 'Product CRUD',
                service: 'Product Management System',
                description:
                    'A full-stack product and category management system featuring pagination, sorting, search, CSV-based bulk upload and report download. Authentication data is securely transmitted using RSA encryption, ensuring safe communication between the Angular frontend and Node.js backend.',
                techstack: ['Angular', 'Nodejs', 'PostgreSQL', 'Docker'],
                git: [
                    {
                        product_crud_frontend:
                            'https://github.com/roshannihaal/product-crud-frontend',
                    },
                    {
                        product_crud_backend:
                            'https://github.com/roshannihaal/product-crud-backend',
                    },
                ],
            },

            {
                title: 'Synchrona',
                service: 'Time Progress Tracker',
                description:
                    'An interactive tool that calculates and displays the real-time progression of various time units, including minute, hour, month, and year. Users can select a time unit to view the percentage of the current period that has passed. This project provides a clear, easy-to-understand display of time progression.',
                techstack: ['Angular', 'Nodejs', 'Docker'],
                git: [
                    { sycnhrona_frontend: 'https://github.com/roshannihaal/synchrona_frontend' },
                    { sycnhrona_backend: 'https://github.com/roshannihaal/synchrona_backend' },
                ],
            },
            {
                title: 'Portfolio',
                service: 'Professional Portfolio',
                description: `You're currently navigating through my professional portfolio—how convenient! 🎉 Here, you’ll uncover a detailed snapshot of my skills, experience, and education. As you explore, you'll get to know a bit more about me, my technical expertise, and my career path.`,
                techstack: ['Angular'],
                git: [{ portfolio: 'https://github.com/roshannihaal/portfolio' }],
            },
        ];
    }
}
