import React from 'react';
import { Button, CloseButton, Group, Modal, Space, Text } from '@mantine/core';
import styles from './SpotModal.module.css';

export type SpotModalProps = React.ComponentProps<typeof Modal> & {
  showFooter?: boolean;
  onPrimary?: () => void;
  onSecondary?: () => void;
  submitLabel?: string;
  cancelLabel?: string;
  showSubheader?: boolean;
  subheaderText?: string;
  showPrevious?: boolean;
  previousLabel?: string;
  onPrevious?: () => void;
};

function ModalHeader({ title, onClose }: { title: React.ReactNode; onClose: () => void }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
        marginTop: '-1rem',
      }}
    >
      <h3
        style={{
          fontSize: '1.625rem',
          fontWeight: 400,
          lineHeight: '1.4615',
          fontFamily: 'Sora, sans-serif',
          paddingLeft: '16px',
        }}
      >
        {title}
      </h3>
      <CloseButton onClick={onClose} />
    </div>
  );
}

export function SpotModal({
  showFooter = true,
  onPrimary,
  onSecondary,
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
  showSubheader = false,
  subheaderText = '',
  showPrevious = false,
  previousLabel = 'Previous',
  onPrevious,
  children,
  ...modalProps
}: SpotModalProps) {
  return (
    <Modal
      {...modalProps}
      withCloseButton={false}
      title={null}
      classNames={{
        title: styles.title,
        ...modalProps.classNames,
      }}
    >
      {showSubheader && (
        <Text fw={600} style={{ lineHeight: 1 }}>
          {subheaderText}
        </Text>
      )}
      {modalProps.title && <ModalHeader title={modalProps.title} onClose={modalProps.onClose} />}

      {/* Modal title will be rendered by Mantine's Modal via modalProps.title */}
      <div className={showFooter ? styles.content : styles.contentNoFooter}>{children}</div>
      {showFooter && (
        <div className={styles.footer}>
          <div className={styles.left}>
            <Button variant="subtle" radius="xl" onClick={modalProps.onClose}>
              {cancelLabel}
            </Button>
          </div>
          <div className={styles.right}>
            {showPrevious && (
              <Button
                variant="outline"
                radius="xl"
                onClick={onPrevious}
                style={{ marginRight: 'var(--mantine-spacing-md)' }}
              >
                {previousLabel}
              </Button>
            )}
            <Button variant="primary" type="submit" radius="xl">
              {submitLabel}
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
