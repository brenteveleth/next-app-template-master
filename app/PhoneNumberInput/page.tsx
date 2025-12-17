'use client';

import {
  Box,
  Divider,
  Notification,
  Text,
  Title,
} from '@mantine/core';
import PhoneNumberInput from '@/components/PhoneNumberInput/PhoneNumberInput';
import ComponentsDemoLayout from '../components-demo-layout';


export default function PhoneNumberInputDemo() {

  return (
    <ComponentsDemoLayout>
      <Title order={2}>PhoneNumberInput</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
       
            <PhoneNumberInput
              label="Phone Number"
              name="phone"
              value=""
              onChange={() => {}}
              mt="lg"
              size="sm"
              placeholder="(___) ___-____"
              maw={120}
              w="100%"
            />
            <PhoneNumberInput
              label="Phone Number"
              name="phone"
              value=""
              onChange={() => {}}
              mt="lg"
              size="md"
              placeholder="(___) ___-____"
              maw={140}
              w="100%"
            />
            <PhoneNumberInput
              label="Phone Number"
              name="phone"
              value=""
              onChange={() => {}}
              mt="lg"
              size="lg"
              placeholder="(___) ___-____"
              maw={164}
              w="100%"
            />
      </Box>
    </ComponentsDemoLayout>
  );
}
