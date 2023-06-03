export interface Job {
    id: number,
    title: string,
    organization: string,
    degree: "Master's",
    jobType: string,
    locations: string[],
    minimumQualifications: string[],
    preferredQualifications: string[],
    description: string[],
    dateAdded: string,
}

export interface Spotlight {
    id: number,
    img: string,
    title: string,
    description: string
}