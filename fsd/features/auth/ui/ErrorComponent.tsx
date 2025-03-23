import l from "@/fsd/features/auth/ui/LoginForm.module.scss";
import { SolidWarning } from "@/public/solidWarning";

interface ErrorComponentProps {
    message: string | string[] | never[];
}

export const ErrorComponent = ({message}: ErrorComponentProps) => {
    return (
        <div className={ l.errorBox }>
            < SolidWarning/>
            <div>ERROR: { message }</div>
        </div>
    )
}