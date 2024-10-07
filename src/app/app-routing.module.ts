import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    },
    {
        path: 'education',
        loadChildren: () => import('./education/education.module').then(m => m.EducationModule),
    },
    {
        path: 'skills',
        loadChildren: () => import('./skills/skills.module').then(m => m.SkillsModule),
    },
    {
        path: 'resume',
        loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule),
    },
    {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
    },
    {
        path: 'experience',
        loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
