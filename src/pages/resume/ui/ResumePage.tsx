import { Award, Education, Profile, Project, Qualification, Skill, WorkExperience } from '@/features/resume'
export function ResumePage() {
    return (
        <div className="w-full py-10">
            <div className="mb-10">
                <h1 className="text-2xl font-bold">포트폴리오 페이지</h1>
                <span className="text-secondary">나의 포트폴리오를 관리할 수 있습니다.</span>
            </div>
            <div className="mb-8 flex w-full flex-row gap-8">
                <div className="flex flex-1 flex-col gap-8">
                    <Profile />
                    <Qualification />
                    <Skill />
                </div>
                <div className="flex flex-1 flex-col gap-8">
                    <Education />
                    <Award />
                    <WorkExperience />
                </div>
            </div>
            <Project />
        </div>
    )
}
