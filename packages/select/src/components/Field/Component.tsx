import React from 'react';
import cn from 'classnames';
import ArrowIcon from '@alfalab/icons-classic/ArrowDownMBlackIcon';
import { ItemShape, FieldProps } from '../../Component';

import styles from './index.module.css';

export const Field = <T extends ItemShape>({
    itemToString,
    size = 'm',
    isOpen,
    disabled,
    filled,
    label,
    placeholder,
    selectedItems,
    leftAddons,
    showArrow = true,
}: FieldProps<T>) => {
    const leftAddonsRenderer = () =>
        leftAddons && <span className={styles.addons}>{leftAddons}</span>;

    return (
        <span
            className={cn(styles.component, styles[size], {
                [styles.isOpen]: isOpen,
                [styles.disabled]: disabled,
                [styles.filled]: filled,
                [styles.hasLabel]: label,
            })}
        >
            {leftAddonsRenderer()}

            <span className={styles.contentWrapper}>
                {placeholder && !filled && (
                    <span className={styles.placeholder}>{placeholder}</span>
                )}

                {label && <span className={styles.label}>{label}</span>}

                {filled && (
                    <span className={styles.value}>
                        {selectedItems.map(item => itemToString(item)).join(', ')}
                    </span>
                )}
            </span>

            {showArrow && (
                <span className={cn(styles.addons)}>
                    <ArrowIcon className={cn(styles.arrow)} />
                </span>
            )}
        </span>
    );
};
