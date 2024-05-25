export interface IExperience {
    _id: string
    role: string
    company: string
    url?: string
    startDate: Date
    endDate?: Date
    content: any
    tags: string[]
}

export interface IProject {
    _id: string
    name: string
    desc: string
    url: string
    content: any
    tags: string[]
    imageUrl: string
}
