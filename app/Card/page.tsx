import { Box, Card, CloseButton, Divider, Group, Space, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function CardDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Card</Title>
      <Text size="md" mt="xs" c="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <Card padding="sm" shadow="none">
          <Text>This is a card component.</Text>
        </Card>
        <Space h="md" />
        <Card padding="sm" withBorder shadow="none">
          <Group justify="space-between" align="top">
            <Text>This is a card component.</Text>
            <CloseButton />
          </Group>
        </Card>
        <Space h="xl" />

        <Card shadow="none" padding="lg" withBorder mih="321px" maw="518px">
          <Box pb="lg">
            {/* <Title order={3}>Card Title</Title> */}
            <Group justify="space-between" align="top">
              <Title order={3}>Card Title</Title>
              <CloseButton />
            </Group>
          </Box>
          <Box pt="lg" pb="lg" flex="1">
            <Text>
              The easiest way to get started is to use one of the templates. All templates include
              required dependencies and pre-configured settings. Some templates also include
              additional features like Jest, Storybook, ESLint, etc. Templates include only
              @mantine/core and @mantine/hooks packages, if you need additional @mantine/* packages,
              follow installation instructions of the package you want to use. To get started with a
              template, open it on GitHub and click "Use this template" button. In order to use this
              feature you need to be logged in to your GitHub account. If you are not familiar with
              GitHub, you can find a detailed instruction on how to bootstrap a project from a
              template in this article.
            </Text>
          </Box>
          <Box pt="lg">
            <Text size="sm" c="dimmed">
              Footer text
            </Text>
          </Box>
        </Card>
      </Box>
    </ComponentsDemoLayout>
  );
}
