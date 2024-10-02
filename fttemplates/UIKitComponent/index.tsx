import cn from "classnames";

import { <FTName | constantcase>_TEST_ID } from "./constants";
import type { <FTName>Props } from "./types";
export type { <FTName>Props } from "./types";

import { forwardRef } from "react";

import styles from "./styles.module.scss";

export const <FTName> = forwardRef<HTMLDivElement, <FTName>Props>(
    ({ children }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(styles.<FTName | lowercase>)}
                data-testid={<FTName | uppercase>_TEST_ID}
            >
                {children}
            </div>
        );
    },
);
