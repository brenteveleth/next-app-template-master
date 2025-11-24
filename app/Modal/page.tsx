'use client';

import {
  IconAdjustments,
  IconCalendar,
  IconMessageCircle,
  IconSettings,
} from '@tabler/icons-react';
import { Alert, Box, Button, Divider, Modal, Space, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { SpotModal } from '../../components/SpotModal/SpotModal';
import ComponentsDemoLayout from '../components-demo-layout';

export default function ModalDemo() {
  const [opened, { open, close }] = useDisclosure(false);

  const [openedSpot, { open: openSpot, close: closeSpot }] = useDisclosure(false);

  return (
    <ComponentsDemoLayout>
      <Title order={2}>Modal</Title>
      <Text size="md" mt="xs" c="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <>
          <Modal opened={opened} onClose={close} title="Modal Header">
            <Text>Modal content goes here</Text>
          </Modal>

          <Button variant="default" onClick={open}>
            Open modal
          </Button>
        </>
        <Space h="md" />
        <>
          <SpotModal
            opened={openedSpot}
            onClose={closeSpot}
            title="Modal Header"
            subheaderText="Subheader Text"
          >
            <Text>
              Now you can link a patient's diagnostic history between referral and referring clinics
              and share their results in real time to ensure both clinics have the most complete and
              recent information.
            </Text>
          </SpotModal>

          <Button variant="default" onClick={openSpot}>
            Open Spot modal
          </Button>
        </>
        <Space h="md" />
        <Alert title="Note" color="orange"></Alert>
      </Box>
    </ComponentsDemoLayout>
  );
}
