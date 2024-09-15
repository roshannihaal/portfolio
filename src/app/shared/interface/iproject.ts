export interface IProject {
    title: string;
    service: string;
    description: string;
    techstack: string[];
    git: IGit[];
    remarks?: IRemark;
}

interface IRemark {
    icon: string;
    content: string;
    color: string;
}

interface IGit {
    [keys: string]: string;
}
