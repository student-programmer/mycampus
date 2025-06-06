import { IconProps } from "@/fsd/shared/types";

export const MailIcon = ({style}: IconProps) => {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={ style }>
            <path
                d="M3.5 7C3.5 6.46957 3.71071 5.96086 4.08579 5.58579C4.46086 5.21071 4.96957 5 5.5 5H19.5C20.0304 5 20.5391 5.21071 20.9142 5.58579C21.2893 5.96086 21.5 6.46957 21.5 7M3.5 7V17C3.5 17.5304 3.71071 18.0391 4.08579 18.4142C4.46086 18.7893 4.96957 19 5.5 19H19.5C20.0304 19 20.5391 18.7893 20.9142 18.4142C21.2893 18.0391 21.5 17.5304 21.5 17V7M3.5 7L12.5 13L21.5 7"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}