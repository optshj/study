export interface AwardData {
    id: string
    title: string
    date: string
}

export interface EducationData {
    id: string
    title: string
    startDate?: string
    endDate?: string
}
export interface ProfileData {
    id: string
    name: string
    email: string
}
export interface ProjectData {
    id: string
    title: string
    text: string
    startDate?: string
    endDate?: string
}

export interface QualificationData {
    id: string
    title: string
    date: string
}

export interface SkillData {
    id: string
    title: string
    text: string
}

export interface WorkExperienceData {
    id: string
    title: string
    startDate: string
    endDate: string
}

export type ResumePayloads = {
    award: AwardData
    education: EducationData
    project: ProjectData
    profile: ProfileData
    qualification: QualificationData
    skill: SkillData
    workExperience: WorkExperienceData
}
