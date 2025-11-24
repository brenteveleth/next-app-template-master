import React from 'react';
import { Badge as MantineBadge, type BadgeProps as MantineBadgeProps } from '@mantine/core';
import styles from './Badge.module.css';

export interface BadgeProps extends MantineBadgeProps {
  role?: 'primary' | 'secondary' | 'positive' | 'negative' | 'warning' | 'info';
  iconOnly?: boolean;
  leftSection?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

const iconSizeMap: Record<string, number> = {
  sm: 12,
  md: 12,
  lg: 16,
};

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ role, iconOnly = false, children, leftSection, size = 'md', ...props }, ref) => {
    let adjustedLeftSection = leftSection;

    if (iconOnly && React.isValidElement(leftSection)) {
      const iconSize = iconSizeMap[size as string] || 12;
      // Clone the icon element with the size prop (assume consumer passes compatible icon)
      adjustedLeftSection = React.cloneElement(leftSection as React.ReactElement<any>, {
        size: iconSize,
      });
    }

    return (
      <MantineBadge
        ref={ref}
        {...props}
        data-role={role}
        size={size}
        leftSection={adjustedLeftSection}
        classNames={{
          root: iconOnly ? `${styles.root} ${styles.iconOnly}` : styles.root,
          label: styles.label,
          section: styles.section,
        }}
      >
        {!iconOnly && children}
      </MantineBadge>
    );
  }
);

Badge.displayName = 'Badge';
