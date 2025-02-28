import l from "@/fsd/features/auth/ui/LoginForm.module.scss";
import { SolidWarning } from "@/public/solidWarning";

export const ErrorComponent = ({message}) => {
    return (
        <div className={ l.errorBox }>
            < SolidWarning/>
            <div>ERROR: { message }</div>
        </div>
    )
}