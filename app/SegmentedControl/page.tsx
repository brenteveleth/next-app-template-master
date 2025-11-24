'use client';

import { Box, Center, Divider, Group, SegmentedControl, Stack, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function SegmentedControlDemo() {
  // const [opened, { close, open }] = useDisclosure(false);
  return (
    <ComponentsDemoLayout>
      <Title order={2}>SegmentedControl</Title>
      <Text size="md" mt="xs" c="dimmed">
        Lorem ipsum
      </Text>
      <Divider my="lg" mb="xl" />
      <Group mt="xl" style={{ gap: 20 }}>
        <SegmentedControl
          fullWidth={false}
          size="sm"
          data={[
            { label: 'Shred', value: 'shred' },
            { label: 'Djent', value: 'djent' },
            { label: 'Choogle', value: 'choogle' },
          ]}
        />
        <SegmentedControl
          size="md"
          data={[
            { label: 'Doom', value: 'doom' },
            { label: 'Sludge', value: 'sludge' },
            { label: 'Speed', value: 'speed' },
          ]}
        />
        <SegmentedControl
          size="lg"
          data={[
            { label: 'Psych', value: 'psych' },
            { label: 'Stoner', value: 'stoner' },
            { label: 'Prog', value: 'prog' },
          ]}
        />
      </Group>
      <Text mt="xl">Full width</Text>
      <SegmentedControl
        fullWidth
        size="sm"
        data={[
          { label: 'Doom', value: 'doom' },
          { label: 'Sludge', value: 'sludge' },
          { label: 'Speed', value: 'speed' },
        ]}
      />
    </ComponentsDemoLayout>
  );
}
