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
                title: 'Flavor',
                service: 'Online Food Ordering Platform',
                description: `A secure and feature-rich platform for seamless online food ordering. Users can register, log in with two-factor authentication (2FA), browse menus, place orders, and make payments through a secure gateway. Restaurant owners can create accounts, add their restaurants, and manage their menus. The platform includes a dedicated admin console for overseeing and managing the system’s operations efficiently.`,
                techstack: ['Angular', 'Nodejs', 'PostreSQL', 'Redis', 'Docker'],
                git: [
                    { flavor_frontend: 'https://github.com/roshannihaal/flavor_frontend' },
                    { flavor_backend: 'https://github.com/roshannihaal/flavor_backend' },
                ],
                remarks: {
                    icon: 'pi pi-exclamation-triangle',
                    content: 'This project is under development.',
                    color: '#ff6700',
                },
            },
            {
                title: 'Porfolio',
                service: 'Professional Portfolio',
                description: `You're currently navigating through my professional portfolio—how convenient! 🎉 Here, you’ll uncover a detailed snapshot of my skills, experience, and education. As you explore, you'll get to know a bit more about me, my technical expertise, and my career path.`,
                techstack: ['Angular'],
                git: [{ portfolio: 'https://github.com/roshannihaal/portfolio' }],
                remarks: {
                    icon: 'pi pi-exclamation-triangle',
                    content: 'This project is under development.',
                    color: '#ff6700',
                },
            },
        ];
    }
}
