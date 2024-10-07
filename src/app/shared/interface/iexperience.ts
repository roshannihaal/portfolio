export interface IExperience {
    company: string;
    location: string;
    titles: ITitle[];
}

interface ITitle {
    startDate: string;
    endDate?: string;
    name: string;
}
