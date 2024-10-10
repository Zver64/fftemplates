import cn from "classnames";

import type { <FTName>Props } from "./types";

import styles from "./styles.module.scss";

export const <FTName> = ({ children }: <FTName>Props) => {
        return (
            <div
                className={cn(styles.<FTName | lowercase>)}
            >
                {children}
            </div>
        );
    };